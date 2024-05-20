import NavbarLink from './NavbarLink';

export default function Header() {
	return (
		<header className="flex justify-between px-4 items-center border-b-2 border-b-light">
			<h1 className="text-lg md:text-xl font-bold">JeanPhiH’s Portfolio</h1>
			<nav className="flex flex-row items-center justify-center gap-1 md:gap-5 p-2">
				<NavbarLink />
			</nav>
		</header>
	);
}