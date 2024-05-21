import Image from 'next/image'

export default function About () {
	return (
		<section className="px-4 my-10 flex flex-col md:flex-row-reverse md:justify-between">
			<article>
				<h2>Qui suis-je ?</h2>
				<p className="mt-5">Je m’appelle</p>
				<p className="text-highlight text-4xl font-bold">Jean-Philippe Herfeld</p>
				<p>et je suis développeur web junior.</p>
				<p>J’ai étudié chez OpenClassrooms et j’y ai aimé l’importance accordée à la <span className="text-highlight">pratique</span> et à l’<span className="text-highlight">autonomie</span>.</p>
				<p>Je suis curieux de tout et aime les challenges qu’offre la vie.</p>
				<p>Ma maxime du moment: </p>
				<blockquote className="italic">C’est dans la contrainte que nait l’inspiration.</blockquote>
			</article>
			
			<div className="mx-auto relative mt-10 w-[400px] h-[375px]">
				<div className="frametl bg-highlight absolute">
					<Image className="object-cover h-full" src="/photos/paysage.webp" alt="Template" width={400} height={225}/>
				</div>
				<div className="framer bg-highlight absolute top-3 right-0">
					<Image className="object-cover h-full" src="/photos/moi.webp" alt="Template" width={250} height={350}/>
				</div>
				<div className="framebl bg-highlight absolute bottom-0">
					<Image className="object-cover h-full" src="/photos/jdr.webp" alt="Template" width={400} height={225}/>
				</div>
			</div>
		</section>
	)
}