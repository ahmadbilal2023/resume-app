import React from "react";

const ProfessionalExperience = ({ data }) => {
	const { title, experiences } = data;
	return (
		<section>
			<h2 className='mb-6 bg-midnight text-white px-2'> {title}</h2>
			<div className='flex flex-col bg-bubble-gum gap-6'>
				{experiences.map(({ role, description, current }) => (
					<div key={role} className='flex flex-col rounded-lg'>
						<span className={`h-2 ${current ? "bg-green" : "bg-grey"}`} />
						<div className='bg-grey-light p-6 drop-shadow-md'>
							<h3 className="font-bold">{role}</h3>
							<p className='mt-2 bg-black text-white px-3 text-justify py-3 rounded-lg'>{description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProfessionalExperience;
