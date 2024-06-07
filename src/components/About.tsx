import Image from "next/image";
import MenuItem from "./MenuItem";

export default function About() {
	return (
		<>
			<section>
				<h2>Qui suis-je ?</h2>
				<div className="md:flex flex-col lg:flex-row-reverse md:justify-between items-center">
					{/* BIO */}
					<article className="mt-10 md:w-3/4 mx-auto lg:w-1/2 lg:px-20 lg:self-center">
						<p className="mt-5">Je m’appelle</p>
						<h3 className="text-highlight dark:text-highdark text-3xl md:text-4xl font-bold my-2">
							Jean-Philippe Herfeld
						</h3>
						<p>et je suis développeur web junior.</p>
						<p>
							J’ai étudié chez OpenClassrooms et j’y ai aimé l’importance
							accordée à la{" "}
							<span>
								pratique
							</span>{" "}
							et à l’
							<span>
								autonomie
							</span>
							.
						</p>
						<p>
							J’aime les distributions{" "}
							<span>Linux</span>,
							la logique{" "}
							<span>React</span>{" "}
							et les{" "}
							<span>
								animations CSS
							</span>
							.
						</p>
						<p>
							Je suis curieux de tout et aime les challenges qu’offre la vie.
						</p>
						<p className="mb-3">
							Mon CV et ma skill map sont consultables ici:
						</p>
						<div className="flex gap-3">
							<MenuItem
								title="CV"
								href="/cv"
								target="_blank"
								src="/icons/cv.svg"
								size={24}
							/>
							<MenuItem
								title="Skills"
								href="https://miro.com/app/board/uXjVK-F7nmo=/?share_link_id=715896338711"
								target="_blank"
								src="/icons/mindmap.svg"
								size={24}
							/>
						</div>
						<p className="mt-4">Ma maxime du moment: </p>
						<blockquote className="italic">
							C’est dans la contrainte que nait l’inspiration.
						</blockquote>
					</article>

					{/* PHOTOS */}
					<div className="w-[300px] h-[500px] mx-auto relative mt-10 lg:w-[400px] lg:h-[375px] lg:animate-wiggle lg:hover:animate-none">
						<p className="italic text-center lg:absolute left-4 top-5 lg:w-1/2">
							Amateur de randonnées et de tourisme, j’aime explorer le monde qui
							m’entoure.
						</p>
						<div className="frametl absolute rounded-tl-xl overflow-hidden">
							<Image
								className="object-cover h-full"
								src="/photos/paysage.webp"
								alt="Landscape"
								width={400}
								height={225}
							/>
						</div>
						<div className="framer absolute top-[58px] lg:top-3 right-0 ">
							<Image
								className="object-cover h-full"
								src="/photos/moi.webp"
								alt="Me"
								width={250}
								height={350}
							/>
						</div>
						<p className="hidden text-center lg:block italic lg:absolute top-28 right-0 lg:w-1/3">
							À dix ans, j’écrivais mon premier code en basic sur un Amstrad cpc
							464 à cassette.
						</p>
						<div className="framebl absolute bottom-20 lg:bottom-0 rounded-bl-xl overflow-hidden">
							<Image
								className="object-cover h-full"
								src="/photos/jdr.webp"
								alt="RPG session"
								width={400}
								height={225}
							/>
						</div>
						<p className="italic text-center mt-96 lg:mt-0 lg:absolute left-4 bottom-5 lg:w-1/2">
							J’écris, anime et enregistre des sessions JDR, la dernière en date
							se déroule dans l’univers des backrooms.
						</p>
					</div>
				</div>
			</section>
		</>
	);
}
