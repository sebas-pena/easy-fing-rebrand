import { Routes, Route } from "react-router-dom"
import Header from "../components/Header"
import NavBar from "../components/NavBar"
import HomePage from "../pages/HomePage"

function AppRouter() {
	return (
		<>
			<Header />
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
		</>
	)
}

export default AppRouter
