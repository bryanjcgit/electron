import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'
import { FormCheckbox, SelectInputForm, TextInputForm } from '../../components/FormsComponents'



export const FormikAbstraction = () => {

    return (
        <div>
            <h1>Formik Yup Components</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    terms: false,
                    jobtype: ''
                }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .max(5, 'Debe de tener 5 caracteres o menos')
                            .required('Requerido'),
                        email: Yup.string()
                            .email('Debe de ser un email valido')
                            .required('Requerido'),
                        terms: Yup.boolean()
                            .oneOf([true], 'Es necesario que aceptes las condiciones'),
                        jobtype: Yup.string()
                            .notOneOf(['Se'], 'No es permitida')
                            .required('Requerido')
                    })
                }>

                {() => (
                    <Form noValidate>
                        <TextInputForm label="First Name" name="name" />

                        <TextInputForm label="Email" name="email" />
                                          
                        <SelectInputForm label='Job Type' name='jobtype'>
                            <option value={''}>-</option>
                            <option value={'Ca'}>Ca</option>
                            <option value={'Ye'}>Ye</option>
                            <option value={'Se'}>Se</option>
                        </SelectInputForm>                      

                        <FormCheckbox label={'Term'} name={'terms'}  />                       

                        <button type='submit'>Crear</button>
                    </Form>
                )
                }

            </Formik>


        </div>
    )
}
