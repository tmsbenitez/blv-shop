import Link from 'next/link'
import { useSelector } from 'react-redux'

const Header = () => {
	const cart = useSelector(state => state.cart)

	const getTotalQuantity = () => {
		let total = 0
		cart.forEach(item => {
			total += item.quantity
		})
		return total
	}

	return (
		<header className="flex items-center justify-between w-full gap-8 py-5 border border-zinc-300 px-14 bg-zinc-100">
			<div className="font-serif text-xl font-bold tracking-widest opacity-80 hover:opacity-100 duration-100">
				<Link href="/">
					<a>BLV</a>
				</Link>
			</div>
			<nav className="flex justify-between w-11/12">
				<div className="flex gap-4">
					<Link href="/shop">
						<a className="opacity-80 hover:opacity-100 duration-100">Shop</a>
					</Link>
					<Link href="/shop/shoes">
						<a className="opacity-80 hover:opacity-100 duration-100">Shoes</a>
					</Link>
					<Link href="/shop/clothing">
						<a className="opacity-80 hover:opacity-100 duration-100">
							Clothing
						</a>
					</Link>
					<Link href="/shop/accessories">
						<a className="opacity-80 hover:opacity-100 duration-100">
							Accessories
						</a>
					</Link>
				</div>
				<div className="flex items-center gap-4">
					<button className="opacity-80 hover:opacity-100 duration-100">
						Search
					</button>
					<Link href="/account">
						<a className="opacity-80 hover:opacity-100 duration-100">
							My Account
						</a>
					</Link>
				</div>
			</nav>
			<div className="opacity-80 hover:opacity-100 duration-100">
				<div className="relative">
					<Link href={'/cart'}>
						<a>
							<span className="font-bold left-4 absolute flex top-3 h-5 w-5 items-center justify-center bg-zinc-100 rounded-full ">
								{getTotalQuantity()}
							</span>
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
								></path>
							</svg>
						</a>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Header
