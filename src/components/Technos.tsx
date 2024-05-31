import Image from "next/image";

export default function Technos() {
	return (
		<section className="p-10 md:rounded-xl bg-light/15 flex flex-col items-center md:w-2/3 md:mx-auto shadow-lg shadow-light/50">
			<h2 className="text-highlight">Portfolio réalisé avec</h2>
			<div className="relative flex justify-center items-center h-96 w-full">

				<div className="absolute z10 h-16 w-16  bg-light rounded-full"></div>

				<div className="absolute z-5 animate-[orbit_20s_6s_linear_infinite]">
					<Image
						className=" lg:w-14 animate-[selfrotate_20s_6s_linear_infinite]"
						src="/icons/nextjs-stroke.svg"
						alt="NextJS"
						width={30}
						height={30}
					/>
				</div>

				<div className="absolute z-5 animate-[orbit_20s_4s_linear_infinite]">
					<Image
						className="lg:w-14 animate-[selfrotate_20s_4s_linear_infinite]"
						src="/icons/typescript-icon.svg"
						alt="TypeScript"
						width={30}
						height={30}
					/>
				</div>
				
				<div className="absolute z-5 animate-[orbit_20s_2s_linear_infinite]">
					<Image
						className="lg:w-14 animate-[selfrotate_20s_2s_linear_infinite]"
						src="/icons/tailwind-css.svg"
						alt="TailwindCSS"
						width={30}
						height={30}
					/>
				</div>
				<div className="absolute z-5 animate-orbit">
					<Image
						className="lg:w-14 animate-selfrotate"
						src="/icons/mongodb-icon.svg"
						alt="MongoDB"
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
			</div>
		</section>
	);
}
