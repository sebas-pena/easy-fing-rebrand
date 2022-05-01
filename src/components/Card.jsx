const Card = ({ imageUrl, heading }) => {
	const parsedImageUrl = `./content/images/cards-logos/${imageUrl}`

	return (
		<div className="card__ctn">
			<div className="card__img-ctn">
				<img src={parsedImageUrl} alt="logo" className="card__img" />
			</div>
			<div className="card__text-ctn">
				<h3 className="card__title">{heading}</h3>
				<p className="card__text"></p>
			</div>
		</div>
	)
}

export default Card
