import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
	return (
		<nav className="flex flex-row items-center jus gap-1 md:gap-5 p-2">
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/home.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">Accueil</span>
			</Link>
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/project.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">Projets</span>
			</Link>
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/testimonial.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">Avis</span>
			</Link>
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/cv.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">CV</span>
			</Link>
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/mail.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">E-mail</span>
			</Link>
			<Link href="/" className="flex flex-col items-center justify-center md:w-24 md:h-24 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight group-hover:border-t-2 group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10" src="/icons/linkedin.svg" alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">LinkedIn</span>
			</Link>
		</nav>
	);
}