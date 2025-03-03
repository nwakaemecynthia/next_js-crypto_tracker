import {ResponseType} from "@/utils/enum";

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
}

type IResponse<T> = {
  data?: T;
  type: ResponseType;
  message: string;
}
