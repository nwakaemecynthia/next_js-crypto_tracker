## 🛠️ Utilities (`utils`)

This section covers the utility files used in the project, including constants, enums, helper functions, API queries, and type definitions.
These utilities help maintain modularity, readability, and reusability within the project.

### 1. `constants.ts`
Defines the API URL used throughout the application.

```ts
export const BASE_API_URL = "https://api.coingecko.com/api/v3";
```

### 2. `enums.ts`
Defines the HTTP response type to handle success and error states.

```ts
export enum ResponseType {
  SUCCESS = "SUCCESS",
  FAILED = "FAILED",
}
```

### 3. `logicHelper.ts`
Contains helper functions for formatting numbers and market capitalization.

```ts
export const formatNumber = (value: number | string | undefined,  decimals = 2) => {
  if (!value) return 0.00 ;

  const number = typeof value === "string" ? parseFloat(value) : value;
  const numFormat = Intl.NumberFormat('en-US', {
    style: "decimal",
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  return numFormat.format(number);
};


export const formatMarketCap = (num: string) => {
  const number = parseFloat(num);
  if (number >= 1e12) return `${(number / 1e12).toFixed(2)}T`;
  if (number >= 1e9) return `${(number / 1e9).toFixed(2)}B`;
  if (number >= 1e6) return `${(number / 1e6).toFixed(2)}M`;
  return `$${formatNumber(num)}`;
};
```

### 4. `queries.ts`
Handles API requests for fetching cryptocurrency coins and supported currencies.

```ts
export const fetchCoins = async (currency: string): Promise<IResponse<ICrypto[]>> => {
  const res = await fetch(`/api/crypto?vs_currency=${currency}`);
  return await res.json();
};

export const fetchSupportedCurrencies = async (): Promise<IResponse<ICurrency[]>> => {
  const res = await fetch(`/api/supportedCurrencies`);
  return await res.json();
};

```

### 5. `types.d.ts`
Defines the `ICrypto` type and the generic response interface `IResponse<T>`.

```ts
type IResponse<T> = {
  data: T;
  status: ResponseType;
};

export interface ICrypto {
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
```
➡️ **Next:** Go back to [Project Overview](./project-overview.md).
