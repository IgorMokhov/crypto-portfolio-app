import { AvailableCurrencyItem } from '../AvailableCurrencyItem/AvailableCurrencyItem';
import styles from './AvailableCurrencyList.module.scss';

export const AvailableCurrencyList = () => {
  return (
    <ul className={styles.tokenList}>
      <AvailableCurrencyItem name={'BTC'} price={851.0022} change={3.3} />
    </ul>
  );
};
