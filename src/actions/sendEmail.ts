"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(
	currentState: { message: string },
	formData: FormData
): Promise<any> {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");
	const regexName =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/;
	const regexMessage =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s.,!?'"()-]*$/;
	const regexMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

	if (
		!name ||
		!email ||
		!message ||
		typeof name !== "string" ||
		typeof email !== "string" ||
		typeof message !== "string"
	) {
		return { message: "Remplissez correctement tous les champs" };
	}
	if (!regexName.test(name as string)) {
		return {
			message:
				"Champs de texte: lettres, accents, espaces ou tirets acceptés. Pas de chiffres !",
		};
	}
	if (!regexMessage.test(message as string)) {
		return {
			message:
				"Champs de texte: lettres, accents, espaces, chiffres ou tirets acceptés.",
		};
	}
	if (!regexMail.test(email as string)) {
		return {
			message: "Adresse mail non valide.",
		};
	}

	try {
		const { data, error } = await resend.emails.send({
			from: "Portfolio Contact Form <onboarding@resend.dev>",
			to: ["jp.herfeld@gmail.com"],
			reply_to: email,
			subject: "Message de " + name,
			text: message,
		});

		if (error) {
			return error;
		}
		formData.set("name", "");
		formData.set("email", "");
		formData.set("message", "");
		return {
			message: "Merci pour votre message, je vous répondrais dès que possible.",
		};
	} catch (error) {
		return error;
	}
}
