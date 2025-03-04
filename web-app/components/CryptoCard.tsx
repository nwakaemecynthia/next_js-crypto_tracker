import Image from "next/image";
import {ICrypto} from "@/utils/types";
import styles from '@/styles/CryptoCard.module.scss';
import {formatMarketCap, formatNumber} from "@/utils/logicHelper";

type IProps = {
  data: ICrypto,
  currencySymbol: string,
}
const CryptoCard = ({data, currencySymbol}: IProps) => (
  <div className={styles.card}>
    <div className={styles.cardHeader}>
      <div style={{display: "inline-flex", gap: "5px"}}>
        <Image src={data.image} alt={data.name} width={40} height={40} priority/>
        <h2 className={styles.title}>
          {data.name} ({data.symbol.toUpperCase()})
        </h2>
      </div>

      <p className={styles.subText}>Rank: #{data.market_cap_rank}</p>
    </div>

    <div className={styles.statRow}>
      <span>Price:</span>
      <h3>{currencySymbol}{formatNumber(data.current_price)}</h3>
    </div>

    <div className={styles.statRow}>
      <span>24H Change:</span>
      <strong className={parseFloat(data.price_change_percentage_24h.toString()) >= 0
        ? styles.changePositive
        : styles.changeNegative
      }>
        {formatNumber(data.price_change_percentage_24h)}%
      </strong>
    </div>

    <div className={styles.statRow}>
      <span>Market Cap:</span>
      <strong>{currencySymbol}{formatMarketCap(data.market_cap.toString())}</strong>
    </div>

    <div className={styles.statRow}>
      <span>24H Volume:</span>
      <strong>{currencySymbol}{formatMarketCap(data.total_volume.toString())}</strong>
    </div>

    <div className={styles.statRow}>
      <span>Circulating Supply:</span>
      <strong>{formatNumber(data.circulating_supply)}</strong>
    </div>

    {data.max_supply && (
      <div className={styles.statRow}>
        <span>Max Supply:</span>
        <strong>{formatNumber(data.max_supply)}</strong>
      </div>
    )}

    <div className={styles.statRow}>
      <span>All Time High:</span>
      <strong>{currencySymbol}{formatNumber(data.ath)}</strong>
    </div>

    <div className={styles.statRow}>
      <span>All Time Low:</span>
      <strong>{currencySymbol}{formatNumber(data.atl)}</strong>
    </div>

    <p className={styles.lastUpdated}>Last Updated: {new Date(data.last_updated).toLocaleString()}</p>
  </div>
);

export default CryptoCard;
