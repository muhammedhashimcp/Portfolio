import React from 'react';
import { FaGithub, FaEye } from 'react-icons/fa';
import projects from '../data/projectDetails.js';

const ProjectDetails = () => {
	return (
		<div
			name="projects"
			className="w-full  text-gray-300 bg-[#0a192f] md:px-5 pt-20 pb-10 "
		>
			<div className="max-w-[1000px] mx-auto p-4 pt-20 flex flex-col  justify-center w-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
						Projects
					</p>
					<p className="py-4">&#47;&#47;Check out some of my recent work</p>
				</div>
				{/* Container */}
				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
					{/* Grid Item */}
					{projects.map((project) => (
						<div
							style={{ backgroundImage: `url(${project.img}` }}
							className="shadow-lg shadow-[#040c16] group h-64 container rounded-md flex justify-center  mx-auto content-div"
						>
							<div className=" bg-[#0a192f] h-70   mt-auto  group-hover:hidden mb-4 py-2 px-4 rounded-md ">
								<h2 className=" text-xl  font-bold text-white tracking-wider">
									{project.title}
								</h2>
							</div>
							{/* Hover effects */}
							<div className="hidden group-hover:block pt-3">
								<span className="text-xl flex justify-center font-bold text-white tracking-wider">
									{project.title}
								</span>
								<p className="px-2 text-white text-justify pt-1">
									{project.desc}
								</p>
								<div className="pt-1 text-center">
									<p className="px-2 text-white text-justify ">
										&#47;&#47; Tech Used &nbsp; &#58; &#45;
									</p>
									{/* <div className='inline justify-center'> */}
									<div className=" flex  justify-between px-3 mt-1">
										{project.techUsed.map((techUsed) => (
											<img
												src={techUsed}
												className="w-10 "
												alt="html"
											/>
										))}
									</div>
									{/* </div> */}
								</div>
								<div className="mt-100 text-center">
									{project.liveLink && <a href={project.liveLink} target="_blank"
										rel="noopener noreferrer">
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
											<FaEye size={30} />
										</button>
									</a>}
									{project.githubLink &&
										<a href={project.githubLink} target="_blank"
											rel="noopener noreferrer">
											<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
												<FaGithub size={30} />
											</button>
										</a>
									}
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
