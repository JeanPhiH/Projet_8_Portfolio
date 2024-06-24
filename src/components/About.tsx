import Image from "next/image";
import MenuItem from "./MenuItem";
import Link from "next/link";

export default function About() {
	return (
		<>
			<section>
				<div className="divbar"></div>
				<h2>Qui suis-je ?</h2>
				<div className="md:flex flex-col lg:flex-row-reverse md:justify-between items-center">
					{/* BIO */}
					<article className="mt-10 md:w-3/4 mx-auto lg:w-1/2 px-5 lg:px-20 lg:self-center rounded-3xl py-5 shadow-inner shadow-light dark:shadow-lg dark:shadow-dark/50  bg-gradient-to-br from-light/15 to-dark dark:from-dark/15 dark:to-light lg:hover:scale-110 duration-500">
						<p className="">Je m’appelle</p>
						<h3 className="text-highlight dark:text-highdark text-3xl md:text-4xl font-bold my-2">
							Jean-Philippe Herfeld
						</h3>
						<p className="text-xl md:text-2xl font-bold my-2">
							et je suis développeur web junior.
						</p>
						<p className="mt-3">
							J’ai étudié chez OpenClassrooms afin de réaliser une reconversion
							professionnelle. J’ai aimé l’importance accordée à la{" "}
							<span>pratique</span> et à l’
							<span>autonomie</span>.
						</p>
						<p className="mt-3">
							J’aime les distributions <span>Linux</span>, la logique{" "}
							<span>React</span> et les <span>animations CSS</span>.
						</p>
						<p className="my-3">
							Outre les compétences présentées au-dessus, je sais également
							utiliser les langages <span>SCSS</span>, <span>Express</span> et
							mettre en place un <span>SEO</span>.
						</p>
						<p>
							Je suis curieux de tout et aime les challenges qu’offre la vie.
						</p>

						<p className="mt-4">Ma maxime du moment: </p>
						<blockquote className="italic">
							&quot; C’est dans la contrainte que nait l’inspiration. &quot;
						</blockquote>
					</article>

					{/* PHOTOS */}
					<div className="w-[300px] h-[500px] mx-auto relative mt-10 lg:w-[400px] lg:h-[375px] lg:animate-wiggle lg:hover:animate-none">
						<p className="hidden lg:block italic text-center lg:absolute left-4 top-5 lg:w-1/2">
							J’écris, anime et enregistre des sessions <span>JDR</span>, la
							dernière se déroule dans l’univers des <span>backrooms</span>.
						</p>
						<p className="lg:hidden text-center block italic mb-3">
							<span>Rigoureux</span> et <span>méthodique</span>, j’aime avoir
							des projets <span>sans bugs</span> optimisés <span>SEO</span> et
							résultats enrichis.
						</p>
						<div className="frametl absolute rounded-tl-xl overflow-hidden">
							<Image
								className="object-cover h-full scale-110"
								src="/photos/jdrblur.webp"
								alt="une partie de jdr"
								width={400}
								height={182}
							/>
						</div>
						<div className="framer absolute top-[107px] lg:top-3 right-0 ">
							<Image
								className="object-cover h-full"
								src="/photos/moicut5.webp"
								alt="Me"
								width={250}
								height={350}
							/>
						</div>
						<p className="hidden text-center lg:block italic lg:absolute top-24 right-0 lg:w-1/3">
							<span>Rigoureux</span> et <span>méthodique</span>, j’aime avoir
							des projets <span>sans bugs</span> optimisés <span>SEO</span> et
							résultats enrichis.
						</p>
						<div className="framebl absolute bottom-[32px] lg:bottom-0 rounded-bl-xl overflow-hidden">
							<Image
								className="object-cover h-full"
								src="/photos/gazoncut3.webp"
								alt="moi assis dans l'herbe avec un ordinateur"
								width={400}
								height={182}
							/>
						</div>
						<p className="italic text-center mt-96 lg:mt-0 lg:absolute left-4 bottom-5 lg:w-1/2">
							Un site doit être <span>responsive</span>, <span>dynamique</span>{" "}
							et <span>inclusif</span> en le rendant le plus{" "}
							<span>accessible</span> possible.
						</p>
					</div>
				</div>

				{/* LINKS */}
				<div className="text-center mt-20 lg:mt-14">
					<p className="my-3">
						Mon CV, ma skill map et ma page Github sont consultables ici:
					</p>
					<div className="flex justify-center gap-3">
						<MenuItem
							title="CV"
							href="/docs/jphindev.pdf"
							target="_blank"
							src="/icons/cv.svg"
							width={24}
							height={24}
						/>
						<MenuItem
							title="Skills"
							href="https://miro.com/app/board/uXjVK-F7nmo=/?share_link_id=715896338711"
							target="_blank"
							src="/icons/mindmap.svg"
							width={24}
							height={24}
						/>
						<MenuItem
							title="Github"
							href="https://github.com/JeanPhiH"
							target="_blank"
							src="/icons/github.svg"
							width={24}
							height={24}
						/>
					</div>
				</div>
			</section>
		</>
	);
}
