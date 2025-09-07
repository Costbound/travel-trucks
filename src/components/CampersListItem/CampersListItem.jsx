import { useDispatch, useSelector } from 'react-redux'
import css from './CampersListItem.module.css'
import {selectFavorites} from '../../redux/favorites/selectors'
import clsx from 'clsx'
import { addFavorite, removeFavorite } from '../../redux/favorites/slice'
import CategoriesList from '../CategoriesList/CategoriesList'
import { truncateText } from '../../utils/truncate-text'
import Button from '../Button/Button'
import { useNavigate } from 'react-router-dom'
import RatingAndLocation from '../RatingAndLocation/RatingAndLocation'

export default function CampersListItem({ camperData }) {
  const { id, gallery: [{ thumb: imageUrl }], alt = 'Camper photo', name, price, rating, reviews, location, description } = camperData
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const favorites = useSelector(selectFavorites)
  
  const handleFavoriteClick = () => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id))  
    } else {
      dispatch(addFavorite(id))
    }
  }

  const handleShowMoreClick = () => {
    navigate(`/catalog/${id}`)
  }

  return (
    <li className={css.item}>
      <img className={css.image} src={imageUrl} alt={alt} />
      <div className={css.details}>
        <div className={css.title_wrapper}>
          <h3 className={css.name}>{truncateText(name, 30)}</h3>
          <p className={css.price}>€{price.toFixed(2)}</p>
          <button className={css.favorite_button} onClick={handleFavoriteClick}>
            <svg className={clsx(css.favorite_icon, favorites.includes(id) && css.favorite_icon__active)} width="24" height="24">
              <use href="/sprite.svg#icon-heart" />
            </svg>
          </button>
        </div>
        <RatingAndLocation className={css.rating_and_location} rating={rating} reviews={reviews} location={location} />
        <p className={css.description} >{truncateText(description, 62)}</p>
        <CategoriesList limit={7} camperData={camperData} style={{ maxHeight: '104px', overflow: 'hidden', marginBottom: '24px' }} />
        <Button type="button" onClick={handleShowMoreClick}>Show More</Button>
      </div>
    </li>
  )
}
