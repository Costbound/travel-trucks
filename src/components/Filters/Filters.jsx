import FilterElement from '../FilterElement/FilterElement'
import css from './Filters.module.css'

export default function Filters() {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Filters</h2>
      <h3 className={css.subtitle}>Vehicle equipment</h3>
      <div className={css.spacer}></div>
      <div className={css.filters_container}>
        <FilterElement name="equipment" value="AC" type="checkbox" icon="icon-wind" label="AC" />
        <FilterElement name="equipment" value="automatic" type="checkbox" icon="icon-diagram" label="Automatic" />
        <FilterElement name="equipment" value="kitchen" type="checkbox" icon="icon-cup-hot" label="Kitchen" />
        <FilterElement name="equipment" value="TV" type="checkbox" icon="icon-tv" label="TV" />
        <FilterElement name="equipment" value="bathroom" type="checkbox" icon="icon-shower" label="Bathroom" />
      </div>
      <h3 className={css.subtitle}>Vehicle type</h3>
      <div className={css.spacer}></div>
      <div className={css.filters_container}>
        <FilterElement name="form" value="van" type="radio" icon="icon-grid-1x2" label="Van" />
        <FilterElement name="form" value="fully-integrated" type="radio" icon="icon-grid-2x2" label="Fully Integrated" />
        <FilterElement name="form" value="alcove" type="radio" icon="icon-grid-3x3" label="Alcove" />
      </div>
    </div>
  )
}
