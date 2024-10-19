import { useState } from "react"
import { ProductInCardForm, ProductForm } from '../interfaces/forms';

export const useFormCard = () => {

    const [formControl, setFormControl] = useState<{ [key: string]: ProductInCardForm }>({})

    const onFormCountChange = ({ count, productForm }: { count: number, productForm: ProductForm }) => {
        setFormControl( oldCardForm => {
            const productInFormCard: ProductInCardForm = oldCardForm[productForm.id] || { ...productForm, count: 0};

            if(Math.max(productInFormCard.count + count, 0) > 0) {
                productInFormCard.count += count;
                return {
                    ...oldCardForm,
                    [productForm.id]: productInFormCard
                }
            }

            const { [productForm.id]: toDelete, ...rest } = oldCardForm;
            return rest
        })
    }

    return {
        onFormCountChange,
        formControl
    }

}