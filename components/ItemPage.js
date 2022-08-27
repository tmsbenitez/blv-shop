import Image from 'next/image'

const ItemPage = props => {
	const { name, subcategory, category, price, images, colors } = props

	console.log(props)

	return (
		<div className="flex gap-12 m-14 py-[2.25rem]">
			<picture className="border border-black flex rounded">
				{images.map(image => (
					<Image
						key={image}
						alt={`blv-${name}`}
						src={image}
						width="320"
						height="320"
						className="object-cover rounded-t"
					/>
				))}
			</picture>
			<div className="flex flex-col gap-2">
				<div className="flex items-center">
					<h1 className="font-semibold text-3xl">
						{name} / {subcategory}
					</h1>
				</div>
				<span className="font-semibold text-5xl">${price.toFixed(2)}</span>
				{colors.map(color => (
					<div key={color} className="flex gap-2">
						<div
							style={{ backgroundColor: color }}
							className="w-6 h-6 border-black border rounded-sm"
						></div>
						<span className="font-semibold">
							{color.charAt(0).toUpperCase() + color.slice(1)}
						</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default ItemPage
