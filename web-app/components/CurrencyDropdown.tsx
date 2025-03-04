import {useState, useEffect, useRef, ChangeEvent} from "react";
import {useQuery} from "@tanstack/react-query";
import {ICurrency, IResponse} from "@/utils/types";
import {fetchSupportedCurrencies} from "@/utils/queries";
import styles from "@/styles/CurrencyDropdown.module.scss";

type IProps = {
  selectedCurrency: string;
  onSelect: (currencyCode: string) => void;
};

const CurrencyDropdown = ({selectedCurrency, onSelect}: IProps) => {
  const {data: currencies, isLoading, error} = useQuery<IResponse<ICurrency[]>>({
    queryKey: ["currencies"],
    queryFn: fetchSupportedCurrencies,
    staleTime: 1000 * 60 * 60,
  });

  const [filteredCurrencies, setFilteredCurrencies] = useState<ICurrency[]>([]);
  const [searchTerm, setSearchTerm] = useState(selectedCurrency);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Update filtered currencies when data is loaded
  useEffect(() => {
    if (currencies?.data) setFilteredCurrencies(currencies.data);
  }, [currencies]);

  // Handle outside click to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    if (currencies?.data) {
      setFilteredCurrencies(
        currencies.data.filter(
          ({code, name, symbol}) =>
            code.toLowerCase().includes(value) || name.toLowerCase().includes(value) || symbol.includes(value)
        )
      );
    }
  };

  const handleSelect = (currencyCode: string) => {
    onSelect(currencyCode);
    setSearchTerm(currencyCode.toUpperCase());
    setIsOpen(false);
  };

  if (isLoading) return <p>Loading currencies...</p>;
  if (error) return <p>Error loading currencies</p>;

  return (
    <div className={styles["dropdown-container"]} ref={dropdownRef}>
      <input
        type="text"
        placeholder="Search / Select currency..."
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => setIsOpen(true)}
        className={styles["dropdown-input"]}
      />
      {isOpen && (
        <ul className={styles["dropdown-list"]}>
          {filteredCurrencies.length > 0 ? (
              filteredCurrencies.map(({code, name}) => (
                <li key={code} className={styles["dropdown-item"]} onClick={() => handleSelect(code)}>
                  {name} - {code}
                </li>
              ))
            )
            : (<li className={`${styles["dropdown-item"]} ${styles["no-results"]}`}>No results found</li>)
          }
        </ul>
      )}
    </div>
  );
};

export default CurrencyDropdown;
