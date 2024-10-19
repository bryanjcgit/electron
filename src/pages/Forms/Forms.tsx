
import '../styles/styles.css'
import { useRegisterForm } from '../../hooks/useRegisterForm'
import { FormEvent } from 'react'


export const Forms = () => {

    const {formData, onChange, resetForm, isValidEmail, name, email, password1, password2 } = useRegisterForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    })    

    const onSudmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1>Form Custom</h1>
            <hr />     
            <form
                noValidate
                onSubmit={ (ev) => onSudmit(ev) }              
            >
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={name}
                    onChange={ onChange }
                    className={`${ name.trim().length <= 0 && 'has-error'}`}
                    autoComplete="new-name"
                />
                { (name.trim().length <= 0 && <span>Campo requerido</span> ) }
                <input
                    type='email'
                    placeholder='Email'
                    name='email'
                    value={email}
                    onChange={ onChange }
                />
                { !isValidEmail(email) && <span>Email no es valido</span> }
                <input
                    type='password'
                    placeholder='Password 1'
                    name='password1'
                    value={password1}
                    onChange={ onChange }
                />
                <input
                    type='password'
                    placeholder='Password 2'
                    name='password2'
                    value={password2}
                    onChange={ onChange }
                />
                <button type='submit'>Crear</button>
                <button type='button' onClick={resetForm}>Reset</button>
            </form>
        </div>
    )
}
