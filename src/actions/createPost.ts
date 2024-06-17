"use server";

import Post from "@/models/post";
import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";

export async function createPost(
	currentState: { msg: string; error: string },
	formData: FormData
): Promise<any> {
	await connectDB();

	const name = formData.get("name");
	const lastname = formData.get("lastname");
	const linkedin = formData.get("linkedin");
	const message = formData.get("message");
	const regexName =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/;
	const regexLinkedin = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/;
	const regexMessage =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s.,!?'"()-]*$/;

	if (!name || !lastname || !linkedin || !message) {
		return { error: "Remplissez tous les champs" };
	}
	if (!regexName.test(name as string) || !regexName.test(lastname as string)) {
		return {
			error: "Champs de texte: lettres, accents, espaces ou tirets acceptés.",
		};
	}
	if (!regexMessage.test(message as string)) {
		return { error: "Le message n'est pas au bon format" };
	}
	if (!regexLinkedin.test(linkedin as string)) {
		return { error: "Le lien LinkedIn n'est pas au bon format" };
	}

	try {
		const newPost = new Post({
			name,
			lastname,
			linkedin,
			message,
		});

		newPost.save();
		formData.set("name", "");
		formData.set("lastname", "");
		formData.set("linkedin", "");
		formData.set("message", "");
		revalidatePath("/testimonials");

		return {
			msg: "Merci pour votre message",
		};
		// newPost.toString();
	} catch (error) {
		console.log(error);
		return { error: "error creating testimonial" };
	}
}
