import Image from 'next/image'

const Item = props => {
	const { name, category, price, img, color } = props

	return (
		<div className="text-center flex flex-col items-center justify-center pb-4 border-2 border-zinc-300 rounded bg-white shadow-lg">
			<Image
				alt="blv-sicko-god-sweatshirt"
				src={img}
				width="320"
				height="320"
				className="rounded-t object-cover"
			/>
			<div className="flex flex-wrap flex-col items-center py-4 gap-2">
				<h3 className="text-md  max-w-xs">
					{name} / {category}
				</h3>
				<div className="flex gap-4 items-center">
					<h2 className="font-bold text-lg">${price.toFixed(2)}</h2>
					<div
						className={`w-6 h-6 bg-[${color}] border-black border rounded-sm`}
						title={color.charAt(0).toUpperCase() + color.slice(1)}
					></div>
				</div>
			</div>
			<button className="border border-zinc-400 px-4 py-2 rounded-sm hover:border-zinc-600 duration-100 text-zinc-600">
				See more
			</button>
		</div>
	)
}

export default Item
