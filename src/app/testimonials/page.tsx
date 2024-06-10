import { createPost } from "@/actions/createPost";
import MsgList from "@/components/MsgList";
import { Suspense } from "react";
import connectDB from "@/lib/db";
import type { Metadata } from "next";
import TestimonialForm from "@/components/TestimonialForm";

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
		description:
			"Laissez votre avis sur moi si vous m'avez cotoyé professionnellement",
		url: "https://projet-8-portfolio-gamma.vercel.app/testimonials",
	},
};

export default function Testimonials() {
	connectDB();

	return (
		<>
			<section className="">
				<h2>Laissez votre avis</h2>
				<p>Vous m’avez cotoyé professionnellement et ce contact vous a plu ?</p>
				<p className="mb-3">
					Alors dites-le ici et votre message permettra peut-ête de convaincre
					un futur recruteur.
				</p>

				<TestimonialForm />
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
