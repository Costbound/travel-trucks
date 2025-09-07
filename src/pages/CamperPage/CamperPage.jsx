import { useEffect, useState } from 'react'
import css from './CamperPage.module.css'
import { Outlet, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import RatingAndLocation from '../../components/RatingAndLocation/RatingAndLocation.jsx'
import Loader from '../../components/Loader/Loader.jsx'
import { EmblaGallery } from '../../components/EmblaGallery/EmblaGallery.jsx'
import FeaturesAndReviewsNavigation from '../../components/FeaturesAndReviewsNavigation/FeaturesAndReviewsNavigation.jsx'
import BookingForm from '../../components/BookingForm/BookingForm.jsx'

export default function CamperPage() {
  const [camperData, setCamperData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const { camperId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchCamperData() {
      try {
        setIsLoading(true)
        const { data } = await axios.get(`/campers/${camperId}`)
        setCamperData(data)
        navigate('features')
      } catch (error) {
        console.error('Error fetching camper data:', error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCamperData()
  }, [])

  return (
  <>
    {isLoading ? (
      <Loader isAbsolute={true} />
      ) : (
      <div className={css.page}>
        <div className={css.container}>
          <h2 className={css.title}>{camperData.name}</h2>
          <RatingAndLocation
            className={css.rating_and_location}
            rating={camperData.rating}
            reviews={camperData.reviews}
            location={camperData.location}
          />
              <p className={css.price}>€{camperData.price.toFixed(2)}</p>
          <EmblaGallery className={css.gallery} images={camperData.gallery} />
          <p className={css.description}>{camperData.description}</p>
        </div>
        <FeaturesAndReviewsNavigation />
        <div className={css.extra_container}>
          <Outlet context={{ camperData }} />
          <BookingForm />
        </div>
      </div>
      )}
  </>
)
}
