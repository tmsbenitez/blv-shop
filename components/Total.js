import { useSelector } from 'react-redux'
import { persistor } from '../redux/store'
import { useState } from 'react'

const Total = () => {
	const cart = useSelector(state => state.cart)
	// Render success purchase message.
	const [success, setSuccess] = useState(false)

	// Clean the Local Storage.
	const purge = () => {
		persistor.purge()
	}

	const purchase = () => setSuccess(true)

	const refresh = () => {
		setTimeout(() => location.reload(), 3000)
	}

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
		<div className="flex flex-col gap-4">
			<div
				className={`flex gap-4 absolute left-[50%] ml-[-10rem] top-[50%] mt-[-3rem] shadow-lg items-center justify-center z-50 border-green-300 border-2 bg-green-100 rounded p-2 w-80 h-24 ${
					success ? 'flex' : 'hidden'
				}`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>

				<span className="text-lg">
					Thanks for your purchase! <br />{' '}
					<span className="text-sm">Will be delivered soon.</span>
				</span>
			</div>
			<div className="flex items-center gap-4 justify-between w-full bg-white shadow rounded p-4 border border-zinc-300">
				<p className="text-lg">
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
					<button
						onClick={() => {
							purge()
							purchase()
							refresh()
						}}
						className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800 w-fit"
					>
						Purchase
					</button>
				)}
			</div>
		</div>
	)
}

export default Total
