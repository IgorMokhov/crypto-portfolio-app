import { useState } from 'react';
import { Input } from '../../UI/Input/Input';
import styles from './TokenSelector.module.scss';
import { Button } from '../../UI/Button/Button';
import { AvailableTokenList } from '../AvailableTokenList/AvailableTokenList';
import { useAppDispatch } from '../../redux/hooks';
import { closeModal } from '../../redux/slices/modal/modalSlice';

interface ITokenSelectorProps {}

export const TokenSelector = ({}: ITokenSelectorProps) => {
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
    <div className={styles.tokenSelector}>
      <Input
        value={search}
        onChange={handleSearchChange}
        type="text"
        placeholder="Поиск валюты"
      />

      <AvailableTokenList />

      {true && (
        <>
          <Input
            value={quantity}
            onChange={handleQuantityChange}
            type="text"
            placeholder="Количество"
          />
          <div className={styles.tokenSelector_actions}>
            <Button>добавить</Button>
            <Button onClick={() => dispatch(closeModal())}>отмена</Button>
          </div>
        </>
      )}
    </div>
  );
};
