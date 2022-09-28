import React from "react";
import HTML from '../skills/html.png';
import CSS from "../skills/css.png";
import JavaScript from "../skills/javascript.png";
import ReactImg from "../skills/react.png";
import Node from "../skills/node.png";
import FireBase from "../skills/firebase.png";
import AWS from "../skills/aws.png";
import GitHub from "../skills/github.png";
import Tailwind from "../skills/tailwind.png";
import Mongo from "../skills/mongo.png";

const Skills = () => {
	return (
		<div
			className=" w-full h-fit pt-12 pb-10  bg-[#0a192f] text-gray-300"
			name="skills"
		>
			{/* Container */}
			<div className=" w-full h-fit  max-w-[1000px] mx-auto p-4 flex flex-col justify-center pt-12 mt-12">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
						Skills
					</p>
					<p className="py-4">
						// These are the technologies I've worked with
					</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6  py-8  text-center mt-5">
					

					<div className="shadow-md shadow-[#040c16] hover:shadow-blue-400 hover:scale-110 duration-700 rounded-lg">
						<img src={CSS} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">CSS</p>
					</div>
					<div className="shadow-md shadow-[#040c16] hover:shadow-green-400 hover:scale-110 duration-700 rounded-lg">
						<img src={Node} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">Node Js</p>
					</div>
					

					<div className="shadow-md hover:shadow-green-600 hover:scale-110 duration-700 rounded-lg">
						<img src={Mongo} className="w-20 mx-auto" alt="html" />
						<p className="my-4 text-white font-bold">MongoDB</p>
					</div>
				
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
				
				</div>
			</div>
		</div>
	);
};

export default Skills;
