import { useState } from "react"

const useForm = (initialState) => {
	const [values, setValues] = useState(initialState)

	const handleInputChange = (e) => {
		const { id, value, type, files } = e.target

		setValues((values) => ({
			...values,
			[id]: type === "file" ? files[0] : value,
		}))
	}

	return {
		handleInputChange,
		values,
	}
}

export default useForm
