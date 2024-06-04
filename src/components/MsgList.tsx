import Post from "@/models/post";
import Link from "next/link";
import MenuItem from "./MenuItem";

export default async function MsgList() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const posts = await Post.find();

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
			{posts.map((post) => (
				<div key={post.id} className="p-3 border-2 border-double border-light rounde-lg flex gap-5">
					<div className="flex flex-col gap-2 items-center">
						<h3 className="font-galindo">{post.name}</h3>
						<MenuItem
							title="LinkedIn"
							href={post.linkedin}
							target="_blank"
							src="/icons/linkedin.svg"
							size={24}
						/>
					</div>
					<p>{post.message}
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae suscipit harum eius atque illum beatae necessitatibus officiis laborum. Quod, aut?
					</p>
				</div>
			))}
		</div>
	);
}
