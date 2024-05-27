import Image from "next/image";
import Link from "next/link";
import jsonProjects from "@/json/jsonProjects.json";

export default function Projects() {
	return (
		<section className="px-4 mt-32">
			<h2>Projets réalisés</h2>
			<div className="flex gap-10 flex-col justify-center items-center ">
				{/* PROJECTS FROM JSON FILE */}
				{jsonProjects.map((project) => (
					<div
						key={project.title}
						className="relative group flex flex-col lg:flex-row mt-5 w-full max-w-[960px] lg:h-[440px] border-4 rounded-lg border-double border-light"
					>
						<Image
							src={project.imgSrc}
							alt={project.imgAlt}
							width={500}
							height={400}
							className="lg:absolute object-cover w-full h-[250px] lg:h-full lg:group-hover:scale-[0.33] duration-500 origin-top-left"
						/>
						<h3 className="bg-dark/75 w-full lg:w-[150px] p-3 lg:absolute left-5 bottom-5 text-center lg:group-hover:left-0 lg:group-hover:bottom-[150px] duration-500">
							{project.title}
						</h3>
						<div className="flex justify-center gap-3 bg-dark/75 w-full lg:w-[150px] p-3 lg:absolute left-[200px] bottom-5 text-center lg:group-hover:left-5 duration-500">
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
						<div className="flex justify-center gap-3 bg-dark/75 lg:w-[100px] p-3 absolute right-0 top-0 text-center">
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
						<div className="lg:w-1/3"></div>
						<article className="p-4 lg:w-[350px]">
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
