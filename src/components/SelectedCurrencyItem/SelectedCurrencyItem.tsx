import { ICurrency } from '../../types/currencies';
import styles from './SelectedCurrencyItem.module.scss';

interface ISelectedCurrencyItemProps extends ICurrency {
  totalPortfolioValue: number;
  onRemove: (name: string) => void;
}

export const SelectedCurrencyItem = ({
  name,
  quantity = 0,
  price,
  priceChange,
  totalPortfolioValue,
  onRemove,
}: ISelectedCurrencyItemProps) => {
  const totalValue = price * quantity;
  const percentageOfPortfolio = ((totalValue / totalPortfolioValue) * 100).toFixed(2);

  return (
    <li className={styles.currencyItem} onClick={() => onRemove(name)}>
      <span>{name}</span>
      <span>{quantity}</span>
      <span>${price.toFixed(2)}</span>
      <span>${totalValue.toFixed(2)}</span>
      <span className={`${styles.currencyItem_change} ${priceChange < 0 ? styles.negative : ''}`}>
        {priceChange > 0 ? '+' : ''}
        {priceChange.toFixed(2)}%
      </span>
      <span>{percentageOfPortfolio}%</span>
    </li>
  );
};
