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
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col md:justify-center h-full">
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
					<div className="flex lg:hidden  mt-10  top-[35%] ">
						<ul className="flex space-x-5">
							<li className="w-[60px] h-[60px] flex justify-between items-center  bg-blue-600">
								<a
									className="flex justify-between items-center w-full text-gray-300"
									target="_blank"
									rel="noreferrer"
									href="https://www.linkedin.com/in/muhammed-anas-ak/"
								>
									<FaLinkedin size={30} />
								</a>
							</li>
							<li className="w-[60px] h-[60px] flex justify-between items-center  bg-[#333333]">
								<a
									className="flex justify-between items-center w-full text-gray-300"
									target="_blank"
									rel="noreferrer"
									href="https://github.com/AnasMuhammedAK"
								>
									<FaGithub size={30} />
								</a>
							</li>
							<li className="w-[60px] h-[60px] flex justify-between items-center  bg-[#6fc2b0]">
								<Link to="contact" smooth={true} duration={500}>
									<a
										className="flex justify-between items-center w-full text-gray-300"
										href="/"
									>
										<HiOutlineMail size={30} />
									</a>
								</Link>
							</li>
							<li className="w-[160px] h-[60px] flex justify-between items-center  bg-[#565f69]">
								<a
									className="flex justify-between items-center w-full text-gray-300"
									href="/resume.pdf"
									download={true}
								>
									Resume <BsFillPersonLinesFill size={30} />
								</a>
							</li>
						</ul>
					</div>
					{/* button  */}
					<div className="flex flex-col ">
						<Link
							to="contact"
							smooth={true}
							duration={1000}
							className="group border-2 py-3 px-3 md:px-6 my-3 flex items-center justify-center text-white w-fit cursor-pointer"
						>
							Contact me
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

export default Home;
