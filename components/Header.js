import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const navigation = [
	{ url: '/shop', text: 'Shop', render: true },
	{ url: '/shop/shoes', text: 'Shoes', render: false },
	{ url: '/shop/clothing', text: 'Clothing', render: false },
	{ url: '/shop/accessories', text: 'Accessories', render: false },
]

const Header = () => {
	const cart = useSelector(state => state.cart)
	const [searchIsVisible, setSearchIsVisible] = useState(false)
	const [isVisible, setIsVisible] = useState(false)

	const getTotalQuantity = () => {
		let total = 0
		cart.forEach(item => {
			total += item.quantity
		})
		return total
	}

	const showSearchBar = () => setSearchIsVisible(!searchIsVisible)

	useEffect(() => {
		searchIsVisible ? setIsVisible(true) : null
	}, [searchIsVisible])

	return (
		<header>
			<div className="flex relative items-center z-20 justify-between w-full gap-8 py-5 border border-zinc-300 px-6 lg:px-14 bg-zinc-100">
				<div className="flex items-center gap-4">
					<Link href="/">
						<a className="font-serif text-xl font-bold tracking-widest opacity-80 hover:opacity-100 duration-100">
							BLV
						</a>
					</Link>
					<div className="gap-4 flex">
						{navigation.map(nav => {
							const { url, text, render } = nav
							return (
								<Link href={url} key={text}>
									<a
										className={`opacity-80 hover:opacity-100 duration-100 sm:flex ${
											!render ? 'hidden' : ''
										}`}
									>
										{text}
									</a>
								</Link>
							)
						})}
					</div>
				</div>
				<nav className="flex">
					<div className="flex items-center gap-4">
						<button
							className="opacity-80 hover:opacity-100 duration-100"
							onClick={showSearchBar}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
								/>
							</svg>
						</button>
						<Link href="/account">
							<a className="opacity-80 hover:opacity-100 duration-100">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</a>
						</Link>
						<div className="opacity-80 hover:opacity-100 duration-100">
							<div className="relative">
								<Link href={'/cart'}>
									<a>
										<span className="font-bold left-4 absolute flex top-3 h-5 w-5 items-center justify-center bg-zinc-100 rounded-full ">
											{getTotalQuantity()}
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
											/>
										</svg>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</nav>
			</div>
			<div
				className={`h-16 absolute top-18 z-10 w-full ${
					!isVisible ? 'hidden' : 'flex'
				}`}
			>
				{searchIsVisible ? (
					<input
						type="text"
						className="w-full h-full slide-in-top border shadow border-zinc-300 lg:px-14"
						id="searchbar"
						placeholder="Search for products... "
					/>
				) : (
					<input
						type="text"
						className="w-full h-full slide-out-top border shadow border-zinc-300 lg:px-14"
						id="searchbar"
						placeholder="Search for products... "
					/>
				)}
			</div>
		</header>
	)
}
export default Header
