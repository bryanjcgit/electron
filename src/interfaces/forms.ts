import { Props as FormCardProps } from '../components/FormsComponents/FormCard';
import { Props as FormButtonProps } from '../components/FormsComponents/FormButtons';
import { Props as FormTitleProps } from '../components/FormsComponents/FormTitle';
import { Props as FormImageProps } from '../components/FormsComponents/FormImage';

export interface ProductForm {
    id: string;
    title: string;
    img?: string
}

export interface ProductContextFormProps {
    counter: number;
    maxCount?: number
    increaseBy: (value: number) => void;
    productForm: ProductForm;
}

export interface ProductFormHOCProps {
    ({ children, productForm }: FormCardProps ):JSX.Element,
    Buttons: ( Props: FormButtonProps) => JSX.Element,
    Image:   ( Props: FormImageProps ) => JSX.Element,
    Title:   ( Props: FormTitleProps ) => JSX.Element,
}

export interface onChangeArgsForm {
    productForm: ProductForm;
    count: number;
}

export interface ProductInCardForm extends ProductForm {
    count: number
}

export interface InitialValues {
    count?: number
    maxCount?: number
}