import { Link } from "react-router-dom"
import Card from "./Card"
import { SearchIcon } from "./Icons"

const Cardsgallery = ({ cards = [], path = ["hola", "como", "estas"] }) => {
  const handleInputChange = (e) => {
    console.log(e.target.value)
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
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {cards.map((card) => (
          <Card key={card.id} card={card} path={path} />
        ))}
      </div>
    </section>
  )
}
export default Cardsgallery
