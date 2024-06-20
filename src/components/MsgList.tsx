import Post from "@/models/post";
import MenuItem from "./MenuItem";

export default async function MsgList() {
	const posts = await Post.find().sort({ _id: -1 });

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-5">
			{posts.map((post) => (
				<div
					key={post.id}
					className="lg:h-72 p-3 rounded-3xl md:w-2/3 lg:w-full md:mx-auto flex flex-col justify-center items-center lg:flex-row gap-5 shadow-light/50 dark:shadow-dark/50 shadow-[0px_0px_10px_5px] lg:hover:scale-125 duration-500 bg-dark dark:bg-light"
				>
					<div className="lg:flex-none w-40 flex flex-col gap-5 items-center py-2">
						<div>
							<h3 className="font-galindo text-center text-highlight dark:text-highdark">
								{post.name}
							</h3>
							<h3 className="font-galindo text-center text-highlight dark:text-highdark">
								{post.lastname}
							</h3>
						</div>
						<p>le {post.postdate.toLocaleDateString("fr-FR")}</p>
						<MenuItem
							title="LkdIn"
							href={post.linkedin}
							target="_blank"
							src="/icons/linkedin.svg"
							width={24}
							height={24}
						/>
					</div>
					<p className="overflow-auto h-full shadow-inner shadow-light dark:shadow-dark w-full rounded-3xl p-3 italic">
						{post.message}
					</p>
				</div>
			))}
		</div>
	);
}
