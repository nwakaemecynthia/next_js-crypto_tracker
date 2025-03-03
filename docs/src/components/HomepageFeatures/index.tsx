import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Real-Time Crypto Tracking',
    Svg: require('@site/static/img/undraw_crypto_monitor.svg').default,
    description: (
      <>
        Get up-to-date cryptocurrency prices from the CoinCap API with seamless
        integration and automatic updates.
      </>
    ),
  },
  {
    title: 'User-Friendly Interface',
    Svg: require('@site/static/img/undraw_modern_ui.svg').default,
    description: (
      <>
        A clean and responsive UI built with SCSS and Next.js ensures a smooth
        user experience across all devices.
      </>
    ),
  },
  {
    title: 'Customizable Crypto Watchlist',
    Svg: require('@site/static/img/undraw_watchlist.svg').default,
    description: (
      <>
        Search, track, and monitor your favorite cryptocurrencies with a
        user-configurable tracking system.
      </>
    ),
  },
  {
    title: 'Efficient API Handling',
    Svg: require('@site/static/img/undraw_api_integration.svg').default,
    description: (
      <>
        Powered by React Query, our app optimizes API calls with caching,
        background updates, and smart error handling.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      {FeatureList.map((props, idx) => (
        <Feature key={idx} {...props} />
      ))}
    </section>
  );
}
