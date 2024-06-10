"use client"

import { useState } from "react";
import { sendEmail } from "@/actions/sendEmail";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<>

	{submitted ? (
		<div className="mt-5 mb-5 h-[504px] sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col justify-center items-center gap-2 bg-gradient-to-br from-light/30 to-dark/30 dark:from-dark dark:to-dark/30 rounded-lg">
			<p className="w-full p-2 bg-dark dark:bg-light text-light dark:text-dark rounded-lg text-center">
				Merci, votre message a été envoyé !
				<br />
				Je vous répondrais dès que possible.
			</p>
		</div>
	) : (
		<form
			className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto h-[504px] mb-5 flex flex-col items-center gap-2 bg-gradient-to-br from-light/30 to-dark/30 dark:from-dark dark:to-dark/30 rounded-lg"
			action={async (formData) => {
				await sendEmail(formData);
				setSubmitted(true);
			}}
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
	)}
		</>
	);
}