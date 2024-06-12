import Navbar from "./Navbar";
import Image from "next/image";

export default function Header() {
	return (
		<header className="z-50 md:fixed top-0 w-full h-11 md:h-auto z-100 flex bg-dark dark:bg-light justify-between px-4 items-center border-b-2 border-b-light dark:border-b-dark">
			<div className="flex gap-5">
				<Image
					src="/icons/logoJP.png"
					alt="logo dde chargement"
					width={32}
					height={32}
					className="w-8 h-8"
				/>
				<h1>jphindev</h1>
			</div>
			<Navbar />
		</header>
	);
}
