import { useSelector } from 'react-redux'

const Total = () => {
	const cart = useSelector(state => state.cart)

	const getTotal = () => {
		let totalQuantity = 0
		let totalPrice = 0
		cart.forEach(item => {
			totalQuantity += item.quantity
			totalPrice += item.price * item.quantity
		})

		return { totalPrice, totalQuantity }
	}

	return (
		<div className="flex items-center gap-4 justify-between w-full bg-white shadow rounded p-4 border border-zinc-300">
			<p className="flex gap-2 text-lg">
				Total ({getTotal().totalQuantity} products):{' '}
				<strong>${getTotal().totalPrice}</strong>
			</p>
			{cart.length === 0 ? (
				<button
					className="px-8 py-2 duration-100 border rounded-sm border-zinc-400  text-zinc-600 w-fit"
					disabled
				>
					Purchase
				</button>
			) : (
				<button className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800 w-fit">
					Purchase
				</button>
			)}
		</div>
	)
}

export default Total
