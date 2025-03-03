## 🛠️ Utilities (`utils`)

This section covers the utility files used in the project, including constants, enums, helper functions, API queries, and type definitions.
These utilities help maintain modularity, readability, and reusability within the project.

### 1. `constants.ts`
Defines the API URL used throughout the application.

```ts
export const API_URL = "https://api.coincap.io/v2/assets";
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
export const formatNumber = (num: number): string => {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(num);
};

export const formatMarketCap = (cap: number): string => {
  return cap >= 1e9
    ? `$${(cap / 1e9).toFixed(2)}B`
    : cap >= 1e6
    ? `$${(cap / 1e6).toFixed(2)}M`
    : `$${cap}`;
};
```

### 4. `query.ts`
Handles API requests for fetching cryptocurrency prices.

```ts
import { ICrypto, IResponse } from "@/utils/types";

export const fetchCryptoPrices = async (): Promise<IResponse<ICrypto[]>> => {
  const res = await fetch('/api/crypto');
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
  rank: number;
  symbol: string;
  name: string;
  supply: number;
  maxSupply: number | null;
  marketCapUsd: number;
  volumeUsd24Hr: number;
  priceUsd: number;
  changePercent24Hr: number;
  vwap24Hr: number;
  explorer: string;
}
```
➡️ **Next:** Go back to [Project Overview](./project-overview.md).
