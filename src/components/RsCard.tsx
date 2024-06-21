import Image from "next/image";
import MenuItem from "./MenuItem";

export default function RsCard({
	RsName,
	RsIcon,
	RsPic,
	RsLink,
	RsNote,
}: {
	RsName: string;
	RsIcon: string;
	RsPic: string;
	RsLink: string;
	RsNote: string;
}) {
	return (
		<div className="flex flex-col gap-2 items-center justify-between px-3 py-5 w-60 h-[465px] rounded-t-full rounded-b-full hover:shadow-lg hover:shadow-light/50 dark:hover:shadow-dark shadow-inner shadow-light dark:shadow-lg dark:shadow-dark/50  bg-gradient-to-br from-light/15 to-dark dark:from-dark/15 dark:to-light lg:hover:translate-y-3 duration-500">
			<Image src={RsIcon} alt={`logo ${RsName}`} width={30} height={30} />
			<h3>{RsName}</h3>
			<Image
				className="object-cover object-top min-h-36 max-h-36"
				src={RsPic}
				alt={`image ${RsName}`}
				width={200}
				height={144}
			/>
			<p className="text-center h-40">{RsNote}</p>
			<div className="">
				<MenuItem
					title="Site"
					href={RsLink}
					target="_blank"
					src="/icons/websitefilled.svg"
					width={24}
					height={24}
				/>
			</div>
		</div>
	);
}
