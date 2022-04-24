import { Link } from "react-router-dom"
import Card from "./Card"

const Cardsgallery = ({ cards = [], path = ["hola", "como", "estas"] }) => {
	const handleInputChange = (e) => {
		console.log(e.target.value)
		return e.target.value
	}
	return (
		<section>
			<div className="card-gallery__top">
				<div className="card-gallery__links-ctn">
					<Link to="/">Instituto:</Link>
					{path.map((item, index, array) => (
						<Link key={index} to={`/${array.slice(0, index + 1).join("/")}`}>
							{item}
						</Link>
					))}
				</div>
				<input
					type="text"
					placeholder="Buscar..."
					onChange={handleInputChange}
				/>
			</div>
			<div className="card-gallery__ctn">
				{cards.map((card) => (
					<Card key={card.id} card={card} path={path} />
				))}
			</div>
		</section>
	)
}
export default Cardsgallery
