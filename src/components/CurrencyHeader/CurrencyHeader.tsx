import styles from './CurrencyHeader.module.scss';

const titles: string[] = [
  'Актив',
  'Количество',
  'Цена',
  'Общая стоимость',
  'Изм. за 24 ч.',
  '% портфеля',
];

export const CurrencyHeader = () => {
  return (
    <ul className={styles.currencyHeader}>
      {titles.map((title) => (
        <span>{title}</span>
      ))}
    </ul>
  );
};
