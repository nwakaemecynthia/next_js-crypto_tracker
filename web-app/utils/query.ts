import {ICrypto, IResponse} from "@/utils/types";

export const fetchCryptoPrices = async (): Promise<IResponse<ICrypto[]>> => {
  const res = await fetch('/api/crypto');
  return await res.json();
};
