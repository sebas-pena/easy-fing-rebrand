import { useState } from "react"
import Card from "./Card"
import { SearchIcon } from "./Icons"
import rawData from "../data/rawData.json"

const Cardsgallery = () => {
  const [path, setPath] = useState(["institutes"])
  const [dataPath, setDataPath] = useState(["institutes"])
  const [cards, setCards] = useState(rawData.institutes.children)

  const handleInputChange = (e) => {
    return e.target.value
  }
  const handleChangeGallery = (e, index) => {
    setPath([...path, cards[index].title])
    setDataPath([...dataPath, cards[index]])
    setCards(cards[index].children)
  }

  return (
    <section className="card-gallery__ctn">
      <div className="card-gallery__top">
        <div className="card-gallery__links-ctn">
          <ul>
            {path.map((item, index, array) => (
              <li key={index}>
                <button>{item}</button>
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
        {cards.map((card, index) => (
          <button
            key={card.title}
            onClick={(e) => handleChangeGallery(e, index)}
          >
            <Card imageUrl={card.imageUrl} heading={card.title} />
          </button>
        ))}
      </div>
    </section>
  )
}
export default Cardsgallery
