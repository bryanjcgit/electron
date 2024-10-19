import { ProductCard as ProductCardHOC } from './ProductCard'
import { ProductCardHOCProps } from '../interfaces/interfaces'

import { ProductButtons } from './ProductButtons'
import { ProductImg } from './ProductImage'
import { ProductTitle } from './ProductTitle'

export { ProductButtons } from './ProductButtons'
export { ProductImg } from './ProductImage'
export { ProductTitle } from './ProductTitle'

export const ProductCard: ProductCardHOCProps = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImg,
    Buttons: ProductButtons
})

export default ProductCard
