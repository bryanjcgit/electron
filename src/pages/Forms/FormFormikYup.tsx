
import { useFormik } from 'formik'
import * as Yup from 'yup'
import '../styles/styles.css'

export const FormFormikYup = () => {

    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            name: Yup.string()
                     .max(5, 'Debe de tener 5 caracteres o menos')
                     .required('Requerido'),
            email: Yup.string()
                      .email('Debe de ser un email valido')
                      .required('Requerido')
        })   
    })

    return (
        <div>
            <h1>Form an Yup</h1>

            <form
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <label htmlFor="firstName"> First Name</label>
                <input
                    type='text'
                    autoComplete="new"
                    {...getFieldProps('name')}
                />
                { touched.name && errors.name && <span>{ errors.name }</span> }

                <label htmlFor="email"> Email</label>
                <input
                    type='email'
                    autoComplete="new"
                    {...getFieldProps('email')}                    
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }               

                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
