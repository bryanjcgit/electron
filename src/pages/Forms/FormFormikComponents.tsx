import { Field, Form, ErrorMessage, Formik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormFormikComponents = () => {

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
                    <Form>
                        <label htmlFor="firstName"> First Name</label>
                        <Field type='text' autoComplete="new" name='name' />
                        <ErrorMessage name='name' component={'span'} />

                        <label htmlFor="email"> Email</label>
                        <Field type='text' autoComplete="new" name='email' />
                        <ErrorMessage name='email' component={'span'} />

                        <label htmlFor="firstName"> First Name</label>
                        <Field type='text' autoComplete="new" name='name' />
                        <ErrorMessage name='name' component={'span'} />

                        <label htmlFor="firstName"> First Name</label>
                        <Field type='text' autoComplete="new" name='name' />
                        <ErrorMessage name='name' component={'span'} />

                        <button type='submit'>Crear</button>
                    </Form>
                )
                }

            </Formik>


        </div>
    )
}
