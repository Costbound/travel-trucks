import css from './HomePage.module.css'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {
  const navigate = useNavigate()

  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.description}>You can find everything you want in our catalog</p>
        <Button type="button" className={css.button} onClick={() => navigate('/catalog')}>View Now</Button>
      </div>
    </div>
  )
}
