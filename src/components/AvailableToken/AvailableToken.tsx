import styles from './AvailableToken.module.scss';

interface IAvailableTokenProps {
  name: string;
  price: number;
  change: number;
}

export const AvailableToken = ({
  name,
  price,
  change,
}: IAvailableTokenProps) => {
  return (
    <li className={styles.token}>
      <span className={styles.token_name}>{name}</span>
      <span>${price}</span>
      <span
        className={`${styles.token_change} ${
          change < 0 ? styles.negative : ''
        }`}
      >
        {change > 0 ? '+' : ''}
        {change}%
      </span>
    </li>
  );
};
