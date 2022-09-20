import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import AWS from "../assets/aws.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
	return (
		<div
			className=" w-full h-full pt-12 pb-10  bg-[#0a192f] text-gray-300"
			name="skills"
		>
			{/* Container */}
			<div className=" w-full h-full  max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-12 mt-12">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
						Skills
					</p>
					<p className="py-4">
						// These are the technologies I've worked with
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6  py-8  text-center mt-5">
					{/* <div className="shadow-md hover:shadow-orange-600 hover:scale-110 duration-600">
						<img
							src={HTML}
							className="w-20 mx-auto"
							alt="HTML Icon"
						/>
						<p className="my-4">HTML</p>
					</div> */}
					{/* <div className="shadow-md hover:shadow-orange-600 hover:scale-110 duration-700 rounded-lg">
						<img src={HTML} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">HTML</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={CSS} alt="HTML Icon" />
						<p className="my-4">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={JavaScript} alt="HTML Icon" />
						<p className="my-4">JAVASCRIPT</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={ReactImg} alt="HTML Icon" />
						<p className="my-4">REACT</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={GitHub} alt="GITHUB Icon" />
						<p className="my-4">GITHUB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={Node} alt="NODE Icon" />
						<p className="my-4">NODE</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={Mongo} alt="HTML Icon" />
						<p className="my-4">MONGODB</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
						<img src={AWS} alt="HTML Icon" />
						<p className="my-4">AWS</p>
					</div> */}

					<div className="shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg">
						<img src={CSS} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">CSS</p>
					</div>
					{/* <div className="shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg">
						<img src={JS} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">JavaScript</p>
					</div> */}
					{/* <div className="shadow-md hover:shadow-blue-500 hover:scale-110 duration-700 rounded-lg">
						<img
							src={Reacticon}
							className="w-20 mx-auto"
							alt="html"
						/>
						<p className="my-4 text-white font-bold">React</p>
					</div> */}
					<div className="shadow-md hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg">
						<img src={Node} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">Node Js</p>
					</div>
					<div className="shadow-md hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg">
						<img src={Mongo} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">MongoDB</p>
					</div>
					{/* <div className="shadow-md hover:shadow-gray-500 hover:scale-110 duration-700 rounded-lg">
						<img
							src={Express}
							className="w-20 mx-auto"
							alt="html"
						/>
						<p className="my-4 text-white font-bold">Express Js</p>
					</div> */}
					{/* <div className="shadow-md hover:shadow-white hover:scale-110 duration-700 rounded-lg">
						<img src={Github} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">Github</p>
					</div> */}
					<div className="shadow-md hover:shadow-yellow-500 hover:scale-110 duration-700 rounded-lg">
						<img src={AWS} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">AWS</p>
					</div>
					<div className="shadow-md hover:shadow-sky-600 hover:scale-110 duration-700 rounded-lg">
						<img
							src={Tailwind}
							className="w-20 mx-auto"
							alt="html"
						/>
						<p className="my-4 text-white font-bold">TailwindCSS</p>
					</div>
					{/* <div className="shadow-md hover:shadow-violet-700 hover:scale-110 duration-700 rounded-lg">
						<img
							src={Bootstrap}
							className="w-20 mx-auto"
							alt="html"
						/>
						<p className="my-4 text-white font-bold">Bootstrap</p>
					</div>
					<div className="shadow-md hover:shadow-rose-500 hover:scale-110 duration-700 rounded-lg">
						<img src={Figma} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">Figma</p>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Skills;
