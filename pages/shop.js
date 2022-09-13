import Header from '../components/Header'
import Filters from '../components/Filters'
import Footer from '../components/Footer'
import Product from '../models/Product'
import dbConnect from '../lib/dbConnect'

const Shop = ({ products }) => {
	return (
		<main>
			<Header />
			<h1 className="pt-8 font-serif text-6xl text-center">Shop.</h1>
			<Filters products={products} />
			<Footer />
		</main>
	)
}

export async function getServerSideProps() {
	await dbConnect()

	const result = await Product.find({})
		.sort({ category: -1 })
		.sort({ subcategory: 1 })
	const products = result.map(doc => {
		const product = doc.toObject()
		product._id = product._id.toString()
		return product
	})

	return { props: { products: products } }
}

export default Shop
