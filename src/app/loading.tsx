import Image from "next/image";

export default function Loading() {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<Image src="/icons/logoJP.png" alt="chargement" width={50} height={50} className="animate-madspin" />
		</div>

	);
}
