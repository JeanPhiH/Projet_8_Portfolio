"use client";

import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {
	// Display burger menu by changing nav style
	const defaultNavStyle =
		"hidden fixed bg-dark rounded-full shadow-lg shadow-light/50 md:shadow-none z-10 top-11 right-0 md:static md:flex flex-col md:flex-row items-center justify-center gap-3 p-2";
	const [navStyle, setNavStyle] = useState(defaultNavStyle);

	const burgerRef = useRef<HTMLImageElement | null>(null);

	const displayBurger = () => {
		if (navStyle === defaultNavStyle)
			setNavStyle(defaultNavStyle.replace("hidden", "flex"));
		else setNavStyle(defaultNavStyle);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			burgerRef.current &&
			!burgerRef.current.contains(event.target as Node)
		) {
			setNavStyle(defaultNavStyle);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);
		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [navStyle]);

	return (
		<header className="max-w-screen-xl mx-auto h-11 md:h-auto z-10 flex bg-dark justify-between px-4 items-center border-b-2 border-b-light">
			<h1 className="md:text-2xl font-bold">JeanPhiH’s Portfolio</h1>
			<nav className={navStyle}>
				<MenuItem title="Accueil" href="/" target="_self" src="/icons/home.svg" size={24}/>
				<MenuItem title="Projets" href="/#projects" target="_self" src="/icons/project.svg" size={24} />
				<MenuItem
					title="Avis"
					href="/testimonials"
					target="_self" 
					src="/icons/testimonial.svg" size={24}
				/>
				<MenuItem title="CV" href="/cv" target="_blank" src="/icons/cv.svg" size={24} />
				<MenuItem title="Contact" href="/#contact" target="_self" src="/icons/mail.svg" size={24} />
				<MenuItem
					title="LinkedIn"
					href="https://www.linkedin.com/in/jp-herfeld/"
					target="_blank" 
					src="/icons/linkedin.svg" size={24}
				/>
			</nav>
			<Image
				ref={burgerRef}
				src="/icons/burger-menu.svg"
				alt="Menu Burger"
				width={40}
				height={40}
				className="fixed right-0 top-0 z-10 bg-dark md:static md:hidden"
				onClick={displayBurger}
			/>
		</header>
	);
}
