import css from './CampersList.module.css'
import CampersListItem from '../CampersListItem/CampersListItem'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCampers } from '../../redux/campers/operations';
import { selectCampers, selectIsLoadingCampers, selectIsLoadingMoreCampers, selectTotalCampers } from '../../redux/campers/selectors'
import { incrementPage } from '../../redux/campers/slice';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';

export default function CampersList() {
  const dispatch = useDispatch()
  const campers = useSelector(selectCampers)
  const total = useSelector(selectTotalCampers)
  const isLoading = useSelector(selectIsLoadingCampers)
  const isLoadingMore = useSelector(selectIsLoadingMoreCampers)

  useEffect(() => {
    const fetchCampers = async () => {
      dispatch(getCampers());
    };
    fetchCampers();
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(incrementPage());
    dispatch(getCampers());
  };

  return (
    <div className={css.container}>
      {isLoading ? (<Loader isAbsolute={true} />) : (<><ul className={css.list}>
        {campers.length < 1 ? <p className={css.no_campers}>No campers found</p> : campers.map(camper => (
          <CampersListItem key={camper.id} camperData={camper} />
        ))}
      </ul>
      {total > campers.length && (
        isLoadingMore ? <Loader /> :
        <Button className={css.load_more_button} type="button" onClick={handleLoadMore}>Load More</Button>
      )}</>)}
    </div>
  );
}
      