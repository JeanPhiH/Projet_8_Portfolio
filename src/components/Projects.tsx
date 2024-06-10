import Image from "next/image";
import jsonProjects from "@/json/jsonProjects.json";
import MenuItem from "./MenuItem";

export default function Projects() {
	return (
		<section id="projects" className="">
			<h2>Projets réalisés</h2>
			<div className="flex gap-12 flex-col justify-center items-center ">
				{/* PROJECTS FROM JSON FILE */}
				{jsonProjects.map((project) => (
					<div
						key={project.title}
						className="relative group/project flex flex-col lg:flex-row mt-5 w-full max-w-[960px] lg:h-[500px] rounded-xl hover:shadow-inner dark:hover:shadow-lg hover:shadow-light dark:hover:shadow-dark/50"
					>
						<Image
							src={project.imgSrc}
							alt={project.imgAlt}
							quality={85}
							width={952}
							height={492}
							className="rounded-xl lg:absolute object-cover w-full h-[250px] lg:h-full lg:group-hover/project:scale-[0.33] duration-500 origin-top-left"
						/>
						<h3 className="bg-dark/75 text-light w-full lg:w-[150px] p-3 lg:rounded-xl lg:absolute left-5 bottom-5 text-center lg:group-hover/project:left-20 lg:group-hover/project:bottom-[150px] duration-500">
							{project.title}
						</h3>
						<div className="flex justify-center gap-3 bg-dark/75 lg:w-[150px] p-3 lg:absolute left-[200px] bottom-5 text-center lg:group-hover/project:left-20 duration-500  lg:rounded-full">
							{project.technoIcons.map((techno) => (
								<Image
									key={techno.technoTitle}
									src={techno.technoSrc}
									alt={`logo ${techno.technoTitle}`}
									title={techno.technoTitle}
									width={24}
									height={24}
								/>
							))}
						</div>
						<div className="flex flex-col justify-center items-center gap-3 bg-transparent p-1 lg:p-3 absolute right-0 top-0">
							{project.linksIcons.map((link) => (
								<MenuItem
									key={link.linkAlt}
									title={link.linkAlt}
									href={link.linkHref}
									target={link.linkTarget}
									src={link.linkSrc}
									width={24}
									height={24}
								/>
							))}
						</div>
						<div className="lg:w-1/3"></div>
						<article className="px-4 lg:w-3/5 ">
							<h4>Mission</h4>
							<p>{project.mission}</p>
							<h4>Contraintes</h4>
							<p>{project.constraints}</p>
							<h4>Problématiques rencontrées</h4>
							<p>{project.issues}</p>
							<h4>Compétences acquises</h4>
							<ul>
								{project.skills.map((skill) => (
									<li className="list-disc list-inside" key={skill.skill}>
										{skill.skill}
									</li>
								))}
							</ul>
						</article>
					</div>
				))}
			</div>
		</section>
	);
}
