import css from './Review.module.css'

export default function Review({ review }) {
  const stars = Array.from({ length: 5 }, (_, i) => (
    <svg
      key={i}
      width={16}
      height={16}
      className={i < review.reviewer_rating ? css.start_active : css.star_diactive}
    >
      <use href='/sprite.svg#icon-star' />
    </svg>
  ))
  return (
    <div className={css.container}>
      <div className={css.author_container}>
        <div className={css.avatar}>{review.reviewer_name[0].toUpperCase()}</div>
        <div className={css.name_and_rating_container}>
          <p className={css.author_name}>{review.reviewer_name}</p>
          <div className={css.rating_container}>
            {stars}
          </div>
        </div>
      </div>
      <p className={css.review_text}>{review.comment}</p>
    </div>
  )
}
