## 📄 Pages
---
id: state-management
title: State Management
sidebar_label: 📄 Pages
---
### index.tsx

- **Handles search functionality** (`useState<string>('')`)
- **Fetches crypto prices** using React Query:
  ```tsx
  const { data, isLoading, refetch } = useQuery<IResponse<ICrypto[]>>({
    queryKey: ['cryptoPrices'],
    queryFn: fetchCryptoPrices,
    staleTime: 60000,
  });
  ```
- **Filters data** based on user input
- **Maps & displays CryptoCard components**
- **Shows AppLoader** while fetching
- **Handles API errors**

➡️ **Next:** Learn about [API Integration](./api.md).

---
