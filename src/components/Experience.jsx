import React from "react";
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin, FaQuoteLeft, FaQuoteRight, FaYoutube } from "react-icons/fa";

import experience from "../data/experience";
const Experience = () => {
	return (
		<section
			name="experience"
			id="experience"
			className="  bg-[#0a192f] w-full  text-gray-300 py-10"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] mx-auto p-4 pt-10 flex flex-col  justify-center w-full">
					<div className="pb-8">
						<p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
							Experience
						</p>
						<p className="py-4">&#47;&#47;Check my experiences</p>
					</div>
				</div>
				{experience.map((company) => <section className="max-w-[1000px]  p-5">
					<div className="w-full grid sm:grid-cols-2 gap-8 px-4 border py-4">
						<div className="flex flex-col justify-center  items-center h-full  ">
							<img src={company.img} alt={company.title} className="w-48" />
							<blockquote className="text-justify italic mt-1">
								{company.caption}
							</blockquote>
							<div class="relative m-2 ">
								<div className="absolute inset-0 flex items-center justify-center">
									<img src={company.img} alt={company.title} className="w-96 opacity-20" />
								</div>
								<article className="flex-col md:flex ">
									<span>
										<FaQuoteLeft className="mr-2 text-gray-500 text-2xl" />
									</span>
									<blockquote className="text-justify italic md:my-3">
										{company.opinion}
									</blockquote>
									<span className="bottom-0 flex justify-end md:self-end">
										<FaQuoteRight className="ml-2 text-gray-500 text-2xl bottom-0 " />
									</span>
								</article>
							</div>
							<article className="w-full flex flex-col items-end px-3 ">
								<blockquote className=" italic md:my-1">
									{company.opinion_way}
								</blockquote>
								<blockquote className=" italic md:my-1">
									{company.opinion_from}
								</blockquote>
							</article>
						</div>
						<div className="my-2 flex flex-col  items-center ">
							<p className="text-xl font-bold ">{company.role}</p>
							<p className="mt-2 ">{company.position}</p>
							<p className="mt-2 ">{company.duration}</p>
							<p className="mt-2 text-sm ">{company.status}</p>
							<div className="mt-3 w-full flex-1  ">
								<p className="">
									Skills:
								</p>
								<div className="flex flex-wrap justify-center   my-2 ">
									{company.techs_learned.map((tech) =>
										<img src={tech} alt={company.title} className="w-10 m-2" />
									)}
								</div>
							</div>
							{/* <div className="flex mt-3   items-center"> */}
							<ul className="flex flex-wrap items-center justify-center ">
								{company.website && <a href={company.website} target="_blank"
									rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaGlobe size={30} />
									</button>
								</a>}
								{company.linked_in && <a href={company.linked_in} target="_blank"
									rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaLinkedin size={30} />
									</button>
								</a>}
								{company.instagram && <a href={company.instagram} target="_blank"
									rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaInstagram size={30} />
									</button>
								</a>}
								{company.youtube && <a href={company.youtube} target="_blank"
									rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaYoutube size={30} />
									</button>
								</a>}
								{company.github && <a href={company.github} target="_blank"
									rel="noopener noreferrer">
									<button className="text-center rounded-lg px-4 py-3 m-2 bg-[#333333] hover:bg-[#e9e96d] text-white hover:text-black font-bold text-lg">
										<FaGithub size={30} />
									</button>
								</a>}
							</ul>
							{/* </div> */}
						</div>
					</div>
				</section>)
				}
			</div>
		</section>
	);
};

export default Experience;
