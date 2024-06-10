import Navbar from "./Navbar";

export default function Header() {

	return (
		<header className="z-50 md:fixed top-0 w-full h-11 md:h-auto z-100 flex bg-dark dark:bg-light/50 justify-between px-4 items-center border-b-2 border-b-light dark:border-b-dark">
			<h1>jphindev</h1>
			<Navbar />
		</header>
	);
}
