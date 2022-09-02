import Image from 'next/image'
import { useState } from 'react'

const ItemPage = props => {
	const { name, subcategory, category, price, images, colors } = props
	const { cart, addToCart, isCartVisible } = props

	const [index, setIndex] = useState(0)
	const [quantity, setQuantity] = useState(1)

	console.log(props)

	const changeImage = event => {
		const btn = event.target
		setIndex(colors.indexOf(btn.value))
	}

	return (
		<div className="flex mx-14 my-28 w-fit bg-white border-2 border-zinc-600 shadow-lg">
			<picture className="flex rounded">
				{images.length > 1 ? (
					<Image
						key={images}
						alt={`blv-${name}`}
						src={images[index]}
						width="520"
						height="520"
						className="object-cover"
					/>
				) : (
					images.map(image => (
						<Image
							key={image}
							alt={`blv-${name}`}
							src={image}
							width="520"
							height="520"
							className="object-cover"
						/>
					))
				)}
			</picture>
			<div className="flex flex-col gap-8 py-12 pl-12 pr-32">
				<div className="flex flex-col gap-8">
					<h1 className="font-semibold text-3xl">
						{name} / {subcategory}
					</h1>
					<span className="font-semibold text-5xl">${price.toFixed(2)}</span>
				</div>
				<div className="flex flex-col gap-2">
					{colors.map(color => (
						<label
							key={color}
							className="flex gap-2 hover:bg-zinc-100 duration-100 p-2 w-fit rounded cursor-pointer"
						>
							<button
								value={color}
								onClick={changeImage}
								style={{ backgroundColor: color }}
								className="w-6 h-6 border-black border rounded-sm"
							></button>
							{color.charAt(0).toUpperCase() + color.slice(1)}
						</label>
					))}
				</div>
				<button className="px-8 mt-auto py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800 w-fit">
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default ItemPage
