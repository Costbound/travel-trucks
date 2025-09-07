import css from './RatingAndLocation.module.css'

export default function RatingAndLocation({ rating, reviews, location: rawLocation, className }) {
  const location = rawLocation.split(', ').reverse().join(', ')

  return (
    <div className={`${css.rating_and_location_wrapper} ${className}`}>
      <div className={css.rating_wrapper}>
        <svg className={css.rating_icon} width="16" height="16">
          <use href="/sprite.svg#icon-star" />
        </svg>
        <span className={css.rating_value}>{rating} ({reviews?.length || 0} Reviews)</span>
      </div>
      <div className={css.location_wrapper}>
        <svg className={css.location_icon} width="16" height="16">
          <use href="/sprite.svg#icon-map" />
        </svg>
        <span className={css.location_value}>{location}</span>
      </div>
    </div>
    
  )
}
