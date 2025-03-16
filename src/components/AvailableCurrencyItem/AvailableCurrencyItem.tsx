import { ICurrency } from '../../types/currencies';
import styles from './AvailableCurrencyItem.module.scss';

interface IAvailableCurrencyItemProps {
  symbol: string;
  name: string;
  price: number;
  priceChange: number;
  onSave: (currency: ICurrency) => void;
}

export const AvailableCurrencyItem = ({
  symbol,
  name,
  price,
  priceChange,
  onSave,
}: IAvailableCurrencyItemProps) => {
  const onClickHandler = () => {
    onSave({
      symbol,
      name,
      price,
      priceChange,
    });
  };

  return (
    <li className={styles.currency} onClick={onClickHandler}>
      <span className={styles.currency_name}>{name}</span>
      <span className={styles.currency_price}>${price}</span>
      <span className={`${styles.currency_change} ${priceChange < 0 ? styles.negative : ''}`}>
        {priceChange > 0 ? '+' : ''}
        {priceChange}%
      </span>
    </li>
  );
};
