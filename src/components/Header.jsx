import logo from "../assets/images/logo.png"

const Header = () => {
	return (
		<>
			<header className="header__ctn">
				<img className="header__img" src={logo} alt="logo" />
				<h2 className="header__phrase">La FING hecha fácil</h2>
			</header>
		</>
	)
}

export default Header
