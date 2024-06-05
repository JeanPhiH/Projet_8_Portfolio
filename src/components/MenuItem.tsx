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
			className="flex flex-col items-center justify-center w-16 h-16  relative group p-1 md:p-2"
		>
			<div className="rounded-full absolute inset-0 shadow-inner shadow-light/50 dark:shadow-dark/50 group-hover:shadow-none border-highlight dark:border-light md:group-hover:border-y-4 md:group-hover:animate-spin bg-light/10 dark:bg-dark/75"></div>
			<Image
				className="relative z-5"
				src={src}
				alt={`Lien vers ${title}`}
				width={size}
				height={size}
			/>
			<span className="z-10 text-sm dark:text-light">{title}</span>
		</Link>
	);
}
