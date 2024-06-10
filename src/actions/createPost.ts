"use server";

import Post from "@/models/post";
import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";

export async function createPost(
	currentState: { message: string },
	formData: FormData
) {
	await connectDB();

	const name = formData.get("name");
	const lastname = formData.get("lastname");
	const linkedin = formData.get("linkedin");
	const message = formData.get("message");
	const regexName =
		/^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/;
	const regexLinkedin = /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/;

	if (!name || !lastname || !linkedin || !message) {
		return { message: "Remplissez tous les champs" };
	}
	if (!regexName.test(name as string) || !regexName.test(lastname as string)) {
		return { message: "Nom et Prénom: lettres, accents, espaces ou tirets." };
	}
	if (!regexLinkedin.test(linkedin as string)) {
		return { message: "Le lien LinkedIn n'est pas au bon format" };
	}

	try {
		const newPost = new Post({
			name,
			lastname,
			linkedin,
			message,
		});

		newPost.save();
		revalidatePath("/testimonials");

		return newPost.toString();
	} catch (error) {
		console.log(error);
		return { message: "error creating testimonial" };
	}
}
