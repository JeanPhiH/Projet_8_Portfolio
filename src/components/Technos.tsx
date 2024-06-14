import Image from "next/image";
import MenuItem from "./MenuItem";

export default function Technos() {
	return (
		<section
			id="home"
			className="max-w-none bg-[url('/photos/space.webp')] mt-0 md:mt-32 bg-fixed p-10 pt-24 flex flex-col justify-center items-center md:mx-auto"
		>
			<h2>Portfolio réalisé avec</h2>
			<div className="relative flex justify-center items-center h-96 w-full">
				<div className="absolute animate-orbitxn">
					<Image
						className="w-10 animate-selfrotate"
						src="/icons/nextjs-stroke.svg"
						alt="Logo NextJS"
						width={40}
						height={40}
					/>
				</div>

				<div className="absolute animate-orbityn">
					<Image
						className="w-10 animate-selfrotate"
						src="/icons/typescript-icon.svg"
						alt="Logo TypeScript"
						width={40}
						height={40}
					/>
				</div>

				<div className="absolute animate-orbitxp">
					<Image
						className="w-10 animate-selfrotate"
						src="/icons/tailwind-css.svg"
						alt="Logo TailwindCSS"
						width={40}
						height={27}
					/>
				</div>
				<div className="absolute animate-orbityp">
					<Image
						className="w-10 animate-selfrotate"
						src="/icons/mongodb-icon.svg"
						alt="Logo MongoDB"
						width={40}
						height={40}
					/>
				</div>
				<div className="absolute">
					<svg className="rounded-full  w-[240px] h-[240px] -rotate-[40deg]">
						<defs>
							<path
								id="circle"
								d="
							M 20, 120
							a 30,30 0 1,1 200,0
							a 25,25 0 1,1 -200,0
							"
							/>
						</defs>
						<text fill="#ffe5cc">
							<textPath xlinkHref="#circle">
								NextJS 14 __ TypeScript 5 __ TailwindCSS 3 __ MongoDB 4
							</textPath>
						</text>
					</svg>
				</div>
				<div className="flex justify-center">
					<MenuItem
						title="Github"
						href="https://github.com/JeanPhiH/Projet_8_Portfolio"
						target="_blank"
						src="/icons/github.svg"
						width={24}
						height={24}
					/>
				</div>
			</div>
		</section>
	);
}
