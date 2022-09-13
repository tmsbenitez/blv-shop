import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from '../redux/cartSlice'
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'

const CartItem = ({ name, image, price, quantity, color, index = 0, id }) => {
	const dispatch = useDispatch()

	return (
		<section
			key={name}
			className="flex gap-4 border border-zinc-300 bg-white rounded pr-96"
		>
			<Image
				alt={`blv-${name}`}
				src={image[index]}
				width={150}
				height={150}
				className="object-cover"
			/>
			<div className="flex flex-col items-start justify-center gap-4">
				<Link href={`/shop/${name}`}>
					<div className="flex gap-2 font-semibold text-lg cursor-pointer">
						<p>{name}</p>
						{'-'}
						<p>${price}</p>
					</div>
				</Link>
				<div className="flex gap-4">
					<p>Color: {color.charAt(0).toUpperCase() + color.slice(1)}</p>
					<p>Quantity: {quantity}</p>
				</div>
				<div className="flex gap-2">
					<button
						className="w-6 h-6 text-zinc-600 hover:text-zinc-800 rounded-full flex items-center justify-center duration-100 font-semibold"
						onClick={() => dispatch(incrementQuantity(id))}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
					<button
						className="w-6 h-6 text-zinc-600 hover:text-zinc-800 rounded-full flex items-center justify-center duration-100 font-semibold"
						onClick={() => dispatch(decrementQuantity(id))}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
					<button
						className="w-6 h-6 text-zinc-600 hover:text-red-500 rounded-full flex items-center justify-center duration-100 font-semibold"
						onClick={() => dispatch(removeItem(id))}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
							/>
						</svg>
					</button>
				</div>
			</div>
		</section>
	)
}

export default CartItem
