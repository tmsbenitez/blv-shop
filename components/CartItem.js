import {
	incrementQuantity,
	decrementQuantity,
	removeItem,
} from '../redux/cartSlice'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

const CartItem = ({ name, image, price, quantity }) => {
	const dispatch = useDispatch()

	return (
		<section key={name} className="flex gap-4 border-2 border-zinc-300 bg-white rounded shadow pr-80">
			<Image
				alt={`blv-${name}`}
				src={image[0]}
				width={100}
				height={100}
				className="object-cover"
			/>
			<div className="flex flex-col items-start">
				<p className="text-lg">{name}</p>
				<p className="text-xl font-bold">${price}</p>
				<div className="flex gap-4">
					<p>Quantity: {quantity}</p>
					<button
						className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center"
						onClick={() => dispatch(decrementQuantity(name))}
					>
						-
					</button>
					<button
						className="w-6 h-6 bg-zinc-100 rounded flex items-center justify-center"
						onClick={() => dispatch(incrementQuantity(name))}
					>
						+
					</button>
				</div>
				<button onClick={() => dispatch(removeItem(name))}>Remove</button>
			</div>
		</section>
	)
}

export default CartItem
