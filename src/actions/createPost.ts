"use server";

import Post from "@/models/post";
import connectDB from "@/lib/db";

export async function createPost(formData: FormData) {
	const name = formData.get("name")?.toString();
	const linkedin = formData.get("linkedin")?.toString();
	const message = formData.get("message")?.toString();

	// await connectDB();

	if (!name || !message) {
		throw new Error("Missing fields");
	}

	const newPost = new Post({
		name,
		linkedin,
		message,
	});

	return newPost.save();
}

// 'use server'

// import Post from '@/models/Post'

// const addPost = async post => {
// 	const title = post.get('title')
// 	const description = post.get('description')

// 	const newPost = new Post({ title, description })
// 	return newPost.save()
// }

// const getPosts = async () => {
// 	return Post.find()
// }

// export { addPost, getPosts }
