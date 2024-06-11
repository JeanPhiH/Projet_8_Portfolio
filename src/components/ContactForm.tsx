"use client";

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { useFormState } from "react-dom";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const initialState = {
		message: "",
	};
	const [formState, formAction] = useFormState(sendEmail, initialState);

	return (
		<>
			<form
				className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto h-[504px] mb-5 flex flex-col items-center gap-2 bg-gradient-to-br from-light/30 to-dark/30 dark:from-dark dark:to-dark/30 rounded-lg"
				action={formAction}
			>
				<label htmlFor="name">Nom</label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="Chuck Norris"
					required
					className="italic"
				/>
				<label htmlFor="email">Email</label>
				<input
					id="email"
					type="email"
					name="email"
					placeholder="email@domain.com"
					required
					className="italic"
				/>
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Bonjour, ..."
					maxLength={5000}
					required
					className="h-52 italic"
				/>
				<button
					type="submit"
					className="bg-light dark:bg-dark dark:text-light rounded-lg text-dark p-1 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
				>
					Envoyer
				</button>
			</form>
			{formState?.message && <p className="text-center">{formState.message}</p>}
		</>
	);
}
