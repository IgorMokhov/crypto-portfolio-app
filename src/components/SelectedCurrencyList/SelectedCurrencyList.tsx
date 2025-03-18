import { useAppDispatch } from '../../redux/hooks';
import { removeSelectedCurrency } from '../../redux/slices/portfolio/portfolioSlice';
import { ICurrency } from '../../types/currencies';
import { CurrencyHeader } from '../CurrencyHeader/CurrencyHeader';
import { SelectedCurrencyItem } from '../SelectedCurrencyItem/SelectedCurrencyItem';
import styles from './SelectedCurrencyList.module.scss';

interface ISelectedCurrencyListProps {
  currencies: ICurrency[];
}

export const SelectedCurrencyList = ({ currencies }: ISelectedCurrencyListProps) => {
  const dispatch = useAppDispatch();

  const currencyRemoveHandler = (name: string) => {
    dispatch(removeSelectedCurrency(name));
  };

  return currencies.length > 0 ? (
    <>
      <CurrencyHeader />
      <ul className={styles.currencyList}>
        {currencies.map((currency) => (
          <SelectedCurrencyItem
            {...currency}
            onRemove={currencyRemoveHandler}
            key={currency.symbol}
          />
        ))}
      </ul>
    </>
  ) : (
    <p className={styles.currencyList_text}>
      Нет активов в вашем портфеле. Добавьте что-нибудь, чтобы начать!
    </p>
  );
};
