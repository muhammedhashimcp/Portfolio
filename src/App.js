import About from "./components/About";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Proj from "./components/Proj";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
	return (
		<div>
			<Navbar/>
			<Home/>
			<About/>
			<Skills/>
			{/* <Work /> */}
			<Details />
			<Contact />
			{/* <Proj />  */}
			<Footer />
			{/* <Projects /> */}
		</div>
	);
}

export default App;
