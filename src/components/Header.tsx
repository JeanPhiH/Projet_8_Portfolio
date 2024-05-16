import Navbar from "./Navbar";

export default function Header() {
	return (
		<header className="flex justify-between px-4 items-center border-b-2 border-b-highlight">
			<h1 className="text-xl font-bold">JeanPhiH’s Portfolio</h1>

			<Navbar />

		</header>
	);
}