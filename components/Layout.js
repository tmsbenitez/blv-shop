import { useRouter } from 'next/router'
import ItemPage from './ItemPage'
import Header from './Header'
import Footer from './Footer'

const Layout = props => {
	const { products } = props
	const router = useRouter()
	const itemName = router.query.name
	const product = products.filter(product => {
		return product.name === itemName
	})

	return (
		<main>
			<Header />
			{product.map(prod => (
				<ItemPage
					key={prod._id}
					name={prod.name}
					category={prod.category}
					subcategory={prod.subcategory}
					price={prod.price}
					colors={prod.colors}
					images={prod.images}
				/>
			))}
			<Footer />
		</main>
	)
}

export default Layout
