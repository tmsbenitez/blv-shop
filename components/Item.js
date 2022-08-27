import Image from 'next/image'
import Link from 'next/link'

const Item = props => {
	const { name, subcategory, category, price, colors, images } = props

	return (
		<div className="flex flex-col items-center pb-6 text-center bg-white border-2 rounded shadow-lg border-zinc-300">
			{images.length > 1 ? (
				<Image
					key={images}
					alt={`blv-${name}`}
					src={images[0]}
					width="320"
					height="320"
					className="object-cover rounded-t"
				/>
			) : (
				images.map(image => (
					<Image
						key={image}
						alt={`blv-${name}`}
						src={image}
						width="320"
						height="320"
						className="object-cover rounded-t"
					/>
				))
			)}
			<div className="flex flex-col flex-wrap items-center gap-2 py-4">
				<h3 className="max-w-xs text-md">
					{name} / {subcategory}
				</h3>
				<div className="flex items-center gap-4">
					<h2 className="text-lg font-bold">${price.toFixed(2)}</h2>
					{colors.map(color => (
						<div
							key={color}
							style={{ backgroundColor: `${color}` }}
							className="w-6 h-6 border-black border rounded-sm"
							title={color.charAt(0).toUpperCase() + color.slice(1)}
						></div>
					))}
				</div>
			</div>
			<Link href={`/shop/${name}`}>
				<a className="px-4 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600">
					See more
				</a>
			</Link>
		</div>
	)
}

export default Item
