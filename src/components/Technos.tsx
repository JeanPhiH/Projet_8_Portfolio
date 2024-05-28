import Image from 'next/image';

export default function Technos() {
	return (
		<section className="p-10 md:rounded-xl md:shadow-lg shadow-light/50 bg-light/15 flex flex-col items-center md:w-2/3 md:mx-auto">
			<h2 className="text-highlight">Portfolio réalisé avec</h2>
			<div className="h-28 lg:h-36">
				<Image className="relative top-28 right-28 lg:w-14 lg:top-36 lg:right-48" src="/icons/nextjs-stroke.svg" alt="NextJS" width={30} height={30} />
				<Image className="relative top-10 right-12 lg:w-14 lg:top-5 lg:right-20" src="/icons/typescript-icon.svg" alt="TypeScript" width={30} height={30} />
				<Image className="relative top-5 left-10 lg:w-14 lg:-top-6 lg:left-20" src="/icons/tailwind-css.svg" alt="TailwindCSS" width={30} height={30} />
				<Image className="relative top-8 left-28 lg:w-14 lg:-top-2 lg:left-48" src="/icons/mongodb-icon.svg" alt="MongoDB" width={30} height={30} />
			</div>
			<svg className="w-[300px] lg:w-[500px]" viewBox="0 30 500 125">
				<defs>
					<path id="curve" fill="#ffe5cc" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
				</defs>
				<text fill="#ffe5cc">
					<textPath xlinkHref="#curve">
						NextJS 14 __ TypeScript 5 __ TailwindCSS 3 __ MongoDB 4
					</textPath>
				</text>
			</svg>
		</section>
	)
}