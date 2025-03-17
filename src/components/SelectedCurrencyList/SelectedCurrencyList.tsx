import { ICurrency } from '../../types/currencies';
import { CurrencyHeader } from '../CurrencyHeader/CurrencyHeader';
import { SelectedCurrencyItem } from '../SelectedCurrencyItem/SelectedCurrencyItem';
import styles from './SelectedCurrencyList.module.scss';

interface ISelectedCurrencyListProps {
  currencies: ICurrency[];
}

export const SelectedCurrencyList = ({ currencies }: ISelectedCurrencyListProps) => {
  return currencies.length > 0 ? (
    <>
      <CurrencyHeader />
      <ul className={styles.currencyList}>
        {currencies.map((currency) => (
          <SelectedCurrencyItem {...currency} key={currency.symbol} />
        ))}
      </ul>
    </>
  ) : (
    <p className={styles.currencyList_text}>
      Нет активов в вашем портфеле. Добавьте что-нибудь, чтобы начать!
    </p>
  );
};
