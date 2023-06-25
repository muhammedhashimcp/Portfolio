import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-full bg-[#0a192f] flex justify-center items-center p-4 pt-20"
		>
			<form
				method="POST"
				action="https://getform.io/f/d37c6108-c813-4514-a933-7a0e9261c62f"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-4">
					<p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
						Contact
					</p>
					<p className="text-gray-300 py-4">
						&#47;&#47; Submit the form below or shoot me on email-
						cpmohdhashim@gmail.com 
					</p>
				</div>
				<input
					className="bg-[#ccd6f6] p-2"
					type="text"
					placeholder="Full Name"
					name="name" 
				/>
				<input
					className="my-4 p-2 bg-[#ccd6f6]"
					type="text"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-[#ccd6f6] p-2"
					name="message"
					rows="10"
				></textarea>
				<button className="text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center rounded-lg ">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
