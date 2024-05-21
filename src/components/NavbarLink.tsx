import Image from 'next/image'
import Link from 'next/link'

export default function NavbarLink() {
	const jsonLinks = [
		{
			href: "/",
			src: "/icons/home.svg",
			title: "Accueil",
		},
		{
			href: "/#projects",
			src: "/icons/project.svg",
			title: "Projets",
		},
		{
			href: "/testimonials",
			src: "/icons/testimonial.svg",
			title: "Avis",
		},
		{
			href: "/cv",
			src: "/icons/cv.svg",
			title: "CV",
		},
		{
			href: "mailto:jp.herfeld@gmail.com",
			src: "/icons/mail.svg",
			title: "E-mail",
		},
		{
			href: "https://www.linkedin.com/in/jeanphiherfeld/",
			src: "/icons/linkedin.svg",
			title: "LinkedIn",
		},
	]
	return (
		jsonLinks.map((link) => (

			<Link key={link.title} href={link.href} className="flex flex-col items-center justify-center md:w-20 md:h-20 relative group p-2">
				<div className="rounded-full absolute inset-0 border-highlight md:group-hover:border-t-2 md:group-hover:animate-spin-quick"></div>
				<Image className="text-light relative z-10 w-10 h-10 md:w-6 md:h-6" src={link.src} alt="HomePage" width={24} height={24} />
				<span className="hidden md:flex">{link.title}</span>
			</Link>
		))
	);
}