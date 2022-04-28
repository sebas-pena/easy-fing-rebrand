import { useRef, useState } from "react"

import previasData from "../data/previas.json"

const { cursos } = previasData

const PriorsPage = () => {
  const [previas, setPrevias] = useState(null)
  const selectorRef = useRef(null)
  const handleSelectionChange = (e) => {
    const selector = selectorRef.current
    const previas = cursos[selector.value - 1].previas
    setPrevias(previas)
  }
  return (
    <div className="priors-page__ctn">
      <h3>Consulta las previas de un curso</h3>
      <select onChange={handleSelectionChange} ref={selectorRef}>
        <option value="0">Elige un curso</option>
        {cursos.map((curso, index) => (
          <option key={curso.title} value={index + 1}>
            {curso.title}
          </option>
        ))}
      </select>
      {previas && previas.length > 0 ? (
        <div className="priors__ctn">
          <h4 className="priors__heading">Las previas son:</h4>
          <ul className="priors__list">
            {previas.map((previa, index) => (
              <li key={index}>
                <h5>{previa}</h5>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        previas && (
          <h4 className="priors__heading">Este curso no tiene previas.</h4>
        )
      )}
    </div>
  )
}

export default PriorsPage
