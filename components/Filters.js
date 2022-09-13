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

const navigation = [
	{ name: 'Shop', url: '/shop', subcategories: [] },
	{
		name: 'Shoes',
		url: '/shop/shoes',
		subcategories: [
			{ name: 'Low', url: '/shop/shoes/low' },
			{ name: 'High', url: '/shop/shoes/high' },
		],
	},
	{
		name: 'Clothing',
		url: '/shop/clothing',
		subcategories: [
			{ name: 'T-Shirts', url: '/shop/clothing/t-shirt' },
			{ name: 'Sweatshirts', url: '/shop/clothing/sweatshirt' },
			{ name: 'Hoodies', url: '/shop/clothing/hoodies' },
			{ name: 'Jogging', url: '/shop/clothing/jogging' },
		],
	},
	{
		name: 'Accessories',
		url: '/shop/accessories',
		subcategories: [],
	},
]

const ProductFilters = props => {
	const { colors, onFilterChange } = props

	return (
		<aside className="justify-center flex-col flex lg:flex-col h-fit gap-8 lg:gap-0 py-8 px-6 bg-white border rounded shadow-lg m-6 lg:m-14 border-zinc-300">
			<div className="flex lg:flex-col">
				<div className="w-44">
					<h1 className="font-serif text-xl font-bold">Categories</h1>
					<ul className="flex flex-col gap-2 py-3">
						{navigation.map(nav => {
							const { name, url, subcategories } = nav
							return (
								<div key={name}>
									<Link href={url}>
										<a className="font-semibold">{name}</a>
									</Link>
									<div className="flex flex-col gap-1 pl-4">
										{subcategories.map(sub => (
											<Link key={sub.name} href={sub.url}>
												<a>{sub.name}</a>
											</Link>
										))}
									</div>
								</div>
							)
						})}
					</ul>
				</div>
				<div className="flex flex-col w-44">
					<h1 className="font-serif text-xl font-bold">Colors</h1>
					<ul className="flex flex-col gap-2 py-3">
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
			</div>
		</aside>
	)
}

export const ProductsList = props => {
	const { products } = props

	return (
		<section className="flex flex-wrap justify-center lg:justify-start h-full gap-10 mx-6 lg:mx-0 lg:mx-14 lg:m-0 py-14">
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
						let hasColor
						product.colors.forEach(color =>
							filters.has(color) ? (hasColor = true) : null
						)
						return hasColor
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
		<section className="flex flex-col lg:flex-row">
			<ProductFilters colors={colors} onFilterChange={handleFilterChange} />
			<ProductsList products={state.products} />
		</section>
	)
}

export default Filters
