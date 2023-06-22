import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/ProjectsDetails";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";
import FamiliarWith from "./components/FamiliarWith";
import { Route, Routes } from "react-router-dom";
// import {Routes,Route}
function App() {
	return (
		<>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Details />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
