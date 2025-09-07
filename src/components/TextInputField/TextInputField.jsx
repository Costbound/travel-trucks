import css from './TextInputField.module.css'
import { Field } from 'formik'

export default function TextInputField({ className, name, placeholder, id, as = 'input', ...rest }) {
  return (
    <Field
      className={`${css.input} ${className}`}
      as={as}
      name={name}
      placeholder={placeholder}
      id={id}
      {...rest}
    />)
}