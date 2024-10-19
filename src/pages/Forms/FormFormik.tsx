
import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
    name: string;
    email: string
}

export const FormFormik = () => {

    const validate = ({name, email}: FormValues) => {

        const errors: FormikErrors<FormValues> = {}

        if (!name) {
            errors.name = 'Requerid'
        } else if ( name.length >= 5 ) {
            errors.name = 'Debe de ser de 5 caracteres o menos'
        }

        if (!email) {
            errors.email = 'Requerid'
        }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = 'Formato incorrecto para el Email';
          }

        return errors;
    };



    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            name: '',
            email: ''
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    })

    return (
        <div>
            <h1>Register Form</h1>

            <form
                noValidate
                autoComplete='off'
                onSubmit={handleSubmit}
            >
                <label htmlFor="firstName"> First Name</label>
                <input
                    type='text'
                    name='name'
                    autoComplete="new"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                />
                { touched.name && errors.name && <span>{ errors.name }</span> }

                <label htmlFor="email"> Email</label>
                <input
                    type='email'
                    name='email'
                    autoComplete="new"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                />
                { touched.email && errors.email && <span>{ errors.email }</span> }               

                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
