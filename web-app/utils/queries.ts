import {ICrypto, ICurrency, IResponse} from "@/utils/types";

export const fetchCoins = async (currency: string): Promise<IResponse<ICrypto[]>> => {
  const res = await fetch(`/api/crypto?vs_currency=${currency}`);
  return await res.json();
};

export const fetchSupportedCurrencies = async (): Promise<IResponse<ICurrency[]>> => {
  const res = await fetch(`/api/supportedCurrencies`);
  return await res.json();
};

