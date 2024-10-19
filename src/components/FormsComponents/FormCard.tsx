import { createContext } from "react";
import { InitialValues, onChangeArgsForm, ProductContextFormProps, ProductForm } from "../../interfaces/forms";
import { useForm } from "../../hooks/useForm";
import styles from '../../pages/styles/styles.module.css'

export const FormContext = createContext({} as ProductContextFormProps)
const { Provider } = FormContext

export interface Props {
  productForm: ProductForm;
  // children?: React.ReactElement | React.ReactElement[];
  children: (msg: string) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgsForm) => void;
  value?: number;
  initialValues?: InitialValues
}

export const FormCard = ({ children, productForm, className, initialValues, onChange, style, value }: Props) => {

  const { counter, increaseBy, maxCount } = useForm({ productForm, onChange, value, initialValues })

  return (
    <Provider value={{
      counter,
      increaseBy,
      productForm,
      maxCount
    }}>

      <div
        className={`${styles.productCard} ${className}`}
        style={style}
      >
        {children('texto')}
      </div>

    </Provider>
  )
}
