import {ICrypto} from "@/utils/types";
import styles from '@/styles/CryptoCard.module.scss';
import {formatMarketCap, formatNumber} from "@/utils/logicHelper";


const CryptoCard = ({data}: { data: ICrypto }) => (
  <div className={styles.card}>

    <div className={styles.cardHeader}>
      <h2 className={styles.title}>
        {data.name} ({data.symbol})
      </h2>
      <p className={styles.subText}>Rank: #{data.rank}</p>
    </div>

    <div className={styles.statRow}>
      <span>Price:</span>
      <h3>${formatNumber(data.priceUsd)}</h3>
    </div>

    <div className={styles.statRow}>
      <span>24H Change:</span>
      <strong
        className={parseFloat(data.changePercent24Hr) >= 0
          ? styles.changePositive
          : styles.changeNegative
        }>
        {parseFloat(data.changePercent24Hr).toFixed(2)}%
      </strong>
    </div>

    <div className={styles.statRow}>
      <span>Market Cap:</span>
      <strong>{formatMarketCap(data.marketCapUsd)}</strong>
    </div>

    <div className={styles.statRow}>
      <span>24H Volume:</span>
      <strong>{formatMarketCap(data.volumeUsd24Hr)}</strong>
    </div>

    <div className={styles.statRow}>
      <span>Supply:</span>
      <strong>{formatNumber(data.supply)}</strong>
    </div>

    {data.maxSupply && (
      <div className={styles.statRow}>
        <span>Max Supply:</span>
        <strong>{formatNumber(data.maxSupply)}</strong>
      </div>
    )}

    <div className={styles.statRow}>
      <span>VWAP 24H:</span>
      <strong>${formatNumber(data.vwap24Hr)}</strong>
    </div>

    <a
      href={data.explorer}
      className={styles.explorerLink}
      target="_blank"
      rel="noopener noreferrer">
      View on Explorer
    </a>
  </div>
);

export default CryptoCard;
