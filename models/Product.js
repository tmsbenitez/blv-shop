import mongoose from 'mongoose'

const { Schema, model, models } = mongoose

const ProductSchema = new Schema({
	name: String,
	category: String,
	price: Number,
	subcategory: String,
	images: Array,
	colors: Array,
})

export default models.Product || model('Product', ProductSchema)
