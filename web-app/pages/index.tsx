import {useMemo, useState} from "react";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";

import {ResponseType} from "@/utils/enums";
import {fetchCoins} from "@/utils/queries";
import styles from '@/styles/Home.module.scss';
import AppLoader from "@/components/AppLoader";
import {ICrypto, IResponse} from "@/utils/types";
import CryptoCard from "@/components/CryptoCard";
import {currencySymbols} from "@/utils/constants";
import CurrencyDropdown from "@/components/CurrencyDropdown";

const Home = () => {
  const defaultCurrency = "USD";
  const [search, setSearch] = useState<string>('');
  const [selectedCurrency, setSelectedCurrency] = useState(defaultCurrency)

  const {data, isLoading, refetch} = useQuery<IResponse<ICrypto[]>>({
    queryKey: ['cryptoCoins', selectedCurrency],
    queryFn: () => fetchCoins(selectedCurrency),
    staleTime: 60000,
  });

  const coins = data?.type === ResponseType.SUCCESS ? data.data : [];
  const errorMessage = data?.type === ResponseType.FAILED ? data.message : null;

  const filteredData = coins?.filter((coin: ICrypto) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleRefresh = async () => {
    setSearch('');
    window.scrollTo({top: 0, behavior: 'smooth'});
    await refetch();
  }

  const currency = useMemo(() => {
    return currencySymbols[selectedCurrency] || currencySymbols[defaultCurrency];
  }, [selectedCurrency, defaultCurrency]);


  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={`${styles.flex} ${styles.justifyBetween}`}>
          <div className={styles.flex}>
            <Image src="/logo.svg" alt="Logo" width={35} height={35} priority />
            <h1 style={{margin: "auto 0"}}>Crypto Tracker</h1>
          </div>
            <input className={styles.searchInput}
                   type="text"
                   placeholder="Search for a coin..."
                   value={search}
                   onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <div className={`${styles.flex} ${styles.flexEnd}`}>
          <CurrencyDropdown selectedCurrency={selectedCurrency}
                            onSelect={data => setSelectedCurrency(data.toUpperCase())}/>
        </div>


        {isLoading && <AppLoader/>}
        {errorMessage && <p>Error fetching data</p>}
        <div className={styles.gridContainer}>
          {filteredData?.slice(0, 5).map(coin => (
            <CryptoCard key={coin.id} currencySymbol={currency.symbol ?? "$"} data={coin} />
          ))}
        </div>
        <button className={styles.fab} onClick={handleRefresh}>
          <Image src="/refresh.svg" alt="Refresh" width={24} height={24} />
        </button>
      </div>
    </div>
  );
}

export default Home;
