import Header from '../../components/Header'
import Filters from '../../components/Filters'
import Footer from '../../components/Footer'
import Product from '../../models/Product'
import dbConnect from '../../lib/dbConnect'

const Accessories = ({ products }) => {
	return (
		<div>
			<Header />
			<h1 className="pt-8 font-serif text-6xl text-center">
				Accessories.
			</h1>
			<Filters products={products} />
			<Footer />
		</div>
	)
}

export async function getServerSideProps() {
	await dbConnect()

	const result = await Product.find({ category: 'Accessories' }).sort({
		subcategory: 1,
	})
	const products = result.map(doc => {
		const product = doc.toObject()
		product._id = product._id.toString()
		return product
	})

	return { props: { products: products } }
}

export default Accessories
