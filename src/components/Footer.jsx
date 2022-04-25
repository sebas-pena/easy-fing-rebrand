import { SocialNetworksList } from "./SocialNetworksList"

const Footer = () => {
	return (
		<footer>
			<SocialNetworksList />
			<div className="footer__send-material-ctn">
				<p>¿Tienes material para compartir?</p>
				<p>
					Envialo a: <a href="contacto@easyfing.com">contacto@easyfing.com</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer
