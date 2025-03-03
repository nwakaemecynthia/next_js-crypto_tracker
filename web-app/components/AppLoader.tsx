import styles from '@/styles/AppLoader.module.scss';

const AppLoader = () => (
  <div className={styles.appLoader}>
    <div className={styles.appLoaderContainer}>
      <div className={styles.debounce}>
        <div className={styles.doubleBounceOuter}/>
        <div className={styles.doubleBounceInner}/>
      </div>
    </div>
  </div>
);

export default AppLoader;
