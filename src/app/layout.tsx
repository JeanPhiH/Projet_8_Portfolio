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
	metadataBase: new URL('https://projet-8-portfolio-gamma.vercel.app/'),
	alternates: {
    canonical: '/',
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
			<body className="h-screen mx-auto font-ubuntu text-lg text-light bg-dark dark:text-dark dark:bg-light/50">
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
