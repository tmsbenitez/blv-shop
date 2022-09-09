import Image from 'next/image'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { getSession } from 'next-auth/react'
import Link from 'next/link'

const ItemPage = props => {
	const { name, subcategory, category, price, images, colors } = props
	const [index, setIndex] = useState(0)
	const [signed, setSigned] = useState(false)

	const changeImage = event => {
		const btn = event.target
		setIndex(colors.indexOf(btn.value))
	}

	const dispatch = useDispatch()

	const addBtn = async () => {
		const session = await getSession()
		if (!session) {
			setSigned(true)
			setTimeout(() => {
				setSigned(false)
			}, 5000)
		} else {
			dispatch(addToCart({ name, price, images }))
		}
	}

	return (
		<div className="flex mx-14 my-28 w-fit bg-white border-2 border-zinc-300 shadow-lg pr-48">
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
			<div className="flex flex-col gap-8 py-12 pl-12 ">
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
				<div className="relative mt-auto flex flex-col gap-3">
					{signed ? (
						<span className="text-red-400">
							Please{' '}
							<Link href="/login">
								<a className="underline">sign in</a>
							</Link>{' '}
							to add products to your cart.
						</span>
					) : null}
					<button
						onClick={() => addBtn()}
						className="px-8  py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800 w-fit"
					>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	)
}

export default ItemPage
