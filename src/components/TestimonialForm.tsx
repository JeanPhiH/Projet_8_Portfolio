"use client";

import { createPost } from "@/actions/createPost";
import { useFormState, useFormStatus } from "react-dom";
import FormButton from "./FormButton";

export default function TestimonialForm() {
	const initialState = {
		message: "",
		error: "",
	};
	const [formState, formAction] = useFormState(createPost, initialState);

	return (
		<>
			<form
				className="mt-5 sm:w-2/3 lg:w-1/2 p-5 mx-auto flex flex-col md:flex-row md:items-start gap-5 rounded-3xl border-8 border-double border-highlight dark:border-highdark"
				action={formAction}
			>
				<div className="flex flex-col gap-2">
					<label htmlFor="name">Prénom</label>
					<input
						id="name"
						type="text"
						name="name"
						placeholder="Jane"
						required
						className="shadow-inner shadow-light dark:shadow-dark dark:bg-transparent"
					/>
					<label htmlFor="lastname">Nom</label>
					<input
						id="lastname"
						type="text"
						name="lastname"
						placeholder="Doe"
						required
						className="shadow-inner shadow-light dark:shadow-dark dark:bg-transparent"
					/>
					<label htmlFor="linkedin">Lien LinkedIn</label>
					<input
						id="linkedin"
						type="linkedin"
						name="linkedin"
						placeholder="https://www.linkedin.com/..."
						required
						className="shadow-inner shadow-light dark:shadow-dark dark:bg-transparent"
					/>
				</div>
				{formState?.error && (
					<p className="text-center bg-[#f00]">{formState.error}</p>
				)}
				<div>
					<label htmlFor="message">Message</label>
					<textarea
						id="message"
						name="message"
						placeholder="J'ai connu Jean-Philippe..."
						maxLength={5000}
						required
						className="h-52 shadow-inner shadow-light dark:shadow-dark dark:bg-transparent"
					/>
					<FormButton />
				</div>
			</form>
			{formState?.msg && <p className="text-center">{formState.msg}</p>}
		</>
	);
}
