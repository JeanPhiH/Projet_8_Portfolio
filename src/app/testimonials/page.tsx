import { createPost } from "@/actions/createPost";
import MsgList from "@/components/MsgList";
import { Suspense } from "react";
import connectDB from "@/lib/db";
import type { Metadata } from "next";

// METADATA
export const metadata: Metadata = {
	title: "Vos avis sur Jphindev",
	description:
		"Laissez votre avis sur moi si vous m'avez cotoyé professionnellement",
	alternates: {
		canonical: "/testimonials",
	},
	openGraph: {
		title: "Vos avis sur Jphindev",
		description: "Laissez votre avis sur moi si vous m'avez cotoyé professionnellement",
		url: "https://projet-8-portfolio-gamma.vercel.app/testimonials",
	},
};

export default function Testimonials() {
	connectDB();
	return (
		<>
			<section className="flex flex-col items-center">
				<h2>Laissez votre avis</h2>
				<p>Vous m’avez cotoyé professionnellement et ce contact vous a plu ?</p>
				<p className="mb-3">
					Alors dites-le ici et votre message permettra peut-ête de convaincre
					un futur recruteur.
				</p>

				<form
					className="mt-5 sm:w-2/3 lg:w-1/2 p-5 mx-auto flex items-start gap-5 bg-light/25 dark:bg-dark/25 rounded-lg"
					action={createPost}
				>
					<div className="flex flex-col gap-2">
						<label htmlFor="name">Prénom</label>
						<input
							id="name"
							type="text"
							name="name"
							placeholder="Prénom"
							required
							className=""
						/>
						<label htmlFor="lastname">Nom</label>
						<input
							id="lastname"
							type="text"
							name="lastname"
							placeholder="Nom"
							required
							className=""
						/>
						<label htmlFor="linkedin">Lien LinkedIn</label>
						<input
							id="linkedin"
							type="linkedin"
							name="linkedin"
							placeholder="https://www.linkedin.com/"
							required
						/>
					</div>
					<div>
						<label htmlFor="message">Message</label>
						<textarea
							id="message"
							name="message"
							placeholder="Votre message"
							maxLength={5000}
							required
							className="h-52"
						/>
						<button
							type="submit"
							className="bg-light dark:bg-dark dark:text-light rounded-lg text-dark p-1 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
						>
							Envoyer
						</button>
					</div>
				</form>
			</section>
			<section>
				<h2>Vos messages</h2>
				<Suspense fallback="Loading...">
					<MsgList />
				</Suspense>
			</section>
		</>
	);
}
