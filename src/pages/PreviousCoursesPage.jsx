import { useRef, useState } from "react"
import { SelectBox } from "../components/SelectBox"

import previasData from "../data/previas.json"

const { cursos } = previasData

const PreviousCoursesPage = () => {
	const [previas, setPrevias] = useState(null)
	const handleSelectionChange = (index) => {
		const previas = cursos[index].previas
		setPrevias(previas)
	}
	return (
		<div className="priors-page">
			<div className="priors-courses__ctn">
				<h3>Consulta las previas de un curso</h3>
				<SelectBox
					items={cursos.map((curso) => curso.title)}
					cb={handleSelectionChange}
				/>

				{previas && previas.length > 0 ? (
					<div className="priors__ctn">
						<h4 className="priors__heading">Las previas son:</h4>
						<ul className="priors__list">
							{previas.map((previa, index) => (
								<li key={index}>
									<p>{previa}</p>
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
		</div>
	)
}

export default PreviousCoursesPage
