import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="navbar__ctn">
      <ul>
        <li>
          <NavLink to="/">Material</NavLink>
        </li>
        <li>
          <NavLink to="/previas">Previas</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
