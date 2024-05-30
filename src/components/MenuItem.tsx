import Link from "next/link";
import Image from "next/image";

export default function MenuItem({
	title,
	href,
	src,
	size,
}: {
	title: string;
	href: string;
	src: string;
	size: number;
}) {
	return (
		<Link
			key={title}
			href={href}
			className="flex md:flex-col gap-1 md:gap-0 items-center justify-start md:justify-center md:w-20 md:h-20 md:my-2 relative group p-1 md:p-2"
		>
			<div className="rounded-full absolute inset-0 md:shadow-inner md:shadow-light/50 group-hover:shadow-none border-highlight md:group-hover:border-y-2 md:group-hover:animate-spin-quick"></div>
			<Image
				className="text-light relative z-5 "
				src={src}
				alt={title}
				width={size}
				height={size}
			/>
			<span className="">{title}</span>
		</Link>
	);
}
