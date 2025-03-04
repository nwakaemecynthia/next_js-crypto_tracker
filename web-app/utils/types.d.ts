import {ResponseType} from "@/utils/enums";

/*
// coincap type
type ICrypto = {
    id: string;
  name: string;
  symbol: string;
  rank: string;
  priceUsd: string;
  changePercent24Hr: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  supply: string;
  maxSupply: string;
  vwap24Hr: string;
  explorer: string;
}*/

// coingecko type
type ICrypto = {
  id: string;
  ath: string;
  atl: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  last_updated: string | number | Date;
  price_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number | null;
  max_supply: number | null;
}

type ICurrency = {
  code: string; symbol: string; name: string
}

type IResponse<T> = {
  data?: T;
  type: ResponseType;
  message: string;
}
