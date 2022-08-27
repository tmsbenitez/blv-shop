import Item from './Item'
import Link from 'next/link'
import { useState, useCallback } from 'react'

const colors = [
	'white',
	'black',
	'saddlebrown',
	'beige',
	'green',
	'olivedrab',
	'pink',
	'indigo',
]

const ProductFilters = props => {
	const { colors, onFilterChange } = props

	return (
		<aside className="flex flex-col h-full py-8 pl-6 pr-12 bg-white border rounded shadow-lg ml-14 my-14 border-zinc-300">
			<div className="pb-6">
				<h1 className="font-serif text-xl font-bold">Categories</h1>
				<ul className="flex flex-col gap-2 px-4 py-3">
					<Link href="/shop">
						<a className="font-semibold">Shop</a>
					</Link>
					<Link href="/shop/shoes">
						<a className="font-semibold">Shoes</a>
					</Link>
					<div className="flex flex-col gap-1 pl-4">
						<Link href="/shop/shoes/low">
							<a>Low</a>
						</Link>
						<Link href="/shop/shoes/high">
							<a>High</a>
						</Link>
					</div>
					<div className="flex flex-col gap-2">
						<Link href="/shop/clothing">
							<a className="font-semibold">Clothing</a>
						</Link>
						<div className="flex flex-col gap-1 pl-4">
							<Link href="/shop/clothing/t-shirt">
								<a>T-Shirt</a>
							</Link>
							<Link href="/shop/clothing/sweatshirt">
								<a>Sweatshirt</a>
							</Link>
							<Link href="/shop/clothing/hoodies">
								<a>Hoodies</a>
							</Link>
							<Link href="/shop/clothing/jogging">
								<a>Jogging</a>
							</Link>
						</div>
					</div>
					<Link href="/shop/accessories">
						<a className="font-semibold">Accessories</a>
					</Link>
				</ul>
			</div>
			<div className="pb-6">
				<h1 className="font-serif text-xl font-bold">Colors</h1>
				<ul className="flex flex-col gap-2 px-4 py-3">
					{colors.map(color => (
						<li key={color}>
							<label>
								<input
									className="mr-2"
									onChange={onFilterChange}
									type="checkbox"
									value={color}
								/>
								{color.charAt(0).toUpperCase() + color.slice(1)}
							</label>
						</li>
					))}
				</ul>
			</div>
		</aside>
	)
}

export const ProductsList = props => {
	const { products } = props

	return (
		<section className="grid h-full grid-cols-4 gap-16 pb-48 mx-12 py-14 justify-items-center">
			{products.map(product => (
				<Item
					key={product._id}
					name={product.name}
					category={product.category}
					subcategory={product.subcategory}
					price={product.price}
					colors={product.colors}
					images={product.images}
				/>
			))}
		</section>
	)
}

const Filters = props => {
	const { products } = props

	const [state, setState] = useState({
		products: products,
		filters: new Set(),
	})

	const handleFilterChange = useCallback(
		event => {
			setState(previousState => {
				let filters = new Set(previousState.filters)
				let products = state.products

				event.target.checked
					? filters.add(event.target.value)
					: filters.delete(event.target.value)

				if (filters.size) {
					products = products.filter(product => {
						for (let i = 0; i < product.colors.length; i++) {
							let filter = filters.has(product.colors[i])
							let color = product.colors[i]

							if (filter) {
								return color
							} else if (filter) {
								return color
							} else if (filter) {
								return color
							}
						}
					})
				}

				return {
					filters,
					products,
				}
			})
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[setState]
	)

	return (
		<section className="flex ">
			<ProductFilters colors={colors} onFilterChange={handleFilterChange} />
			<ProductsList products={state.products} />
		</section>
	)
}

export default Filters
