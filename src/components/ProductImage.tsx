import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../pages/styles/styles.module.css'
import noImg from '../pages/assets/no-image.jpg'

export interface Props {
    img?: string;
    className?: string;
    style?: React.CSSProperties
}

export const ProductImg = ({ img, className, style }: Props) => {

    const { product } = useContext( ProductContext )
    let imgShow: string;

    if ( img ) {
        imgShow = img
    } else if ( product.img ) {
        imgShow = product.img
    } else {
        imgShow = noImg
    }

    return (
        <img className={`${styles.productImg} ${className}`} src={imgShow} style={ style } alt="Coffe" />
    )
}