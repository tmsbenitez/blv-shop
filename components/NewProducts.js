import Item from './Item'
import Link from 'next/link'

const NewProducts = props => {
	const { products } = props

	return (
		<section>
			<div>
				<h1 className="text-6xl font-serif text-center">New Products.</h1>
			</div>
			<div className="py-16 mx-48 grid grid-cols-3 grid-rows-2 justify-items-center gap-y-16">
				{products.map(product => (
					<Item
						key={product._id}
						name={product.name}
						category={product.category}
						price={product.price}
						img={product.img}
						color={product.color}
					/>
				))}
			</div>
			<div className="flex items-center justify-center pb-8">
				<Link href="/shop">
					<a className="text-xl bg-white border border-zinc-400 px-4 py-2 rounded-sm hover:border-zinc-600 text-zinc-600 duration-100">
						See all products
					</a>
				</Link>
			</div>
		</section>
	)
}

export default NewProducts
