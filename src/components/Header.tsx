import NavbarLink from './NavbarLink';

export default function Header() {
	return (
		<header className="flex justify-between px-4 items-center border-b-2 border-b-light">
			<h1 className="md:text-2xl font-bold">JeanPhiH’s Portfolio</h1>
			<nav className="flex flex-row items-center justify-center gap-1 md:gap-2 p-2">
				<NavbarLink />
			</nav>
		</header>
	);
}