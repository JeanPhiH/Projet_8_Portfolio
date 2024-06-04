import { createPost } from "@/actions/createPost";
import MsgList from "@/components/MsgList";
import { Suspense } from "react";
import connectDB from "@/lib/db";

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
					className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/25 rounded-lg"
					action={createPost}
				>
					<label htmlFor="name">Nom complet</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Nom"
						required
						className=""
					/>
					<label htmlFor="linkedin">LinkedIn</label>
					<input
						id="linkedin"
						type="linkedin"
						name="linkedin"
						placeholder="LinkedIn"
						required
					/>
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
						className="bg-light rounded-lg text-dark p-1 hover:border-2 border-highlight"
					>
						Envoyer
					</button>
				</form>
			</section>
			<section>
				<h2>Vos messages</h2>
				{/* <Suspense fallback="Loading..."> */}
				
					<MsgList />
				
				{/* </Suspense> */}
			</section>
		</>
	);
}
