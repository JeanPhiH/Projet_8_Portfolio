import type { Metadata } from "next";
import { ubuntu, ubuntu_mono, galindo } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";

// METADATA
export const metadata: Metadata = {
	title: "Jphindev’s Portfolio",
	description:
		"Portfolio de Jphindev aka Jean-Philippe Herfeld, dévelopeur web NextJS, React, Typescript et TailwindCSS",
	keywords: [
		"portfolio",
		"jphindev",
		"developeur web",
		"next.js",
		"react.js",
		"typescript",
		"tailwindcss",
	],
	creator: "Jphindev",
	metadataBase: new URL("https://projet-8-portfolio-gamma.vercel.app/"),
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Jphindev’s portfolio",
		description:
			"Portfolio de Jphindev aka Jean-Philippe Herfeld, dévelopeur web NextJS, React, Typescript et TailwindCSS",
		url: "https://projet-8-portfolio-gamma.vercel.app/", // here full URL needed.
		type: "website",
		siteName: "Jphindev’s portfolio",
		images: [
			{
				url: "/photos/jphindevOG.webp",
				width: 1280,
				height: 720,
				alt: "jphindev’s preview",
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="fr"
			className={`${ubuntu.variable} ${ubuntu_mono.variable} ${galindo.variable}`}
		>
			<body className="h-screen mx-auto font-ubuntu text-lg text-light bg-dark dark:text-dark dark:bg-light">
				<div className="bg-light/25 dark:bg-highdark/25 absolute top-[50rem] -z-10 right-[-11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] "></div>
				<div className="bg-light/25 dark:bg-highdark/25 absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem]"></div>

				<Header />
				<main className="pb-40">{children}</main>
			</body>
		</html>
	);
}
