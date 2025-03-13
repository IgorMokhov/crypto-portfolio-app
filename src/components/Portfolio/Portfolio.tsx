import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { closeModal, selectModal } from '../../redux/slices/modal/modalSlice';
import { Modal } from '../../UI/Modal/Modal';
import styles from './Portfolio.module.scss';

export const Portfolio = () => {
  const isOpen = useAppSelector(selectModal);
  const dispatch = useAppDispatch();

  return (
    <main className={styles.portfolio}>
      {isOpen && <Modal onClose={() => dispatch(closeModal())} />}
    </main>
  );
};
