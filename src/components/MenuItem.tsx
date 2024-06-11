import Link from "next/link";
import Image from "next/image";

export default function MenuItem({
	title,
	href,
	src,
	width,
	height,
	target,
}: {
	title: string;
	href: string;
	src: string;
	width: number;
	height: number;
	target: string;
}) {
	return (
		<Link
			key={title}
			href={href}
			target={target}
			className="flex flex-col items-center justify-center w-[72px] h-[72px]  relative group  md:p-2"
		>
			<div className="rounded-full absolute inset-0 shadow-inner shadow-light group-hover:shadow-none border-highlight dark:border-light md:group-hover:border-y-4 md:group-hover:animate-spin bg-dark bg-gradient-to-br from-light/15 to-dark"></div>
			<Image
				className="relative"
				src={src}
				alt={`Lien vers ${title}`}
				width={width}
				height={height}
			/>
			<p className="z-10 text-sm dark:text-light">{title}</p>
		</Link>
	);
}
