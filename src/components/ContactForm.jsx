import { useState, useEffect } from "react"
import useForm from "../hooks/useForm"
import { UploadIcon } from "./Icons"

const ContactForm = () => {
  const [disableSubmit, setDisableSubmit] = useState(false)

  const { handleInputChange, values } = useForm({
    name: "",
    email: "",
    message: "",
    file: "",
  })
  const { name, email, message, file } = values

  useEffect(() => {
    if (name && email && message) {
      setDisableSubmit(false)
    } else {
      setDisableSubmit(true)
    }
  }, [name, email, message])

  const handleFileChange = ({ target }) => {
    console.log(target.files)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="contact-form__ctn">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form__input-ctn">
          <label
            htmlFor="name"
            className={name ? "active" : "inactive"}
            required
          >
            Nombre
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="contact-form__input-ctn">
          <label
            htmlFor="email"
            className={email ? "active" : "inactive"}
            required
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="contact-form__input-ctn">
          <label
            htmlFor="message"
            className={message ? "active" : "inactive"}
            required
          >
            Mensaje
          </label>
          <textarea id="message" name="message" onChange={handleInputChange} />
        </div>
        <div className="contact-form__bottom">
          <label
            className="contact-form__file-input"
            htmlFor="file"
            name="files"
          >
            Adjuntar archivo
            <UploadIcon size={13} color="#222" />
          </label>
          <input id="file" type="file" onChange={handleFileChange} />
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
