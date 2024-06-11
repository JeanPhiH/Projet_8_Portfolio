import Post from "@/models/post";
import MenuItem from "./MenuItem";

export default async function MsgList() {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	const posts = await Post.find().sort({ _id: -1 });

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
			{posts.map((post) => (
				<div
					key={post.id}
					className="h-48 p-3 dark:border-4 dark:border-double dark:border-dark rounded-lg flex gap-5 shadow-inner dark:shadow-lg shadow-light/75 dark:shadow-dark/50"
				>
					<div className="flex-none w-40 flex flex-col justify-between items-center">
						<div>
							<h3 className="font-galindo">{post.name}</h3>
							<h3 className="font-galindo">{post.lastname}</h3>
						</div>
						<MenuItem
							title="LkdIn"
							href={post.linkedin}
							target="_blank"
							src="/icons/linkedin.svg"
							width={24}
							height={24}
						/>
					</div>
					<p className="overflow-auto">
						{post.message}
					</p>
				</div>
			))}
		</div>
	);
}
