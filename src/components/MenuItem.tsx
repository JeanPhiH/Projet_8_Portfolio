import Link from "next/link";
import Image from "next/image";

export default function MenuItem({
	title,
	href,
	src,
	size,
	target,
}: {
	title: string;
	href: string;
	src: string;
	size: number;
	target: string;
}) {
	return (
		<Link
			key={title}
			href={href}
			target={target}
			className="flex flex-col items-center justify-center w-20 h-20 md:my-2 relative group p-1 md:p-2"
		>
			<div className="rounded-full absolute inset-0 shadow-inner shadow-light/50 group-hover:shadow-none border-highlight md:group-hover:border-y-2 md:group-hover:animate-spin bg-highlight/10"></div>
			<Image
				className="text-light relative z-5"
				src={src}
				alt={title}
				width={size}
				height={size}
			/>
			<span className="">{title}</span>
		</Link>
	);
}
