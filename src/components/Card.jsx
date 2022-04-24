import logo from "../assets/images/inco-logo.png"
const Card = ({ heading }) => {
  return (
    <div className="card__ctn">
      <div className="card__img-ctn">
        <img src={logo} alt="logo" className="card__img" />
      </div>
      <div className="card__text-ctn">
        <h3 className="card__title">Inco</h3>
        <p className="card__text"></p>
      </div>
    </div>
  )
}

export default Card
