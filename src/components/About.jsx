import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const About = () => {
	return (
		<div
			name="about"
			id="about"
			className="  bg-[#0a192f] w-full h-full text-gray-300 py-20"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] mx-auto p-4 py-6 flex flex-col  justify-center w-full">
					<div >
						<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
							About
						</p>
						<p className="py-4">//Please check about me</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="flex flex-col justify-center  items-center h-full">
						<div className="sm:text-right text-4xl font-bold flex items-center">
							<p className="text-justify">
								Hi. I'm Muhammed Hashim CP, nice to meet you. Please take a look
								around.
							</p>

						</div>
						<br />
						<ul className="list-none flex flex-col items-center ">
							<li className="hover:text-pink-500">Creative problem solving and innovation</li>
							{/* <li className="hover:text-pink-500">Effective communication skills</li> */}
							{/* <li className="hover:text-pink-500">Efficient time management</li> */}
							<li className="hover:text-pink-500">Embracing a growth mindset</li>
							{/* <li className="hover:text-pink-500">Emotional intelligence</li> */}
							<li className="hover:text-pink-500">Collaboration and teamwork</li>
							<li className="hover:text-pink-500">Dedication</li>
							<li className="hover:text-pink-500">Adaptability</li>
							<li className="hover:text-pink-500">Active listening </li>
							<li className="hover:text-pink-500">Leadership </li>
						</ul>
					</div>
					<div>
						<p className="text-justify">
							As an entry-level developer with one year of experience, I am dedicated to building high-quality software solutions that positively impact people's lives. I have worked with a diverse range of clients, including individuals, small businesses, and large enterprises, gaining valuable experience across different project scopes. My primary focus is on developing tailored software solutions that precisely meet the unique requirements of each client. <br /> <br />
							Imagine having a dedicated software expert at your disposal, ready to transform your ideas into reality. With my expertise, I can optimize your processes, automate tasks, and revolutionize your workflow. My goal is to improve efficiency, enhance user experiences, and unlock new possibilities for your business. Whether you need assistance in streamlining your operations or harnessing the power of technology, I am here to make it happen.<br /> <br />
							Let's collaborate and harness the potential of technology together. Having a skilled software expert by your side can drive your business towards success. I am passionate about leveraging my knowledge and skills to help you overcome challenges, find innovative solutions, and achieve your goals. Reach out to me, and let's explore how we can use software to propel your business forward.
						</p>
					</div>
				</div>
				<div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-3 gap-1 my-4 px-4 ">
					<div className="flex justify-center ">
						<Link
							to="projects"
							smooth={true}
							duration={1000}
							className="group border-2 p-3  md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
						>
							<span className="text-2xl text-pink-600 font-bold ">10+ </span> &nbsp; Projects
							<span className="group-hover:rotate-90 duration-500">
								<HiArrowNarrowRight className="ml-3 text-white" />
							</span>
						</Link>
					</div>
					<div className="flex justify-center ">
						<Link
							to="experience"
							smooth={true}
							duration={1000}
							className="group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
						>
							<span className="text-2xl text-pink-600 font-bold ">1+ </span>&nbsp;  Experience
							<span className="group-hover:rotate-90 duration-500">
								<HiArrowNarrowRight className="ml-3 text-white" />
							</span>
						</Link>
					</div>
					<div className="flex justify-center ">
						<Link
							to="experience"
							smooth={true}
							duration={1000}
							className="group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
						>
							<span className="text-2xl text-pink-600 font-bold">1+ </span>&nbsp; Company
							<span className="group-hover:rotate-90 duration-500">
								<HiArrowNarrowRight className="ml-3 text-white" />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
