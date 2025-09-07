import { useOutletContext } from 'react-router-dom'
import Review from '../Review/Review'
import css from './Reviews.module.css'

export default function Reviews() {
  const { camperData } = useOutletContext()

  return (
    <div className={css.container}>
      {camperData.reviews.map((review, index) => (
        <Review key={index} review={review} />
      ))}
    </div>
  )
}
