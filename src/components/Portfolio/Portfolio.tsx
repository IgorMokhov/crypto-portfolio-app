import { useEffect } from 'react';
import { useGetAvailableCurrenciesQuery } from '../../redux/api/portfolio/portfolioApi';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal, selectModal } from '../../redux/slices/modal/modalSlice';
import { Modal } from '../../UI/Modal/Modal';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { setAvailableCurrencies } from '../../redux/slices/portfolio/portfolioSlice';
import { transformAvailableCurrencies } from '../../utils/currencyUtils';
import { useCurrencyStream } from '../../hooks/useCurrencyStream';
import { SelectedCurrencyList } from '../SelectedCurrencyList/SelectedCurrencyList';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const isOpen = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  const { data: availableCurrencies, isSuccess, isError, error } = useGetAvailableCurrenciesQuery();
  const currencies = useCurrencyStream();

  useEffect(() => {
    if (isSuccess) {
      dispatch(setAvailableCurrencies(transformAvailableCurrencies(availableCurrencies)));
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      console.log(error);
    }
  }, [isError]);

  return (
    <section className={styles.portfolio}>
      <SelectedCurrencyList currencies={currencies} />

      {isOpen && (
        <Modal onClose={() => dispatch(closeModal())}>
          <CurrencySelector />
        </Modal>
      )}
    </section>
  );
};
