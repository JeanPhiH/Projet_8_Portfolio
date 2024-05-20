import type { Metadata } from "next";
import { ubuntu, ubuntu_mono } from "@/app/ui/fonts";
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
    <html lang="en" className={`${ubuntu.variable} ${ubuntu_mono.variable}`}>
      <body className="h-screen">
				<Header />
					<main>
						{children}
					</main>
			</body>
    </html>
  );
}
