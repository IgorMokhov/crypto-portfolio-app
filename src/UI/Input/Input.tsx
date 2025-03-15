import { ChangeEvent } from 'react';
import styles from './Input.module.scss';

interface IInputProps {
  type?: 'text' | 'number';
  value: string | number;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type = 'text',
  value,
  placeholder,
  onChange,
}: IInputProps) => {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
