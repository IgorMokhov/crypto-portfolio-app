import { ICurrency } from '../../types/currencies';
import styles from './SelectedCurrencyItem.module.scss';

interface ISelectedCurrencyItemProps extends ICurrency {
  onRemove: (name: string) => void;
}

export const SelectedCurrencyItem = ({
  name,
  quantity,
  price,
  priceChange,
  onRemove,
}: ISelectedCurrencyItemProps) => {
  return (
    <li className={styles.currencyItem} onClick={() => onRemove(name)}>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>${price}</span>
      <span>${price * (quantity || 1)}</span>
      <span className={`${styles.currencyItem_change} ${priceChange < 0 ? styles.negative : ''}`}>
        {priceChange > 0 ? '+' : ''}
        {priceChange}%
      </span>
      <span>100%</span>
    </li>
  );
};
