## 🔌 Queries

### crypto.ts

Handles API requests for fetching cryptocurrency data.

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

- **Endpoint:** 
  - List of coins:`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${vs_currency}&order=market_cap_desc`
  Where vs_currency: is dynamic but defaults to USD (United States Dollars)
  - List of Supported Currencies: `https://api.coingecko.com/api/v3/simple/supported_vs_currencies`
- **Returns:** List of cryptocurrencies
- **Handles:** API responses, errors

➡️ **Next:** Learn about [Utilities](./utils.md).
