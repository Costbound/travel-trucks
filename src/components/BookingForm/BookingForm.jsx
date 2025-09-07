import { Field, Form, Formik } from 'formik'
import css from './BookingForm.module.css'
import TextInputField from '../TextInputField/TextInputField'
import Button from '../Button/Button'
import { useId } from 'react'
import toast from 'react-hot-toast'

export default function BookingForm() {
  const nameID = useId()
  const emailID = useId()
  const dateID = useId()
  const commentID = useId()

  const handleSubmit = ({name, email, date, comment}) => {
    if (!name || !email || !date) {
      toast.error('Please fillup all required fields')
      return
    }
    console.log('Mock submit booking form: ', { name, email, date, comment })
    toast.success('Booking success!')
  }

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.message}>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={{ name: '', email: '', date: '', comment: '' }} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <TextInputField className={css.input} name='name' placeholder='Name*' id={nameID}  />
          <TextInputField className={css.input} name='email' type='email' placeholder='Email*' id={emailID}  />
          <TextInputField className={css.input} name='date' placeholder='Booking date*' id={dateID}  />
          <TextInputField className={`${css.input} ${css.comment_input}`} as='textarea' name='comment' placeholder='Comment' id={commentID} />
          <Button className={css.button} type='submit'>Send</Button>
        </Form>
      </Formik>
    </div>
  )
}
