import { BrowserRouter } from "react-router-dom"
import AppRouter from "./router/AppRouter"

import "./styles/styles.css"

function App() {
	return (
		<BrowserRouter basename="easy-fing-rebrand">
			<AppRouter />
		</BrowserRouter>
	)
}

export default App
