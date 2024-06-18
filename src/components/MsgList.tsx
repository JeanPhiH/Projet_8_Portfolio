import Post from "@/models/post";
import MenuItem from "./MenuItem";

export default async function MsgList() {
	const posts = await Post.find().sort({ _id: -1 });

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5">
			{posts.map((post) => (
				<div
					key={post.id}
					className="h-48 p-3 rounded-3xl flex gap-5 shadow-light/50 dark:shadow-dark/50 shadow-[0px_0px_10px_5px]"
				>
					<div className="flex-none w-40 flex flex-col justify-between items-center py-2">
						<div>
							<h3 className="font-galindo text-center text-highlight dark:text-highdark">
								{post.name}
							</h3>
							<h3 className="font-galindo text-center text-highlight dark:text-highdark">
								{post.lastname}
							</h3>
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
					<p className="overflow-auto shadow-inner shadow-light dark:shadow-dark w-full rounded-3xl p-3 italic">
						{post.message}
					</p>
				</div>
			))}
		</div>
	);
}
