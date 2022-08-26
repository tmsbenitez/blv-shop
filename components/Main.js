import Link from 'next/link'

const Main = () => {
	return (
		<section className="flex">
			<Link href="/shop/shoes">
				<a className="flex items-center justify-center w-1/3 cursor-pointer">
					<picture className="flex opacity-50 hover:opacity-90 duration-100">
						<img alt="" src="/img/blv-shoes.jpg" />
					</picture>
					<span className="absolute font-serif text-black pointer-events-none text-8xl">
						Shoes.
					</span>
				</a>
			</Link>
			<Link href="/shop/clothing">
				<a className="flex items-center justify-center w-1/3 cursor-pointer">
					<picture className="flex opacity-50 hover:opacity-90 duration-100">
						<img alt="" src="/img/blv-clothes.jpg" />
					</picture>
					<span className="absolute font-serif text-black pointer-events-none text-8xl">
						Clothing.
					</span>
				</a>
			</Link>
			<Link href="/shop/accessories">
				<a className="flex items-center justify-center w-1/3 cursor-pointer">
					<picture className="flex opacity-50 hover:opacity-90 duration-100">
						<img alt="" src="/img/blv-acc.jpg" />
					</picture>
					<span className="absolute font-serif text-black pointer-events-none text-8xl">
						Accessories.
					</span>
				</a>
			</Link>
		</section>
	)
}

export default Main
