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

function App() {
	return (
		<div>
			<Navbar />
			<Home />
			<About />
			<Skills />
			<FamiliarWith />
			<Details />
			<Contact />
			<Footer /> 
		</div>
	);
}

export default App;
