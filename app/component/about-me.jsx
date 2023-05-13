import React, { useId } from "react";
import Skills from "./skills";

const AboutMe = ({ data, skills }) => {
	const { title, body } = data;
	const id = useId();
	return (
		<section>
			<h1 className='mb-8 text-white bg-black font-semibold px-2'> {title}</h1>
			{body?.map((el, i) => (
				<p key={`${id}_${i}`} className='mb-6 text-xl text-justify font-semibold'>
					{el}
				</p>
			))}
			<Skills data={skills} />
		</section>
	);
};

export default AboutMe;
