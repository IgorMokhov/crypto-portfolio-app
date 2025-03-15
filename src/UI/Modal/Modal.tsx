import { ReactNode } from 'react';
import styles from './Modal.module.scss';

interface IModalProps {
  children: ReactNode;
  onClose: () => void;
}

export const Modal = ({ children, onClose }: IModalProps) => {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div className={styles.backdrop} onClick={handleBackDropClick}>
      <div className={styles.modal}>{children}</div>
    </div>
  );
};
