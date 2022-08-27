import dbConnect from '../../lib/dbConnect'
import Product from '../../models/Product'
import Layout from '../../components/Layout'

const Details = ({ products }) => {
	return <Layout products={products} />
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

export default Details
