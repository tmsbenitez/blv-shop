import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'
import { getSession } from 'next-auth/react'

const ItemPage = props => {
	const { name, subcategory, id, price, images, colors } = props
	const [index, setIndex] = useState(0)
	const [signed, setSigned] = useState(false)
	const [isColor, setIsColor] = useState(false)
	const [added, setAdded] = useState(false)
	const [currColor, setCurrColor] = useState(null)
	const [trueId, setTrueId] = useState(null)

	const changeImage = event => {
		const btn = event.target
		setIndex(colors.indexOf(btn.value))
		setCurrColor(btn.value.charAt(0).toUpperCase() + btn.value.slice(1))
		setTrueId(id + btn.value)
	}

	const dispatch = useDispatch()

	const addBtn = async () => {
		const session = await getSession()
		if (!session) {
			setSigned(true)
			setTimeout(() => setSigned(false), 5000)
		} else if (currColor === null) {
			setIsColor(true)
			setTimeout(() => setIsColor(false), 5000)
		} else {
			dispatch(
				addToCart({ name, price, images, color: currColor, index, trueId })
			)
			setSigned(false)
			setIsColor(false)
			setAdded(true)
			setTimeout(() => setAdded(false), 3000)
		}
	}

	return (
		<div className="flex flex-col lg:flex-row mx-6 lg:mx-14 my-16 w-fit bg-white border-2 border-zinc-300 shadow-lg w-full lg:pr-48">
			<picture className="flex rounded">
				<Image
					key={images}
					alt={`blv-${name}`}
					src={images.length > 1 ? images[index] : images[0]}
					width="520"
					height="520"
					className="object-cover"
				/>
			</picture>
			<div className="flex flex-col gap-8 py-12 pl-6 lg:pl-12 ">
				<div className="flex flex-col gap-8">
					<h1 className="font-semibold text-3xl">
						{name} / {subcategory}
					</h1>
					<span className="font-semibold text-5xl">${price.toFixed(2)}</span>
				</div>
				<div className="flex flex-col gap-2">
					<div>
						<span className="text-lg font-semibold">
							Choose a color: {currColor}
						</span>
					</div>
					<div className='flex lg:flex-col'>
						{colors.map(color => (
							<label
								key={color}
								className="flex gap-2 hover:bg-zinc-100  duration-100 p-2 w-fit rounded cursor-pointer"
								id="color-label"
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
				</div>
				<div className="relative mt-auto flex flex-col gap-3">
					<span className={`text-red-400 ${signed ? 'block' : 'hidden'}`}>
						Please{' '}
						<Link href="/login">
							<a className="underline">sign in</a>
						</Link>{' '}
						to add products to your cart.
					</span>
					<span className={`text-red-400 ${isColor ? 'block' : 'hidden'}`}>
						Please, choose a color to add products to your cart.
					</span>
					<span className={`text-green-400 ${added ? 'block' : 'hidden'}`}>
						Added to cart!
					</span>
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
