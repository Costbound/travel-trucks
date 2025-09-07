import css from './EmblaGalleryItem.module.css'

export default function EmblaGalleryItem({ imageUrl, onClick, alt='Camper image'}) {
  return (
    <div className={css.container}>
      <img className={css.image} src={imageUrl} alt={alt} onClick={onClick} width={292} height={312} />
    </div>
  )
}
