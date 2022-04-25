import toolsData from "../data/tools.json"

const Tools = () => {
	const { tools } = toolsData
	const middleIndex = Math.floor(tools.length / 2)
	const firstHalf = tools.slice(0, middleIndex)
	const secondHalf = tools.slice(-middleIndex)

	return (
		<div className="tools">
			<h3 className="tools__heading">Otras herramientas:</h3>
			<div className="tools__ctn">
				<ul className="tools__list">
					{firstHalf.map((tool) => (
						<li key={tool.name}>
							<a href={tool.url} target="_blank" rel="noopener noreferrer">
								<img
									src={`/content/images/${tool.imagePath}`}
									alt={tool.name}
								/>
							</a>
						</li>
					))}
				</ul>
				<ul className="tools__list">
					{secondHalf.map((tool) => (
						<li key={tool.name}>
							<a href={tool.url} target="_blank" rel="noopener noreferrer">
								<img
									src={`/content/images/${tool.imagePath}`}
									alt={tool.name}
								/>
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Tools
