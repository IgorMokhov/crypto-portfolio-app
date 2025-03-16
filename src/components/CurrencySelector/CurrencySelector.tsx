import { useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { AvailableCurrencyList } from '../AvailableCurrencyList/AvailableCurrencyList';
import { useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';
import { ICurrency } from '../../types/currencies';
import { addSelectedCurrency } from '../../redux/slices/portfolio/portfolioSlice';
import styles from './CurrencySelector.module.scss';

export const CurrencySelector = () => {
  const [search, setSearch] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [activeCurrency, setActiveCurrency] = useState<ICurrency | null>(null);

  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setQuantity(value);
  };

  const handleAddCurrency = () => {
    if (activeCurrency && quantity) {
      dispatch(
        addSelectedCurrency({
          ...activeCurrency,
          quantity: +quantity,
        })
      );

      dispatch(closeModal());
      setQuantity('');
      setActiveCurrency(null);
    }
  };

  return (
    <div className={styles.currencySelector}>
      <Input value={search} onChange={handleSearchChange} type="text" placeholder="Поиск валюты" />

      <AvailableCurrencyList onSave={setActiveCurrency} />

      {activeCurrency && (
        <>
          <p className={styles.currencySelector_selected}>
            {activeCurrency?.name} ${activeCurrency?.price}
          </p>
          <Input
            value={quantity}
            onChange={handleQuantityChange}
            type="text"
            placeholder="Количество"
          />
          <div className={styles.currencySelector_actions}>
            <Button onClick={handleAddCurrency}>добавить</Button>
            <Button onClick={() => dispatch(closeModal())}>отмена</Button>
          </div>
        </>
      )}
    </div>
  );
};
