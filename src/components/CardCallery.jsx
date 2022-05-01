import { useState, useEffect } from "react"
import Card from "./Card"
import { SearchIcon } from "./Icons"
import rawData from "../data/rawData.json"

const Cardsgallery = () => {
	const [path, setPath] = useState(["Institutos :"])
	const [dataPath, setDataPath] = useState(["institutes"])
	const [cards, setCards] = useState(rawData.institutes)

	useEffect(() => {
		let cards = rawData.institutes
		dataPath.forEach((index) => {
			if (index !== "institutes") {
				cards = cards[index].children
			}
		})
		setCards(cards)
	}, [dataPath])

	const handleInputChange = (e) => {
		return e.target.value
	}
	const handleChangeGallery = (e, index) => {
		setPath([...path, cards[index].title])
		setDataPath([...dataPath, index])
		console.log(e)
	}

	return (
		<section className="card-gallery__ctn">
			<div className="card-gallery__top">
				<div className="card-gallery__links-ctn">
					<ul>
						{path.map((item, index) => (
							<li key={index}>
								<button
									onClick={() => {
										setPath(path.slice(0, index + 1))
										setDataPath(dataPath.slice(0, index + 1))
									}}
								>
									{item}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div className="card-gallery__search-ctn">
					<input
						type="text"
						placeholder="Buscar..."
						className="card-gallery__search"
						onChange={handleInputChange}
					/>
					<SearchIcon size="20" color="#333" />
				</div>
			</div>
			{cards.length > 0 ? (
				<div className="card-gallery__cards-ctn">
					{cards.map((card, index) =>
						card.type === "folder" ? (
							<button
								key={card.title}
								onClick={(e) => handleChangeGallery(e, index)}
							>
								<Card imageUrl={card.imageUrl} heading={card.title} />
							</button>
						) : (
							<a
								key={card.title}
								href={card.url}
								target="_blank"
								rel="noopener norefferer"
							>
								<Card imageUrl={card.imageUrl} heading={card.title} />
							</a>
						)
					)}
				</div>
			) : (
				<div className="gallery__empaty">
					<img src="./content/images/404.webp" alt="code 404" />
					<p>
						Aún no hay material, si deseas puedes colaborar enviando un correo a
						<span className="gallery__empaty-email">contacto@easyfing.com</span>
					</p>
				</div>
			)}
		</section>
	)
}
export default Cardsgallery
