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
		<div className='flex ml-auto'>
			<p className="flex gap-2">
				Total ({getTotal().totalQuantity} products):{' '}
				<strong>${getTotal().totalPrice}</strong>
			</p>
		</div>
	)
}

export default Total
