import { useState } from "react"
import { Link } from "react-router-dom"
import Card from "./Card"
import { SearchIcon } from "./Icons"
import rawData from "../data/rawData.json"

const Cardsgallery = () => {
	const [path, setPath] = useState(["institutes"])
	const [cards, setCards] = useState(rawData[path[0]])

	const handleInputChange = (e) => {
		return e.target.value
	}
	const handleChangeGallery = (e) => {
		return e.target.value
	}
	return (
		<section className="card-gallery__ctn">
			<div className="card-gallery__top">
				<div className="card-gallery__links-ctn">
					<ul>
						<li>
							<Link to="/">Instituto:</Link>
						</li>
						{path.map((item, index, array) => (
							<li key={index + item}>
								<Link to={`/${array.slice(0, index + 1).join("/")}`}>
									{item}
								</Link>
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
			<div className="card-gallery__cards-ctn">
				{cards.map((card) => (
					<button key={card.title} onClick={handleChangeGallery}>
						<Card imageUrl={card.imageUrl} heading={card.title} />
					</button>
				))}
			</div>
		</section>
	)
}
export default Cardsgallery
