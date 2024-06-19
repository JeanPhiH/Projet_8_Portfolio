import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	lastname: {
		type: String,
		required: true,
	},
	postdate: {
		type: Date,
	},
	linkedin: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
});

export default mongoose.models.Post || mongoose.model("Post", postSchema);
