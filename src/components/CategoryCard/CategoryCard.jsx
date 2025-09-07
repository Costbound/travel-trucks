import clsx from 'clsx'
import css from './CategoryCard.module.css'

const generateContentData = (type) => {
  switch (type) {
    case 'automatic':
      return {
        label: 'Automatic',
        icon: 'icon-diagram',
        iconType: 'fill'
      }
    case 'petrol':
      return {
        label: 'Petrol',
        icon: 'icon-fuel-pump',
        iconType: 'fill'
      }
    case 'AC':
      return {
        label: 'AC',
        icon: 'icon-wind',
        iconType: 'fill'
      }
    case 'bathroom':
      return {
        label: 'Bathroom',
        icon: 'icon-shower',
        iconType: 'fill'
      }
    case 'gas':
      return {
        label: 'Gas',
        icon: 'icon-gas-stove',
        iconType: 'stroke'
      }
    case 'kitchen':
      return {
        label: 'Kitchen',
        icon: 'icon-cup-hot',
        iconType: 'fill'
      }
    case 'microwave':
      return {
        label: 'Microwave',
        icon: 'icon-microwave',
        iconType: 'stroke'
      }
    case 'radio':
      return {
        label: 'Radio',
        icon: 'icon-ui-radios',
        iconType: 'fill'
      }
    case 'refrigerator':
      return {
        label: 'Refrigerator',
        icon: 'icon-fridge',
        iconType: 'fill'
      }
    case 'water':
      return {
        label: 'Water',
        icon: 'icon-water-drop',
        iconType: 'stroke'
      }
  }
  
}

export default function CategoryCard({ type }) {
  const { label, icon, iconType } = generateContentData(type)

  const iconClass = clsx(css.icon, {
    [css.fill_icon]: iconType === 'fill',
    [css.stroke_icon]: iconType === 'stroke',
  })

  return (
    <div className={css.card}>
      <svg className={iconClass} width='20' height='20'>
        <use href={`/sprite.svg#${icon}`}></use>
      </svg>
      <p className={css.label}>{label}</p>
    </div>
  )
}
