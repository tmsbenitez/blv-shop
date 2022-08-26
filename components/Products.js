import Item from './Item'

const Products = props => {
	const { products } = props

	return (
		<section className='py-14 ml-72 mr-6 grid grid-cols-4 justify-items-center gap-y-16'>
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
		</section>
	)
}

export default Products
