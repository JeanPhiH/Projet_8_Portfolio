import Image from "next/image";
import Link from "next/link";
import jsonProjects from "@/json/jsonProjects.json";

export default function Projects() {
	return (
		<section className="hidden px-4 mt-32">
			<h2>Projets réalisés</h2>
			<div className="flex gap-10 flex-col lg:flex-row lg:flex-wrap justify-center items-center">

				{/* PROJECTS FROM JSON FILE */}
				{jsonProjects.map((project) => (
					<div
						key={project.title}
						className="relative group flex mt-5 wmax-[500px] h-[400px] border-4 border-double border-light"
					>
						<Image
							src={project.imgSrc}
							alt={project.imgAlt}
							width={500}
							height={400}
							className="absolute object-cover w-full h-full group-hover:scale-[0.30] duration-500 origin-top-left"
						/>
						<h3 className="bg-dark/75 w-[150px] p-3 absolute left-5 bottom-5 text-center group-hover:left-0 group-hover:bottom-[150px] duration-500">
							{project.title}
						</h3>
						<div className="flex justify-center gap-3 bg-dark/75 w-[150px] p-3 absolute left-[325px] bottom-5 text-center group-hover:left-0 duration-500">
							{project.technoIcons.map((techno) => (
								<Image
									key={techno.technoAlt}
									src={techno.technoSrc}
									alt={techno.technoAlt}
									width={24}
									height={24}
								/>
							))}
						</div>
						<div className="flex justify-center gap-3 bg-dark/75 w-[100px] p-3 absolute right-0 top-0 text-center">
							{project.linksIcons.map((link) => (
								<Link key={link.linkAlt} href={link.linkHref} target="_blank">
									<Image
										src={link.linkSrc}
										alt={link.linkAlt}
										width={24}
										height={24}
									/>
								</Link>
							))}
						</div>
						<div className="w-[150px]"></div>
						<article className="p-4 w-[350px]">
							<h4>Mission</h4>
							<p>{project.mission}</p>
							<h4>Contraintes</h4>
							<p>{project.constraints}</p>
							<h4>Compétences acquises</h4>
							<ul>
								{project.skills.map((skill) => (
									<li key={skill.skill}>{skill.skill}</li>
								))}
							</ul>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
