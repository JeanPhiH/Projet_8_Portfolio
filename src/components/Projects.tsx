import Image from "next/image";
import Link from "next/link";
import jsonProjects from "@/json/jsonProjects.json";
import MenuItem from "./MenuItem";

export default function Projects() {
	return (
		<section id="projects">
			<h2>Projets réalisés</h2>
			<div className="flex gap-10 flex-col justify-center items-center ">
				{/* PROJECTS FROM JSON FILE */}
				{jsonProjects.map((project) => (
					<div
						key={project.title}
						className="relative group/project flex flex-col lg:flex-row mt-5 w-full max-w-[960px] lg:h-[440px] border-4 rounded-xl border-double border-light"
					>
						<Image
							src={project.imgSrc}
							alt={project.imgAlt}
							width={500}
							height={400}
							className="lg:absolute object-cover w-full h-[250px] lg:h-full lg:group-hover/project:scale-[0.33] duration-500 origin-top-left"
						/>
						<h3 className="bg-dark/75 w-full lg:w-[150px] p-3 lg:absolute left-5 bottom-5 text-center lg:group-hover/project:left-20 lg:group-hover/project:bottom-[150px] duration-500">
							{project.title}
						</h3>
						<div className="flex justify-center gap-3 bg-dark/75 w-full lg:w-[150px] p-3 lg:absolute left-[200px] bottom-5 text-center lg:group-hover/project:left-20 duration-500">
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
						<div className="flex flex-col justify-center items-center gap-3 bg-dark/75 p-1 lg:p-3 absolute right-0 top-0">
							{project.linksIcons.map((link) => (
								<MenuItem
									key={link.linkAlt}
									title={link.linkAlt}
									href={link.linkHref}
									src={link.linkSrc}
									size={32}
								/>
								// <Link key={link.linkAlt} href={link.linkHref} target="_blank">
								// 	<Image
								// 		src={link.linkSrc}
								// 		alt={link.linkAlt}
								// 		width={24}
								// 		height={24}
								// 	/>
								// </Link>
							))}
						</div>
						<div className="lg:w-1/3"></div>
						<article className="p-4 lg:w-1/2">
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
