import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa";

import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import {
	MY_LINKEDIN_PROFILE,
	MY_GITHUB_PROFILE,
	MY_GMAIL_ACCOUNT,
	MY_RESUME_URL
} from '../config/config.js'
const Navbar = () => {

 let fontSize = 24;
 let paddingVertical = 6;
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300">
			<h1 className=" font-DancingScript text-4xl font-bold text-pink-600">
				MH
			</h1>
			{/* Menu */}
			<ul className="hidden  md:flex font-bold">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="projects" smooth={true} duration={500}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="experience" smooth={true} duration={500}>
						Experience
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>
			{/* Hamberger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>
			{/* Mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center text-white font-bold'
				}
			>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="home"
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="Projects"
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="experience"
						smooth={true}
						duration={500}
					>
						Experience
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* Social Icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600 ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href={MY_LINKEDIN_PROFILE}
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href={MY_GITHUB_PROFILE}
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0] ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href={`mailto:${MY_GMAIL_ACCOUNT}`}
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69] ">
						<a
							target="_blank"
							rel="noopener noreferrer"
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href={MY_RESUME_URL}
						>
							Resume <CgFileDocument size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
