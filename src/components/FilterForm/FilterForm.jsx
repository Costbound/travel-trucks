import { Form, Formik } from 'formik'
import css from './FilterForm.module.css'
import {  useId } from 'react'
import Filters from '../Filters/Filters.jsx'
import Button from '../Button/Button.jsx'
import TextInputField from '../TextInputField/TextInputField.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectEquipmentFilter, selectFormFilter, selectLocationFilter } from '../../redux/filters/selectors.js'
import {changeFilters, changeLocationFilter} from '../../redux/filters/slise.js'
import { clearCampers } from '../../redux/campers/slice.js'
import { getCampers } from '../../redux/campers/operations.js'

export default function FilterForm() {
  const dispatch = useDispatch()
  const locationId = useId()
  const locationFilter = useSelector(selectLocationFilter)
  const equipmentFilter = useSelector(selectEquipmentFilter)
  const formFilter = useSelector(selectFormFilter)

  const handleSubmit = (values) => {
  dispatch(changeFilters(values))
  dispatch(clearCampers())
  dispatch(getCampers())
  }


  return (
    <Formik initialValues={{ location: locationFilter, equipment: equipmentFilter, form: formFilter }} onSubmit={handleSubmit}>
      {({ setFieldValue }) => {
        const handleLocationChange = (e) => {
          const { value } = e.target
          setFieldValue('location', value)
          dispatch(changeLocationFilter(value))
        }
        return (
          <Form className={css.form}>
            <div className={css.location_container}>
            <label className={css.location_label} htmlFor={locationId}>Location</label>
            <div className={css.location_input_container}>
              <TextInputField className={css.location_input} name="location" placeholder="City" id={locationId} value={locationFilter} onChange={handleLocationChange} />
              <svg className={css.location_icon} width="20" height="20">
                <use href="/sprite.svg#icon-map" />
              </svg>
            </div>
        </div>
        <Filters />
        <Button type="submit">Search</Button>
      </Form>
        )
      }}
    </Formik>
  )
}
