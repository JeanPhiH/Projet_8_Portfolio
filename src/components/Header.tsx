import MenuItem from "./MenuItem";

export default function Header() {
	return (
		<header className="flex justify-between px-4 items-center border-b-2 border-b-light">
			<h1 className="md:text-2xl font-bold">JeanPhiH’s Portfolio</h1>
			<nav className="flex flex-row items-center justify-center gap-1 md:gap-2 p-2">
				<MenuItem title="Accueil" href="/" src="/icons/home.svg" />
				<MenuItem title="Projets" href="/#projects" src="/icons/project.svg" />
				<MenuItem
					title="Avis"
					href="/testimonials"
					src="/icons/testimonial.svg"
				/>
				<MenuItem title="CV" href="/cv" src="/icons/cv.svg" />
				<MenuItem
					title="E-mail"
					href="mailto:jp.herfeld@gmail.com"
					src="/icons/mail.svg"
				/>
				<MenuItem
					title="LinkedIn"
					href="https://www.linkedin.com/in/jeanphiherfeld/"
					src="/icons/linkedin.svg"
				/>
			</nav>
		</header>
	);
}
