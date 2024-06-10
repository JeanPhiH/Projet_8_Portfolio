"use client";

import { createPost } from "@/actions/createPost";
import { useFormState } from "react-dom";

export default function TestimonialForm() {
	const initialState = {
		message: "",
	};
	const [formState, formAction] = useFormState(createPost, initialState);
	return (
		<form
			className="mt-5 sm:w-2/3 lg:w-1/2 p-5 mx-auto flex items-start gap-5 bg-light/25 dark:bg-dark/25 rounded-lg"
			action={formAction}
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
			{formState?.message && <p>{formState.message}</p>}
			</div>
		</form>
	);
}
