import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
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
			<Work/>
			<Contact />
			<Footer />
			{/* <Projects /> */}
		</div>
	);
}

export default App;
