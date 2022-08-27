import Item from './Item'
import Link from 'next/link'

const Products = props => {
	const { products } = props

	return (
		<section>
			<div>
				<h1 className="font-serif text-6xl text-center">New Products.</h1>
			</div>
			<div className="grid grid-cols-3 grid-rows-2 py-16 mx-48 justify-items-center gap-y-16">
				{products.map(product => (
					<Item
						key={product._id}
						name={product.name}
						category={product.category}
						subcategory={product.subcategory}
						price={product.price}
						images={product.images}
						colors={product.colors}
					/>
				))}
			</div>
			<div className="flex items-center justify-center pb-8">
				<Link href="/shop">
					<a className="px-4 py-2 text-xl duration-100 bg-white border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600">
						See all products
					</a>
				</Link>
			</div>
		</section>
	)
}

export default Products
