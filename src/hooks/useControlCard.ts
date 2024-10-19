import { useState } from 'react';
import { ProductInCart, Product } from '../interfaces/interfaces';

export const useControlcard = () => {
  
    const [controlCard, setControlCard] = useState<{ [key: string]: ProductInCart }>({})

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        // console.log( count, product);

        setControlCard(oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;


            // if( count === 0 ) {
            // const {  [product.id]: toDelete, ...rest  } = oldShoppingCart;
            // return rest;
            // }

            // return {
            //     ...oldShoppingCart,
            //     [ product.id ]: { ...product, count }
            // }
        })

    }
    return {      
        onProductCountChange,
        controlCard
    }
}