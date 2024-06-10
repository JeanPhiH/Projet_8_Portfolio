import Link from "next/link";
import MenuItem from "@/components/MenuItem";

export default function NotFound() {
	return (
		<section className="flex flex-col items-center">
			<h3>La page recherchée n’existe pas</h3>
			<MenuItem
				title="Accueil"
				href="/"
				target="_self"
				src="/icons/home.svg"
				width={24}
				height={24}
			/>
		</section>
	);
}
