import { useAppSelector } from '../../redux/hooks';
import { selectCurrencies } from '../../redux/slices/portfolio/portfolioSlice';
import { AvailableCurrencyItem } from '../AvailableCurrencyItem/AvailableCurrencyItem';
import styles from './AvailableCurrencyList.module.scss';

export const AvailableCurrencyList = () => {
  const currencies = useAppSelector(selectCurrencies);

  return (
    <ul className={styles.currencyList}>
      {currencies?.map(({ name, price, priceChange }) => (
        <AvailableCurrencyItem
          name={name}
          price={price}
          priceChange={priceChange}
          key={name}
        />
      ))}
    </ul>
  );
};
