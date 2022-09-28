import React from 'react';
import WorkImg from '../skills/workImg.jpeg';
import RealEstate from '../skills/realestate.jpg';

import HTML from '../skills/html.png';
import CSS from '../skills/css.png';
import JavaScript from '../skills/javascript.png';
import ReactImg from '../skills/react.png';
import Node from '../skills/node.png';
import FireBase from '../skills/firebase.png';
import AWS from '../skills/aws.png';
import GitHub from '../skills/github.png';
import Tailwind from '../skills/tailwind.png';
import Mongo from '../skills/mongo.png';
import { FaGithub, FaLinkedin, FaEye, FaGlobe } from 'react-icons/fa';
import { GoGlobe } from 'react-icons/go';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight, HiArrowNarrowLeft } from 'react-icons/hi';

const Work = () => {
	return (
		<div
			name="work"
			className="w-full md:h-screen text-gray-300 bg-[#0a192f] "
		>
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Work
					</p>
					<p className="py-4">//Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
					{/* Grid Item */}
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<h3 class="absolute text-2xl text-black top-3 right-3">
							<span>
								<FaGlobe size={30} />
								{/* <GoGlobe size={30} /> */}
							</span>
						</h3>
						<h2 class="absolute opacity-100 group-hover:opacity-0 text-2xl text-bold text-pink-600 bottom-4 ">
							Bottom Center{' '}
						</h2>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-xl flex justify-center font-bold text-white tracking-wider">
								React JS Application
							</span>
							<p className="px-2 text-white text-justify pt-1">
								lorem ipsum sample something description Lorem
								ipsum dolor sit amet consectetur adipisicing
								elit.
							</p>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaEye size={30} />
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaGithub size={30} />
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${RealEstate})` }}
						className="shadow-lg  shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${RealEstate})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${WorkImg})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
					<div
						style={{ backgroundImage: `url(${RealEstate})` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						{/* Hover effects */}
						<div className="opacity-0 group-hover:opacity-100">
							<span className="text-2xl font-bold text-white tracking-wider">
								React JS Application
							</span>
							<div className="pt-8 text-center">
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Demo
									</button>
								</a>
								<a href="/">
									<button className="text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg">
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-row relative   ">
					<Link
						to="contact"
						smooth={true}
						duration={1000}
						className="group absolute left-5 border-2 py-3 px-3 md:px-6 my-3 flex items-center justify-center text-white w-fit cursor-pointer"
					>
						<span>
							<HiArrowNarrowLeft className="ml-3 text-white" />
						</span>
						prev
					</Link>
					<Link
						to="contact"
						smooth={true}
						duration={1000}
						className="absolute right-5 group border-2 py-3 px-3 md:px-6 my-3 flex items-center justify-center text-white w-fit cursor-pointer"
					>
						More
						<span>
							<HiArrowNarrowRight className="ml-3 text-white" />
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Work;
