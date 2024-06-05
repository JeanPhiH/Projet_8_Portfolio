import type { Metadata } from "next";
import { ubuntu, ubuntu_mono, galindo } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";

// METADATA
export const metadata: Metadata = {
  title: "JeanPhiH's Portfolio",
  description: "The Portfolio of JeanPhiH, a web developper in NextJS, Typescript and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.variable} ${ubuntu_mono.variable} ${galindo.variable}`}>
      <body className="h-screen mx-auto font-ubuntu text-light bg-dark dark:text-dark dark:bg-light">
				<Header />
					<main>
						{children}
					</main>
			</body>
    </html>
  );
}
