import styles from './AvailableCurrencyItem.module.scss';

interface IAvailableCurrencyItemProps {
  name: string;
  price: number;
  change: number;
}

export const AvailableCurrencyItem = ({
  name,
  price,
  change,
}: IAvailableCurrencyItemProps) => {
  return (
    <li className={styles.currency}>
      <span className={styles.currency_name}>{name}</span>
      <span>${price}</span>
      <span
        className={`${styles.currency_change} ${
          change < 0 ? styles.negative : ''
        }`}
      >
        {change > 0 ? '+' : ''}
        {change}%
      </span>
    </li>
  );
};
