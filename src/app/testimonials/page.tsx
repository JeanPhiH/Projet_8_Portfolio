"use client" 
import { useState } from "react";
import {createPost} from "@/actions/createPost";

export default function Testimonials() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section className="flex flex-col items-center">
			<h2>Laissez votre avis</h2>
			<p>Vous m’avez cotoyé professionnellement et ce contact vous a plu ?</p>
			<p className="mb-3">
				Alors dites-le ici et votre message permettra peut-ête de convaincre un futur recruteur.
			</p>
			{submitted ? (
				<div className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/25 rounded-lg">
					<p className="w-full p-2 bg-dark text-light rounded-lg text-center">
						Merci pour votre message !
						<br />
						Il sera affiché après validation de ma part.
					</p>
				</div>
			) : (
				<form
					className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/25 rounded-lg"
					action={async (formData) => {
						await createPost(formData);
						setSubmitted(true);
					}}
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
			)}
		</section>
	);
}
