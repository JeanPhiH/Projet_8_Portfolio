"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const name = formData.get("name");
	const email = formData.get("email");
	const message = formData.get("message");

	if (
		!name ||
		!email ||
		!message ||
		typeof name !== "string" ||
		typeof email !== "string" ||
		typeof message !== "string"
	) {
		throw new Error("Missing fields");
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

		return data;
	} catch (error) {
		return error;
	}
};
