import '../styles/contact.scss'
import portada from '../images/contactanos.jpg'
import { useState } from 'react'
import { sendMail } from '../service/mail'

const initialForm = {
  mailName: '',
  mailEmail: '',
  mailSubject: '',
  mailMessage: ''
}

const Contact = () => {

  const [form,setForm] = useState(initialForm)

  const handleChange = (e:any) => {
    const name = e.target.name
    const value = e.target.value
    if(value!=='') {
      setForm({
        ...form,
        [name]:value
      })
    }
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    if(!form.mailName || !form.mailEmail || !form.mailSubject || !form.mailMessage) {
      alert('Complete todos los campos.')
    } else {
      sendMail(form)
      alert('Mensaje enviado correctamente.')
      handleReset()
    }
  }

  const handleReset = () => {
    setForm(initialForm)
  }

  return (
    <main className='main-contact'>
      <div className="front-page-contact">
        <img src={portada} alt="" />
      </div>
      <div className="stn-contact">
        <h2>Contáctanos</h2>
        <div className="hr"></div>
        <div className="ctn-contact">
          <div className="social-network">
            <h3>Formulario</h3>
            <form>
              <div className="box-input t-name">
                <input type="text" name='mailName' value={form.mailName} onChange={handleChange} placeholder='Nombre completo'/>
              </div>
              <div className="box-input t-email">
                <input type="email" name='mailEmail' value={form.mailEmail} onChange={handleChange} placeholder='Correo electrónico'/>
              </div>
              <div className="box-input t-subject">
                <input type="text" name='mailSubject' value={form.mailSubject} onChange={handleChange} placeholder='Asunto'/>
              </div>
              <div className="box-input t-message">
                <textarea name='mailMessage' value={form.mailMessage} onChange={handleChange} id="" cols={30} rows={10} placeholder='Mensaje'></textarea>
              </div>
              <button type="submit" onClick={handleSubmit}>Enviar Mensaje</button>
            </form>
          </div>
          <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d975.7963589265504!2d-77.04579573036126!3d-11.96165968728193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU3JzQyLjAiUyA3N8KwMDInNDIuNiJX!5e0!3m2!1ses-419!2spe!4v1703514880417!5m2!1ses-419!2spe" width="600" height="450" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Contact