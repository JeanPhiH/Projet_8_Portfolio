"use server";

import Post from "@/models/post";
import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";

export async function createPost(
	currentState: { error: string },
	formData: FormData
): Promise<any> {
	await connectDB();

	const name = formData.get("name");
	const lastname = formData.get("lastname");
	const postdate = new Date();
	const linkedin = formData.get("linkedin");
	const message = formData.get("message");
	const regexName =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/;
	const regexLinkedin = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/;
	const regexMessage =
		/^[a-zA-Z0-9àáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s.,:&#!?'"’^°=+€$£@%*()\/\[\]_-]*$/;

	if (!name || !lastname || !linkedin || !message) {
		return { error: "Remplissez tous les champs" };
	}
	if (!regexName.test(name as string) || !regexName.test(lastname as string)) {
		return {
			error: "Nom: lettres, accents, espaces ou tirets acceptés.",
		};
	}
	if (!regexMessage.test(message as string)) {
		return {
			error: "Le message n'est pas au bon format, < et > ne sont pas acceptés",
		};
	}
	if (!regexLinkedin.test(linkedin as string)) {
		return { error: "Le lien LinkedIn n'est pas au bon format" };
	}

	try {
		const newPost = new Post({
			name,
			lastname,
			postdate,
			linkedin,
			message,
		});

		newPost.save();

		revalidatePath("/testimonials");
	} catch (error) {
		console.log(error);
		return { error: "error creating testimonial" };
	}
}
