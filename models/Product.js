import mongoose from 'mongoose'
const { Schema, model, models } = mongoose

const ProductSchema = new Schema({
	name: String,
	category: String,
	price: Number,
	color: String,
	img: String,
})

export default models.Product || model('Product', ProductSchema)
