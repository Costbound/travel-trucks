import css from './ImageModal.module.css'
import Modal from 'react-modal'

export default function ImageModal({ url, alt, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      contentLabel='fullsize picture modal'
      shouldCloseOnEsc={true}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      closeTimeoutMS={300}
      >
      <img className={css.img} src={url} alt={alt} />
    </Modal>
  )
}
