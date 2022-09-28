import React, { useState } from "react";
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaLinkedin,

} from "react-icons/fa";

import { CgFileDocument } from 'react-icons/cg';
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../skills/logo.png";
import { Link } from "react-scroll";
const Navbar = () => {

 let fontSize = 24;
 let paddingVertical = 6;
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-10 bg-[#0a192f] text-gray-300">
			{/* <div>
				<img src={Logo} alt="Logo Img" style={{ width: '50px' }} />
			</div> */}
			{/* //and you can use in any where */}
			{/* animate-ping */}
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
					<Link to="work" smooth={true} duration={500}>
						Work
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
					{' '}
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
					{' '}
					<Link
						onClick={handleClick}
						to="work"
						smooth={true}
						duration={500}
					>
						Work
					</Link>
				</li>
				<li className="py-6 text-4xl">
					{' '}
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
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href="/"
						>
							LinkedIn <FaLinkedin size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] ">
						<a
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href="/"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#6fc2b0] ">
						<a
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href="/"
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#565f69] ">
						<a
							className="flex justify-between items-center w-full text-gray-300 pl-2"
							href="/"
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
