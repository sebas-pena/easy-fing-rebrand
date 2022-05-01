import { useState, useEffect } from "react"
import { ArrowIcon } from "./Icons"

export const SelectBox = ({ items, cb }) => {
	const [selected, setSelected] = useState({
		title: "Selecciona un curso",
		index: null,
	})
	const [open, setOpen] = useState(false)

	const handleClickOutside = (e) => {
		setOpen(false)
	}

	const handleOpen = (e) => {
		e.stopPropagation()
		setOpen(!open)
	}
	const handleClick = (index) => {
		setSelected({ title: items[index], index })
		cb(index)
	}

	useEffect(() => {
		window.addEventListener("click", handleClickOutside)
		return () => {
			window.removeEventListener("click", handleClickOutside)
		}
	}, [])

	return (
		<div className={"select-box__ctn " + (open ? "open" : "closed")}>
			<button
				className={"select-box__selected " + (open ? "open" : "closed")}
				onClick={handleOpen}
			>
				<p>{selected.title}</p>
				<ArrowIcon size={10} />
			</button>
			<ul className={"select-box__list " + (open ? "open" : "closed")}>
				{items.map((item, index) => (
					<li
						key={item}
						className={selected.index === index ? "selected" : ""}
						onClick={() => {
							handleClick(index)
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	)
}
