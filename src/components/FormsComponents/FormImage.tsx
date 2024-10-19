import { useContext } from "react";
import { FormContext } from "./FormCard";
import styles from '../../pages/styles/styles.module.css'
import noImg from '../../pages/assets/no-image.jpg'

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties
}

export const FormImage = ({ img, className, style }: Props) => {
  const { productForm } = useContext( FormContext )

  let imgShow: string;

  if ( img ) {
      imgShow = img
  } else if ( productForm.img ) {
      imgShow = productForm.img
  } else {
      imgShow = noImg
  }
  return (
    <img className={`${styles.productForm} ${className}`} src={imgShow} style={ style } alt="Coffe" />
  )
}
