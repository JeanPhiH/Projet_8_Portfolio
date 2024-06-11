"use client";

import { useFormStatus } from "react-dom";

export default function FormButton() {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			disabled={pending}
			className="bg-light dark:bg-dark dark:text-light rounded-lg text-dark p-1 hover:bg-dark hover:text-light dark:hover:bg-light dark:hover:text-dark"
		>
			{pending ? "Envoi..." : "Envoyer"}
		</button>
	);
}
