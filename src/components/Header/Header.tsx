import { Button } from '../../UI/Button/Button';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Crypto Portfolio</h1>
      <Button>добавить</Button>
    </header>
  );
};
