import "@/styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Crypto Tracker - Live Cryptocurrency Prices</title>
        <meta name="description" content="Track real-time crypto prices, trends, and conversions." />
      </Head>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
