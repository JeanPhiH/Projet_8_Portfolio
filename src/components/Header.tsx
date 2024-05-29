"use client"

import MenuItem from "./MenuItem";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Header() {

	// Display burger menu by changing nav style
	const defaultNavStyle = "hidden fixed bg-dark z-10 bg-dark top-9 right-0 md:static md:flex flex-col md:flex-row items-start md:items-center justify-center gap-1 md:gap-2 p-2";
	const [navStyle, setNavStyle] = useState(defaultNavStyle);

	const burgerRef = useRef<HTMLImageElement | null>(null);

	const displayBurger = () => {
		if (navStyle === defaultNavStyle) setNavStyle(defaultNavStyle.replace("hidden", "flex"));
        else setNavStyle(defaultNavStyle);
	}

	const handleClickOutside = (event: MouseEvent) => {
    if (burgerRef.current && 
        !burgerRef.current.contains(event.target as Node)) {
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
		<header className="h-10 md:h-auto z-10 flex bg-dark justify-between px-4 items-center border-b-2 border-b-light">
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
					title="Contact"
					href="/#contact"
					src="/icons/mail.svg"
				/>
				<MenuItem
					title="LinkedIn"
					href="https://www.linkedin.com/in/jp-herfeld/"
					src="/icons/linkedin.svg"
				/>
			</nav>
			<Image ref={burgerRef} src="/icons/burger-menu.svg" alt="Menu Burger" width={34} height={34} className="fixed right-0 top-0 z-10 bg-dark md:static md:hidden" onClick={displayBurger}/>
		</header>
	);
}
