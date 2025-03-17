import { useAppSelector } from '../../redux/hooks';
import { selectAvailableCurrencies } from '../../redux/slices/portfolio/portfolioSlice';
import { AvailableCurrencyItem } from '../AvailableCurrencyItem/AvailableCurrencyItem';
import { ICurrency } from '../../types/currencies';
import styles from './AvailableCurrencyList.module.scss';
import { filterCurrenciesByName } from '../../utils/currencyUtils';

interface AvailableCurrencyListProps {
  search: string;
  onSave: (currency: ICurrency) => void;
}

export const AvailableCurrencyList = ({ search, onSave }: AvailableCurrencyListProps) => {
  const currencies = useAppSelector(selectAvailableCurrencies);

  return (
    <ul className={styles.currencyList}>
      {filterCurrenciesByName(search, currencies).map((currency) => (
        <AvailableCurrencyItem {...currency} onSave={onSave} key={currency.name} />
      ))}
    </ul>
  );
};
