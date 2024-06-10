import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		match: [
      /^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜŸ\s-]+$/,
      'Format non respecté: lettres, accents, espaces ou tirets.',
    ],
	},
	lastname: {
		type: String,
		required: true,
		match: [
      /^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/,
      'Format non respecté: lettres, accents, espaces ou tirets.',
    ],
	},
	linkedin: {
		type: String,
		required: true,
		match: [
      /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/,
      'Format non respecté: lien LinkedIn',
    ],
	},
	message: {
		type: String,
		required: true,
		match: [
      /^[a-zA-ZàáâäãåçèéêëìíîïñòóôöõùúûüýÿÀÁÂÄÃÅÇÈÉÊËÌÍÎÏÑÒÓÔÖÕÙÚÛÜø\s-]+$/,
      'Format non respecté: lettres, accents, espaces ou tirets.',
    ],
	},
})

export default mongoose.models.Post || mongoose.model('Post', postSchema)