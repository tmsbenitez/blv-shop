import { useRouter } from 'next/router'
import ItemPage from './ItemPage'
import Footer from './Footer'

const Layout = props => {
	const { products, cart, addToCart } = props

	const router = useRouter()
	const itemName = router.query.name
	const product = products.filter(product => {
		return product.name === itemName
	})
	return (
		<main>
			<button onClick={() => window.history.back()}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="w-8 h-8 mt-8 ml-6 lg:ml-14"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
					/>
				</svg>
			</button>
			<div className="flex items-center justify-center">
				{product.map(prod => (
					<ItemPage
						key={prod._id}
						id={prod._id}
						name={prod.name}
						category={prod.category}
						subcategory={prod.subcategory}
						price={prod.price}
						colors={prod.colors}
						images={prod.images}
						cart={cart}
						addToCart={addToCart}
					/>
				))}
			</div>
			<Footer />
		</main>
	)
}

export default Layout
