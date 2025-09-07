import css from './FeaturesAndReviewsNavigation.module.css'
import { NavLink } from 'react-router-dom'

export default function FeaturesAndReviewsNavigation() {
  return (
    <nav className={css.navigation}>
      <NavLink
        to="features"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Features
      </NavLink>
      <NavLink
        to="reviews"
        className={({ isActive }) =>
          isActive ? `${css.link} ${css.active}` : css.link
        }
      >
        Reviews
      </NavLink>
    </nav>
  )
}