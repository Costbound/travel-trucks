import css from './Header.module.css'
import Logo from '../../assets/logo.svg?react'
import Navigation from '../Navigation/Navigation'



export default function Header() {
  return (
    <header className={css.header}>
      <Logo className={css.logo} />
      <Navigation />
    </header>
  )
}
