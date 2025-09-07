import css from './CatalogPage.module.css'
import FilterForm from '../../components/FilterForm/FilterForm'
import CampersList from '../../components/CampersList/CampersList';

export default function CatalogPage() {

  return (
    <div className={css.container}>
      <FilterForm/>
      <CampersList />
    </div>
  )
}
