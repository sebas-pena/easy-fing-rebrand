import { useState, useEffect, useRef } from "react"
import { UploadIcon } from "./Icons"

const ContactForm = () => {
  const [disableSubmit, setDisableSubmit] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)
  }

  const handleChange = ({ target }) => {
    console.log(target)
    if (target.value.length > 0) {
    }
  }

  return (
    <div className="contact-form__ctn">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__input-ctn">
          <label htmlFor="name">Nombre</label>
          <input id="name" type="text" onChange={handleChange} />
        </div>
        <div className="contact-form__input-ctn">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" onChange={handleChange} />
        </div>
        <div className="contact-form__input-ctn">
          <label htmlFor="message">Mensaje</label>
          <textarea id="message" onChange={handleChange} />
        </div>
        <div className="contact-form__bottom">
          <label className="contact-form__file-input" htmlFor="file">
            Adjuntar archivo
            <UploadIcon size={13} color="#222" />
          </label>
          <input id="file" type="file" />
          <input
            className="contact-form__submit"
            type="submit"
            value="Enviar"
            {...(disableSubmit ? { disabled: true } : {})}
          />
        </div>
      </form>
    </div>
  )
}

export default ContactForm
