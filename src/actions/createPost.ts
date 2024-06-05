"use server";

import Post from "@/models/post";
import { revalidatePath } from "next/cache";
import connectDB from "@/lib/db";

export async function createPost(formData: FormData) {
	await connectDB();

	const name = formData.get("name");
	const lastname = formData.get("lastname");
	const linkedin = formData.get("linkedin");
	const message = formData.get("message");


	if (!name || !lastname || !linkedin || !message) {
		throw new Error("Missing fields");
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
		return {message: 'error creating testimonial'};
	}
}

