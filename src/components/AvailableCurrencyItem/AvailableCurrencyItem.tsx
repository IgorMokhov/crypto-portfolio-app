import styles from './AvailableCurrencyItem.module.scss';

interface IAvailableCurrencyItemProps {
  name: string;
  price: number;
  priceChange: number;
}

export const AvailableCurrencyItem = ({
  name,
  price,
  priceChange,
}: IAvailableCurrencyItemProps) => {
  return (
    <li className={styles.currency}>
      <span className={styles.currency_name}>{name}</span>
      <span>${price}</span>
      <span
        className={`${styles.currency_change} ${
          priceChange < 0 ? styles.negative : ''
        }`}
      >
        {priceChange > 0 ? '+' : ''}
        {priceChange}%
      </span>
    </li>
  );
};
