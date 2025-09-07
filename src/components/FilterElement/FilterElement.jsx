import { Field, useField } from 'formik'
import css from './FilterElement.module.css'
import { useId } from 'react'

export default function FilterElement({ name, value, type, icon, label}) {
  const [field, _, helpers] = useField({ name, type, value })
  const inputId = useId()


  const handleClick = (e) => {
    if (type === 'radio' && field.checked) {
      e.preventDefault()
      helpers.setValue()
    }
  }

  return (
    <>
      <Field
        type={type}
        {...field}
        value={value}
        className={`${css.input} visually-hidden`}
        id={inputId}
      />
      <label 
        className={css.container} 
        htmlFor={inputId}
        onClick={handleClick}
      >
        <svg className={css.icon} width="32" height="32">
          <use href={`/sprite.svg#${icon}`} />
        </svg>
        <p className={css.label}>{label}</p>
      </label>
    </>
  )
}