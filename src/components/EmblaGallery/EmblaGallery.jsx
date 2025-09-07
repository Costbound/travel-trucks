import { useState } from 'react'
import ImageModal from '../ImageModal/ImageModal'
import css from './EmblaGallery.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import EmblaGalleryItem from '../EmblaGalleryItem/EmblaGalleryItem'

export function EmblaGallery({images = [], className}) {
  const [emblaRef] = useEmblaCarousel()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalUrl, setModalUrl] = useState('')

  return (<>
    <div className={`${css.embla} ${className}`} ref={emblaRef}>
      <div className={css.embla__container}>
        {images.map((image, index) => (
          <EmblaGalleryItem
            key={index}
            imageUrl={image.thumb}
            onClick={() => {
              setModalUrl(image.original)
              setIsModalOpen(true)
            }}
          />
        ))}
      </div>
    </div>
    <ImageModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      url={modalUrl}
    />
    </>
  )
}
