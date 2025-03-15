import { AvailableToken } from '../AvailableToken/AvailableToken';
import styles from './AvailableTokenList.module.scss';

export const AvailableTokenList = () => {
  return (
    <ul className={styles.tokenList}>
      <AvailableToken name={'BTC'} price={851.0022} change={3.3} />
      <AvailableToken name={'BTC'} price={851.0022} change={2.3} />
      <AvailableToken name={'BTC'} price={851.0422} change={-2.3} />
      <AvailableToken name={'BTC'} price={851.0022} change={2.3} />
      <AvailableToken name={'BTC'} price={851.022} change={-2.3} />
      <AvailableToken name={'BTC'} price={851.0022} change={2.3} />
      <AvailableToken name={'BTC'} price={851.0022} change={-3.3} />
      <AvailableToken name={'BTC'} price={85156.0022} change={-2.3} />
    </ul>
  );
};
