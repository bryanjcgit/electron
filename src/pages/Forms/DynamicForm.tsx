import { Form, Formik } from 'formik'
import formJson from '../data/custom-form.json'
import { SelectInputForm, TextInputForm } from '../../components/FormsComponents'
import '../styles/styles.css'
import * as Yup from 'yup';

const initialValues: { [key: string]: any } = {};
const fieldRequerids: { [key: string]: any } = {};

for (const input of formJson) {
    initialValues[input.name] = input.value;

    if ( !input.validations ) continue;

    let schema = Yup.string()

    for (const validation of input.validations) {
        if( validation.type === 'requerid' ){
            schema = schema.required('Este campo es requerido')
        }
        if( validation.type === 'minLength'){
            schema = schema.min((validation as any).value || 4, `Minimo de ${ ( validation as any).value || 4 } caracteres`)
        }
        if( validation.type === 'email'){
            schema = schema.email(`Revisa el formato del Email`)
        }
    }

    fieldRequerids[input.name] = schema
}

const validationSchema = Yup.object({...fieldRequerids})


export const DynamicForm = () => {
    return (
        <div>
            <h1>Dynamic Form Page</h1>

            <Formik
                initialValues={initialValues}
                validationSchema = {validationSchema}
                onSubmit={(values) => {
                    console.log(values)
                }}
            >

                {
                    () => (

                        <Form>
                            {formJson.map(({ type, name, placeholder, label, options }) => {
                                if (type === 'input' || type === 'password' || type === 'email') {
                                    return <TextInputForm
                                        key={name}
                                        type={(type as any)}
                                        label={label}
                                        name={name}
                                        placeholder={placeholder}
                                    />
                                } else if (type === 'select') {
                                    return (
                                        <SelectInputForm
                                            key={name}
                                            type={(type as any)}
                                            label={label}
                                            name={name}
                                        >
                                            <option value={''}> Select an options</option>
                                            {
                                                options?.map(opt => (
                                                    <option key={opt.id} value={opt.id}> {opt.label} </option>
                                                ))
                                            }
                                        </SelectInputForm>
                                    )
                                }

                            })}
                            <button type='submit'>Crear</button>
                        </Form>
                    )
                }

            </Formik>


        </div>
    )
}
