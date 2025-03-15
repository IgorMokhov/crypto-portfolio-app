import { useState } from 'react';
import { Input } from '../../UI/Input/Input';
import { Button } from '../../UI/Button/Button';
import { AvailableCurrencyList } from '../AvailableCurrencyList/AvailableCurrencyList';
import { useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';
import styles from './CurrencySelector.module.scss';

export const CurrencySelector = () => {
  const [search, setSearch] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');

  const dispatch = useAppDispatch();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) setQuantity(value);
  };

  return (
    <div className={styles.currencySelector}>
      <Input
        value={search}
        onChange={handleSearchChange}
        type="text"
        placeholder="Поиск валюты"
      />

      <AvailableCurrencyList />

      {true && (
        <>
          <Input
            value={quantity}
            onChange={handleQuantityChange}
            type="text"
            placeholder="Количество"
          />
          <div className={styles.currencySelector_actions}>
            <Button>добавить</Button>
            <Button onClick={() => dispatch(closeModal())}>отмена</Button>
          </div>
        </>
      )}
    </div>
  );
};
