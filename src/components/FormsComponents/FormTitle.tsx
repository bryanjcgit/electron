import { useContext } from 'react';
import styles from '../../pages/styles/styles.module.css'
import { FormContext } from './FormCard';

export interface Props {
  title?: string;
  className?: string
}

export const FormTitle = ({ title, className }: Props) => {
  const { productForm } = useContext(FormContext)
  return (
    <span className={`${styles.productDescription} ${className}`}>
      {title ? title : productForm.title}
    </span>
  )
}
