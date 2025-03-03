import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

import {ResponseType} from "@/utils/enum";
import styles from '@/styles/Home.module.scss';
import {fetchCryptoPrices} from "@/utils/query";
import {ICrypto, IResponse} from "@/utils/types";
import CryptoCard from "@/components/CryptoCard";
import AppLoader from "@/components/AppLoader";

const Home = () => {
  const [search, setSearch] = useState<string>('');

  const {data, isLoading, refetch} = useQuery<IResponse<ICrypto[]>>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
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

  return (
    <div className={styles.container}>
      <h1>Crypto Price Tracker</h1>
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
        <CryptoCard key={coin.id} data={coin} />
      ))}
    </div>);
}

export default Home;
