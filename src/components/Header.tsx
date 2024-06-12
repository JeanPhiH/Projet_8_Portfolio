import Navbar from "./Navbar";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="max-w-screen-xl lg:left-[50%] lg:-translate-x-[50%] flex justify-between items-center z-50 md:fixed top-0 w-full h-11 md:h-auto  bg-dark dark:bg-light px-4 border-b-2 border-b-light dark:border-b-dark">
				<div className="flex gap-5">
					<Image
						src="/icons/logoJP.webp"
						alt="logo dde chargement"
						width={32}
						height={32}
						className="w-8 h-8"
					/>
					<h1>
						<Link href="/">jphindev</Link>
					</h1>
				</div>
				<Navbar />
		</header>
	);
}
