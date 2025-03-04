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
    await refetch();
  }

  const currency = useMemo(() => {
    return currencySymbols[selectedCurrency] || currencySymbols[defaultCurrency];
  }, [selectedCurrency, defaultCurrency]);


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Image src="/logo.svg" alt="Logo" width={40} height={40} priority />
        <h1 style={{margin: "auto 0"}}>Crypto Tracker</h1>
      </div>
      <CurrencyDropdown selectedCurrency={selectedCurrency}
                        onSelect={data => setSelectedCurrency(data.toUpperCase)}/>
      <input className={styles.searchInput}
             type="text"
             placeholder="Search for a coin..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
      />

      <button className={styles.button} onClick={handleRefresh}>Refresh</button>

      {isLoading && <AppLoader/>}
      {errorMessage && <p>Error fetching data</p>}
      {filteredData?.slice(0, 5).map(coin => (
        <CryptoCard key={coin.id} currencySymbol={currency.symbol ??  "$"} data={coin} />
      ))}
    </div>);
}

export default Home;
