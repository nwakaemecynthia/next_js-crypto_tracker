## ⚡ State Management

### React Query

Used for **fetching, caching, and updating** cryptocurrency prices.

```tsx
const { data, isLoading, refetch } = useQuery<IResponse<ICrypto[]>>({
  queryKey: ['cryptoPrices'],
  queryFn: fetchCryptoPrices,
  staleTime: 60000,
});
```

- **`queryKey`**: Unique key to store cached data
- **`queryFn`**: Fetches data from API
- **`staleTime`**: Prevents refetching for 60 seconds
- **`isLoading`**: Shows loading state while fetching
- **`refetch`**: Manually refreshes data

➡️ **Next:** Learn about [Utilities](./utils.md).
