import { useField } from "formik";

interface Props {
    label: string;
    name: string;
    [x: string]: any
}


export const FormCheckbox = ({ label, ...props }: Props) => {
    const [field, meta] = useField({ ...props, type: 'checkbox' })
    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...props} {...field} />
                {label}
            </label>
            {
                meta.touched && meta.error && (
                    <span className="error" > {meta.error} </span>
                )
            }
        </>
    )
}
