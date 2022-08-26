import Header from '../components/Header'
import Filters from '../components/Filters'
import Products from '../components/Products'
import Product from '../models/Product'
import dbConnect from '../lib/dbConnect'

const Shop = ({ products }) => {
	return (
		<div>
			<Header />
			<div>
				<h1 className="font-bold text-6xl font-serif text-center pt-8">Our Products.</h1>
			</div>
			<Filters />
			<Products products={products} />
		</div>
	)
}

export async function getServerSideProps() {
	await dbConnect()

	const result = await Product.find({})
	const products = result.map(doc => {
		const product = doc.toObject()
		product._id = product._id.toString()
		return product
	})

	return { props: { products: products } }
}

export default Shop
