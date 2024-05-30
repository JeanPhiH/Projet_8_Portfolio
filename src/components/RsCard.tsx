import Image from "next/image";
import Link from "next/link";

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
		<div className="flex flex-col gap-2 items-center justify-between p-3 border-2 border-light w-52 h-96 rounded-t-full rounded-b-full hover:shadow-lg hover:shadow-light/50">
			<Image src={RsIcon} alt={RsName} width={24} height={24} />
			<h3>{RsName}</h3>
			<Image className="object-cover object-top min-h-36 max-h-36" src={RsPic} alt={RsName} width={175} height={150} />
			<p className="text-center h-40">{RsNote}</p>
			<div className="flex gap-3">
				<Link href={RsLink} target="_blank">
					<Image
						src="/icons/websitefilled.svg"
						alt={RsName}
						width={24}
						height={24}
					/>
				</Link>
				<Link href={RsLinkYT} target="_blank">
					<Image
						src="/icons/youtube.svg"
						alt={RsName}
						width={24}
						height={24}
					/>
				</Link>
			</div>
		</div>
	);
}
