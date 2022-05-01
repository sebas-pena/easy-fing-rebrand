import { Routes, Route } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ContactPage from "../pages/ContactPage"
import HomePage from "../pages/HomePage"
import PreviousCoursesPage from "../pages/PreviousCoursesPage"

function AppRouter() {
	return (
		<>
			<Header />
			<div className="pages-ctn">
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/previas" element={<PreviousCoursesPage />} />
					<Route path="/contacto" element={<ContactPage />} />
				</Routes>
			</div>
			<Footer />
		</>
	)
}

export default AppRouter
