import { useState, useEffect, useRef } from "react"

const ContactForm = () => {
	const [disableSubmit, setDisableSubmit] = useState(true)
	return (
		<div className="contact-form__ctn">
			<form className="contact-form">
				<div className="contact-form__input-ctn">
					<label htmlFor="name">Nombre</label>
					<input id="name" type="text" />
				</div>
				<div className="contact-form__input-ctn">
					<label htmlFor="email">Email</label>
					<input id="email" type="text" />
				</div>
				<div className="contact-form__input-ctn">
					<label htmlFor="message">Mensaje</label>
					<textarea id="message" />
				</div>
				<div className="contact-form__file-input-ctn">
					<label htmlFor="file">Adjuntar archivo</label>
					<input id="file" type="file" />
				</div>
				<input
					className="contact-form__submit"
					type="submit"
					value="Enviar"
					{...(disableSubmit ? { disabled: true } : {})}
				/>
			</form>
		</div>
	)
}

export default ContactForm
