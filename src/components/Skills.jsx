import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import FamiliarWith from './FamiliarWith';
import SkillSet from './SkillSet';


const Skills = () => {
	return (
		<div
			className=" w-full   pb-10  bg-[#0a192f] text-gray-300"
			name="skills"
		>
			<Routes>
				<Route path="" element={<SkillSet />} />
				<Route path="/skills" element={<SkillSet />} />
				<Route path="/familiar-with" element={<FamiliarWith />} />
			</Routes>
		</div>
	);
};

export default Skills;
