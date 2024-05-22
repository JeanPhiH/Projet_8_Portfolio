import Image from 'next/image'

export default function Projects() {
	return (
		<section className="px-4 mt-32">
			<h2>Projets réalisés</h2>
			<div className="flex gap-10 flex-col lg:flex-row lg:flex-wrap justify-center items-center">
				<div className="relative group flex mt-5 w-[500px] h-[400px] border border-light">
					<Image src="/photos/jdr.webp" alt="Template" width={400} height={400} className="absolute object-cover w-full h-full group-hover:scale-[0.30] duration-500 origin-top-left"/>
					<h3 className='bg-dark w-[150px] absolute bottom-5 text-center group-hover:translate-y-[-200px] duration-500'>Projet1</h3>
					<div className="w-[150px]"></div>
					<article className="p-4">
						<p>Mission</p>
						<p>technologies</p>
						<p>liens</p>
					</article>
				</div>
				<div className="relative group flex mt-5 w-[500px] h-[400px] border border-light">Projet2</div>
				<div className="lg:basis-1/2 h-[400px]">Projet3</div>
				<div className="lg:basis-1/2 h-[400px]">projet4</div>
			</div>
		</section>
	)
}