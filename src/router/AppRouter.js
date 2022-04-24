import { Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import HomePage from "../pages/HomePage"

function AppRouter() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
			</Routes>
			<Footer />
		</>
	)
}

export default AppRouter
