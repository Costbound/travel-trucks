import { useMemo, useState } from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import css from './CategoriesList.module.css'



export default function CategoriesList({ camperData, limit  = 0, style = {} }) {
  const [showEllipsis, setShowEllipsis] = useState(false)
  const generateCategoriesArray = (data) => {
  const categories = []
  if (data?.transmission === 'automatic') {
    categories.push('automatic')
  }
  if (data?.engine === 'petrol') {
    categories.push('petrol')
  }
  const boolFields = ['AC', 'kitchen', 'radio', 'bathroom', 'refrigerator', 'microwave', 'gas', 'water']
  boolFields.forEach((categoryField) => {
    if (data[categoryField]) {
      categories.push(categoryField)
    }
  })
  if (limit !== 0 && categories.length > limit) {
    categories.length = limit
    setShowEllipsis(true)
  }
  return categories
}
  const categories = useMemo(() => generateCategoriesArray(camperData), [camperData])

  return (
    <ul className={css.list} style={style}>
      {categories.map((category, index) => (
        <CategoryCard key={index} className={css.item} type={category} />
      ))}
      {showEllipsis && (
        <li className={css.ellipsis_item}>
          <span className={css.ellipsis}>...</span>
        </li>
      )}
    </ul>
  )
}