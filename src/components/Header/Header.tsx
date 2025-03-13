import { useAppDispatch } from '../../redux/hooks';
import { openModal } from '../../redux/slices/modal/modalSlice';
import { Button } from '../../UI/Button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>CRYPTO PORTFOLIO</h1>
      <Button onClick={() => dispatch(openModal())}>добавить</Button>
    </header>
  );
};
