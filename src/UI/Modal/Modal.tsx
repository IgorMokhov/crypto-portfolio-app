import styles from './Modal.module.scss';

interface IModalProps {
  onClose: () => void;
}

export const Modal = ({ onClose }: IModalProps) => {
  const handleBackDropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div className={styles.backdrop} onClick={handleBackDropClick}>
      <div className={styles.modal}>
        <input
          className={styles.modal_input}
          type="text"
          placeholder="Поиск валюты"
        />
      </div>
    </div>
  );
};
