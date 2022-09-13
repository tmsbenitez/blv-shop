import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Item = props => {
	const { name, subcategory, category, price, colors, images } = props
	const [index, setIndex] = useState(0)

	const changeImage = event => {
		const btn = event.target
		setIndex(colors.indexOf(btn.value))
	}

	return (
		<div className="flex flex-col items-center pb-6 text-center bg-white border-2 rounded shadow-lg border-zinc-300">
			<Image
				key={images}
				alt={`blv-${name}`}
				src={images.length > 1 ? images[index] : images[0]}
				width="330"
				height="330"
				className="object-cover"
			/>
			<div className="flex flex-col flex-wrap items-center gap-2 py-4">
				<h3 className="max-w-xs text-md">
					{name} / {subcategory}
				</h3>
				<div className="flex items-center gap-4">
					<h2 className="text-lg font-bold">${price.toFixed(2)}</h2>
					{colors.map(color => (
						<button
							key={color}
							value={color}
							onClick={changeImage}
							style={{ backgroundColor: `${color}` }}
							className="w-6 h-6 border-zinc-600 border rounded-sm hover:border-black"
							title={color.charAt(0).toUpperCase() + color.slice(1)}
						></button>
					))}
				</div>
			</div>
			<Link href={`/shop/${name}`}>
				<a className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800">
					See more
				</a>
			</Link>
		</div>
	)
}

export default Item
