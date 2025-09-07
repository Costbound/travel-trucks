import css from './Features.module.css'
import { useOutletContext } from 'react-router-dom'
import CategoriesList from '../CategoriesList/CategoriesList.jsx'

export default function Features() {
  const { camperData } = useOutletContext()
  
  return (
    <div className={css.container}>
      <CategoriesList camperData={camperData} style={{ height: '104px', marginBottom: '100px'}} />
      <h2 className={css.title}>Vehicle details</h2>
      <div className={css.delimiter}></div>
      <ul className={css.datasheet_list}>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Form</h3>
          <p className={css.datasheet_value}>{camperData.form}</p>
        </li>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Length</h3>
          <p className={css.datasheet_value}>{camperData.length}</p>
        </li>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Width</h3>
          <p className={css.datasheet_value}>{camperData.width}</p>
        </li>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Height</h3>
          <p className={css.datasheet_value}>{camperData.height}</p>
        </li>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Tank</h3>
          <p className={css.datasheet_value}>{camperData.tank}</p>
        </li>
        <li className={css.datasheet_item}>
          <h3 className={css.datasheet_title}>Consumption</h3>
          <p className={css.datasheet_value}>{camperData.consumption}</p>
        </li>
      </ul>
    </div>
  )
}
