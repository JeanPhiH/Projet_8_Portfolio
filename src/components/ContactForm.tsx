"use client";

import { useState, useRef } from "react";
import { sendEmail } from "@/actions/sendEmail";
import { useFormState } from "react-dom";
import FormButton from "./FormButton";

export default function ContactForm() {
	const [submitted, setSubmitted] = useState(false);
	const initialState = {
		msg: "",
		error: "",
	};
	const [formState, formAction] = useFormState(sendEmail, initialState);
	const formRef = useRef<HTMLFormElement>(null);
	if (formRef.current && formState.msg) {
		formRef.current.reset();
	}

	return (
		<>
			<form
				className="mt-5 sm:w-2/3 md:w-1/2 lg:w-1/3 p-5 mx-auto  mb-5 flex flex-col items-center gap-2 bg-gradient-to-br from-light/15 to-dark dark:from-dark/15 dark:to-light rounded-3xl shadow-inner shadow-light dark:shadow-dark/50 dark:shadow-lg"
				action={formAction}
				ref={formRef}
			>
				<label htmlFor="name">Nom complet</label>
				<input
					id="name"
					type="text"
					name="name"
					placeholder="John Doe"
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
				{formState?.error && (
					<p className="text-center w-72 bg-[#f00]">{formState.error}</p>
				)}
				<label htmlFor="message">Message</label>
				<textarea
					id="message"
					name="message"
					placeholder="Bonjour, ..."
					maxLength={5000}
					required
					className="h-52 italic"
				/>
				<FormButton />
				{formState?.msg && (
					<p className="text-center mt-2 w-72 text-highlight dark:text-highdark font-bold">
						{formState.msg}
					</p>
				)}
			</form>
		</>
	);
}
