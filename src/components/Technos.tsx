import Image from 'next/image';

export default function Technos() {
	return (
		<section className="mt-32 flex flex-col items-center md:w-2/3 md:mx-auto">
			<h2 className="text-highlight">Portfolio réalisé avec</h2>
			<div className="my-10 flex flex-row gap-4 md:gap-6">
				<Image className="relative top-24 right-20 lg:w-14" src="/icons/nextjs-stroke.svg" alt="NextJS" width={50} height={50} />
				<Image className="relative top-6 right-12 lg:w-14" src="/icons/typescript-icon.svg" alt="TypeScript" width={50} height={50} />
				<Image className="relative top-7 left-8 lg:w-14" src="/icons/tailwind-css.svg" alt="TailwindCSS" width={50} height={50} />
				<Image className="relative top-24 left-20 lg:w-14" src="/icons/mongodb-icon.svg" alt="MongoDB" width={50} height={50} />
			</div>
			<svg className="w-[450px]" viewBox="0 30 500 125">
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