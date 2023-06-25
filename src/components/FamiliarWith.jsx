import React from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import familiarWith from '../data/familiarWith'

const FamiliarWith = () => {
	return (
		<div
			className=" w-full   pb-10  bg-[#0a192f] text-gray-300"
			name="familiarWith"
		>
			<div className=" w-full  max-w-[1000px] mx-auto p-4 flex flex-col flex-wrap justify-center ">
				<div>
					<p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
						Familiar With
					</p>
					<p className="py-4">
						&#47;&#47; These are the some other technologies I am familiar
						with
					</p>
				</div>
				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6  py-8  text-center mt-5">
					{familiarWith.map((skill) => (
						<div className={skill.hoverClass}>
							<div className='flex flex-col  h-full p-2'>
								<div className='flex flex-1  items-center  '>
									<img
										src={skill.img}
										className="w-20   mx-auto "
										alt="html"
									/>
								</div>
								<p className="my-2 text-white font-bold  ">
									{skill.title}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className="w-full font-bold flex justify-between">
					<NavLink
						to="/skills"
						smooth={true}
						duration={1000}
						className="group back-to-translate px-3 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
					>
						<span className="reverse-translate-x  duration-500">
							<HiArrowNarrowLeft className="mr-3 text-2xl  text-pink-600 group-hover:text-white " />
						</span>
						<span className=" text-white group-hover:text-pink-600 ">
							Skills
						</span>
					</NavLink>
					<NavLink
						to="/toolsUsed"
						smooth={true}
						duration={1000}
						className="group  px-3 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
					>
						<span className=" text-white group-hover:text-pink-600 ">
							Tools Used
						</span>
						<span className="group-hover:translate-x-4  duration-500">
							<HiArrowNarrowRight className="ml-3 text-2xl text-pink-600 group-hover:text-white " />
						</span>
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default FamiliarWith;
