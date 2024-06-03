import Image from "next/image";
import MenuItem from "./MenuItem";

export default function Technos() {
	return (
		<section className="max-w-none bg-[url('/photos/space.webp')] bg-fixed p-10 md:rounded-xl flex flex-col justify-center items-center md:mx-auto shadow-light/50">
			<h2 className="text-highlight">Portfolio réalisé avec</h2>
			<div className="relative flex justify-center items-center h-96 w-full">
				<div className="absolute animate-orbitxn">
					<Image
						className="lg:w-10 animate-selfrotate"
						src="/icons/nextjs-stroke.svg"
						alt="Logo NextJS"
						width={30}
						height={30}
					/>
				</div>

				<div className="absolute animate-orbityn">
					<Image
						className="lg:w-10 animate-selfrotate"
						src="/icons/typescript-icon.svg"
						alt="Logo TypeScript"
						width={30}
						height={30}
					/>
				</div>

				<div className="absolute animate-orbitxp">
					<Image
						className="lg:w-10 animate-selfrotate"
						src="/icons/tailwind-css.svg"
						alt="Logo TailwindCSS"
						width={30}
						height={30}
					/>
				</div>
				<div className="absolute animate-orbityp">
					<Image
						className="lg:w-10 animate-selfrotate"
						src="/icons/mongodb-icon.svg"
						alt="Logo MongoDB"
						width={30}
						height={30}
					/>
				</div>
				<div className="absolute z-10">
					<svg className=" rounded-full  w-[240px] h-[240px] -rotate-[30deg]">
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
				<div className="flex justify-center items-center absolute z-10 rounded-full bg-dark h-16 w-16">
					<MenuItem
						title="Github"
						href="https://github.com/JeanPhiH/Projet_8_Portfolio"
						target="_blank"
						src="/icons/github.svg"
						size={24}
					/>
				</div>
			</div>
		</section>
	);
}
