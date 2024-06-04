"use server"

export async function createPost(formData: FormData) {
	const name = formData.get("name")?.toString();
	const linkedin = formData.get("linkedin")?.toString();
	const message = formData.get("message")?.toString();
}