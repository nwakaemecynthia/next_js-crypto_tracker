## 🔌 API

### crypto.ts

Handles API requests for fetching cryptocurrency data.

```ts
export const fetchCryptoPrices = async (): Promise<IResponse<ICrypto[]>> => {
  const res = await fetch('/api/crypto');
  return await res.json();
};
```

- **Endpoint:** `https://api.coincap.io/v2/assets`
- **Returns:** List of cryptocurrencies
- **Handles:** API responses, errors

➡️ **Next:** Learn about [State Management](./state-management.md).

---
