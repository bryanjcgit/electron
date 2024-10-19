import { FormCard as FormCardHOC } from './FormCard'
import { ProductFormHOCProps } from '../../interfaces/forms'

import { FormButtons } from './FormButtons'
import { FormImage } from './FormImage'
import { FormTitle } from './FormTitle'


export { TextInputForm } from './TextInputForm'
export { FormCheckbox } from './FormCheckbox'
export { SelectInputForm } from './SelectInputForm'
export { FormButtons } from './FormButtons'
export { FormImage } from './FormImage'
export { FormTitle } from './FormTitle'


export const FormCard: ProductFormHOCProps = Object.assign( FormCardHOC, {
    Title: FormTitle,
    Image: FormImage,
    Buttons: FormButtons
})

export default FormCard
