import Image from 'next/image'

export default function About () {
	return (
		<section className="px-4 mt-32 flex flex-col lg:flex-row-reverse md:justify-between">
			<article className="mt-10 w-3/4 mx-auto lg:w-1/2 lg:px-20 lg:self-center">
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
				<p className="absolute left-5 top-5 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos!</p>
				<p className="absolute left-5 bottom-5 w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos!</p>
				<p className="absolute top-28 right-0 w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, quos!</p>
				<div className="frametl absolute">
					<Image className="object-cover h-full" src="/photos/paysage.webp" alt="Template" width={400} height={225}/>
				</div>
				<div className="framer absolute top-3 right-0">
					<Image className="object-cover h-full" src="/photos/moi.webp" alt="Template" width={250} height={350}/>
				</div>
				<div className="framebl absolute bottom-0">
					<Image className="object-cover h-full" src="/photos/jdr.webp" alt="Template" width={400} height={225}/>
				</div>
			</div>
		</section>
	)
}