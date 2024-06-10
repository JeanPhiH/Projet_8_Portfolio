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
			className="flex flex-col items-center justify-center w-[72px] h-[72px]  relative group  md:p-2"
		>
			<div className="rounded-full absolute inset-0 shadow-inner shadow-light group-hover:shadow-none border-highlight dark:border-light md:group-hover:border-y-4 md:group-hover:animate-spin bg-dark"></div>
			<Image
				className="relative"
				src={src}
				alt={`Lien vers ${title}`}
				width={size}
				height={size}
			/>
			<p className="z-10 text-sm dark:text-light">{title}</p>
		</Link>
	);
}
