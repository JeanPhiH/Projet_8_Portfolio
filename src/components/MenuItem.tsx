import Link from "next/link";
import Image from "next/image";

export default function MenuItem({
	title,
	href,
	src,
}: {
	title: string;
	href: string;
	src: string;
}) {
	return (
		<Link
			key={title}
			href={href}
			className="flex md:flex-col gap-1 md:gap-0 items-center justify-start md:justify-center md:w-20 md:h-20 relative group p-2"
		>
			<div className="rounded-full absolute inset-0 border-highlight md:group-hover:border-t-2 md:group-hover:animate-spin-quick"></div>
			<Image
				className="text-light relative z-10 w-10 h-10 md:w-6 md:h-6"
				src={src}
				alt={title}
				width={24}
				height={24}
			/>
			<span className="">{title}</span>
		</Link>
	);
}
