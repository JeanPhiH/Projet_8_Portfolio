"use client";

import { sendEmail } from "@/actions/sendEmail";
import { useState } from "react";
import MenuItem from "./MenuItem";

export default function Contact() {
	const [submitted, setSubmitted] = useState(false);

	return (
		<section id="contact" className="flex flex-col items-center">
			<h2>Contact</h2>
			<p>Mes compétences vous intéressent et vous souhaitez me contacter ?</p>
			<p>
				Vous pouvez le faire avec le formulaire ci-dessous, ou via via ma page
				LinkedIn.
			</p>
			<MenuItem
				title="LinkedIn"
				href="https://www.linkedin.com/in/jp-herfeld/"
				src="/icons/linkedin.svg"
				size={24}
			/>
			{submitted ? (
				<div className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/25 rounded-lg">
					<p className="w-full p-2 bg-dark text-light rounded-lg text-center">
						Merci, votre message a été envoyé !
						<br />
						Je vous répondrais dès que possible.
					</p>
				</div>
			) : (
				<form
					className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto flex flex-col items-center gap-2 bg-light/25 rounded-lg"
					action={async (formData) => {
						await sendEmail(formData);
						setSubmitted(true);
					}}
				>
					<label htmlFor="name">Nom</label>
					<input
						type="text"
						name="name"
						placeholder="Nom"
						required
						className=""
					/>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" placeholder="Email" required />
					<label htmlFor="message">Message</label>
					<textarea
						name="message"
						placeholder="Message"
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
