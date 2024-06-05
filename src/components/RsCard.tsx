import Image from "next/image";
import MenuItem from "./MenuItem";

export default function RsCard({
	RsName,
	RsIcon,
	RsPic,
	RsLink,
	RsLinkYT,
	RsNote,
}: {
	RsName: string;
	RsIcon: string;
	RsPic: string;
	RsLink: string;
	RsLinkYT: string;
	RsNote: string;
}) {
	return (
		<div className="flex flex-col gap-2 items-center justify-between px-3 py-5 border-2 border-light dark:border-dark w-52 h-[465px] rounded-t-full rounded-b-full hover:shadow-lg hover:shadow-light/50 dark:hover:shadow-dark/50">
			<Image src={RsIcon} alt={`logo ${RsName}`} width={24} height={24} />
			<h3>{RsName}</h3>
			<Image
				className="object-cover object-top min-h-36 max-h-36"
				src={RsPic}
				alt={`image ${RsName}`}
				width={175}
				height={150}
			/>
			<p className="text-center h-40">{RsNote}</p>
			<div className="flex gap-3">
				<MenuItem
					title="Site"
					href={RsLink}
					target="_blank"
					src="/icons/websitefilled.svg"
					size={24}
				/>
				<MenuItem
					title="Youtube"
					href={RsLinkYT}
					target="_blank"
					src="/icons/youtube.svg"
					size={24}
				/>
			</div>
		</div>
	);
}
