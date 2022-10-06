import skills from '../skillsDetails';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';

const SkillSet = () => {
	return (
		<div className=" w-full  max-w-[1000px] mx-auto p-4 flex flex-col flex-wrap justify-center ">
			<div>
				<p className="text-4xl font-bold inline border-b-4 border-pink-600  ">
					Skills
				</p>
				<p className="py-4">
					// These are the technologies I've worked with
				</p>
			</div>
			<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-6  py-8  text-center mt-5">
				{/* Skill icon */}

				{skills.map((skill) => (
					<div className={skill.hoverClass}>
						<img
							src={skill.img}
							className="w-20 mx-auto"
							alt="html"
						/>
						<p className="my-4 text-white font-bold">
							{skill.title}
						</p>
					</div>
				))}
			</div>
			<div className="w-full font-bold flex justify-end">
		
				<NavLink
					to="/familiar-with"
					smooth={true}
					duration={1000}
					className="group  px-3 my-2 flex items-center justify-center text-white w-fit cursor-pointer"
				>
					<span className=" text-white group-hover:text-pink-600 ">
						Familiar With
					</span>
					<span className="group-hover:translate-x-4  duration-500">
						<HiArrowNarrowRight className="ml-3 text-2xl text-pink-600 group-hover:text-white " />
					</span>
				</NavLink>
			</div>
		</div>
	);
};

export default SkillSet;
