import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
// import { HiArrowNarrowRight } from 'react-icons/hi';
import { FaGithub, FaLinkedin,FaEye } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { CgFileDocument } from 'react-icons/cg';
import { Typewriter } from 'react-simple-typewriter';


import { Link } from 'react-scroll';
const Home = () => {
	return (
		<div
			name="home"
			// bg-[#0a192f]
			className="w-full h-fit md:h-screen pt-12  flex justify-center items-center bg-black"
		>
			{/* container */}
			<div className="max-w-[1000px] mx-auto px-4 pt-auto flex flex-col justify-center h-full">
				<div className="mt-12 pt-12 md:pt-0 md:mt-0"></div>

				<p className="text-pink-600">Hi, my name is</p>
				<h1 className="text-4xl md:text-6xl font-bold text-[#ccd6f6] ">
					Muhammed Hashim
				</h1>
				<h2 className="md:text-4xl text-2xl font-bold text-gray-600">
					I'am a{' '}
					<span className="">
						<Typewriter
							words={['Full Stack Developer', 'Web Developer']}
							loop={false}
							cursor
							cursorStyle="|"
							typeSpeed={100}
							deleteSpeed={50}
							delaySpeed={1000}
						/>
					</span>
				</h2>
				<p className="text-white py-4 max-w-[700px]">
					I’m a full-stack developer specializing in building (and
					occasionally designing) exceptional digital experiences.
					Currently, I’m focused on building responsive full-stack web
					applications.
				</p>
				<div>
					{/* social links */}
					<div className="flex flex-col ">
						<Link
							to="projects"
							smooth={true}
							duration={1000}
							className="group border-2 py-3 px-3 md:px-6 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
						>
							My Projects
							<span className="group-hover:rotate-90 duration-500">
								<HiArrowNarrowRight className="ml-3 text-white" />
							</span>
						</Link>
						<a
							href="https://firebasestorage.googleapis.com/v0/b/muhammed-hashim-portfolio.appspot.com/o/resume%2Fmuhammedhashimcp-resume.pdf?alt=media&token=8b3dd284-8a7f-4c39-9d12-142503182aea"
							download={true}
							className="lg:hidden group border-2 py-3 px-6 my-2  flex items-center justify-center text-white w-fit"
						>
							Resume
							<span className="">
								<CgFileDocument
									size={20}
									className="ml-3 text-white"
								/>
							</span>
						</a>
					</div>
					{/* social icons */}
					<div className="flex mt-8 lg:hidden  items-center">
						<ul className="flex ">
							<li className="w-[20px] h-[60px]   duration-500 text-center">
								<a
									href="https://www.linkedin.com/in/muhammed-hashim-9aa2a9143/"
									target="_blank"
									rel="noreferrer"
									className="text-white"
								>
									<FaLinkedin size={30} />
								</a>
							</li>
							<li className="w-[20px] h-[60px]   duration-500 mx-4">
								<a
									href="https://github.com/muhammedhashimcp"
									target="_blank"
									rel="noreferrer"
									className="text-white"
								>
									<FaGithub size={30} />
								</a>
							</li>
							<li className="w-[20px] h-[60px]  duration-500">
								<a
									href="mailto:cpmohdhashim@gmail.com"
									className="text-white"
								>
									<HiOutlineMail size={32} />
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
