import { useState } from "react"

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState)

  const handleInputChange = ({ target }) => {
    setValues((values) => ({
      ...values,
      [target.name]: target.value,
    }))
  }

  return {
    handleInputChange,
    values,
  }
}

export default useForm
