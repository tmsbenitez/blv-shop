import dbConnect from '../lib/dbConnect'
import Product from '../models/Product'
import Header from '../components/Header'
import Main from '../components/Main'
import Services from '../components/Services'
import NewProducts from '../components/NewProducts'
import Head from 'next/head'
import Footer from '../components/Footer'

export default function Home({ products }) {
	return (
		<section>
			<Head>
				<title>BLV eShop</title>
			</Head>
			<Header />
			<Main />
			<Services />
			<NewProducts products={products} />
			<Footer />
		</section>
	)
}

export async function getServerSideProps() {
	await dbConnect()

	const result = await Product.find({}).sort({ $natural: -1 }).limit(6)
	const products = result.map(doc => {
		const product = doc.toObject()
		product._id = product._id.toString()
		return product
	})

	return { props: { products: products } }
}
