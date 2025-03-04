import {Html, Head, Main, NextScript} from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta charSet="UTF-8"/>
        <meta name="theme-color" content="#ff9800"/>
        <meta name="title" content="Crypto Tracker - Live Crypto Prices & Insights"/>
        <meta
          name="description"
          content="Track real-time cryptocurrency prices, market trends, and conversions with the Crypto Tracker app. Powered by CoinGecko API."
        />
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>
    </Html>
  );
}
