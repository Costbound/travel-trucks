import css from './Button.module.css'

export default function Button({ children, className, style = {}, onClick, type='submit' }) {
  return (
    <button className={`${css.button} ${className}`} style={style} onClick={onClick} type={type}>{ children }</button>
  )
}
