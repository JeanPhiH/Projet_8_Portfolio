"use client"

import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
	const [navStyle, setNavStyle] = useState("hidden absolute bg-dark top-9 right-0 md:static md:flex flex-col md:flex-row items-start md:items-center justify-center gap-1 md:gap-2 p-2");
	const displayBurger = () => {
		if (navStyle !== "absolute bg-dark top-9 right-0 md:static flex flex-col md:flex-row items-start md:items-center justify-center gap-1 md:gap-2 p-2") setNavStyle("absolute bg-dark top-9 right-0 md:static flex flex-col md:flex-row items-start md:items-center justify-center gap-1 md:gap-2 p-2");
        else setNavStyle("hidden absolute bg-dark top-9 right-0 md:static md:flex flex-col md:flex-row items-start md:items-center justify-center gap-1 md:gap-2 p-2");


	}
	return (
		<header className="flex justify-between px-4 items-center border-b-2 border-b-light">
			<h1 className="md:text-2xl font-bold">JeanPhiH’s Portfolio</h1>
			<nav className={navStyle}>
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
			<Image src="/icons/burger-menu.svg" alt="Menu Burger" width={24} height={24} className="md:hidden" onClick={displayBurger}/>
		</header>
	);
}
