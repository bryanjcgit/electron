import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgsForm, ProductForm } from "../interfaces/forms";

interface useFormArgs {
    productForm: ProductForm;
    onChange?: ( args: onChangeArgsForm ) => void;
    value?: number;
    initialValues?: InitialValues
}

export const useForm = ({ productForm, onChange, value = 0, initialValues }: useFormArgs) => {

    const [ counter, setCounter ] = useState<number>( initialValues?.count || value );
    const isMonted = useRef(false)  

    const increaseBy = ( value: number ) => {
        
        let newValue = Math.max( counter + value, 0 )
        if(initialValues?.maxCount){
            newValue = Math.min(newValue, initialValues.maxCount)
        }
        setCounter( newValue );
        onChange && onChange({ count: newValue, productForm });
    }

    useEffect(() => {
        if(!isMonted.current) return;
        setCounter( value );
    }, [ value ])


    return {
        counter,
        increaseBy,
        maxCount: initialValues?.maxCount
    }

}