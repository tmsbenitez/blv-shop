import Link from 'next/link'

const sections = [
	{
		url: '/shop/shoes',
		img: '/img/blv-shoes.jpg',
		title: 'Shoes.',
	},
	{
		url: '/shop/clothing',
		img: '/img/blv-clothes.jpg',
		title: 'Clothing.',
	},
	{
		url: '/shop/accessories',
		img: '/img/blv-acc.jpg',
		title: 'Accessories.',
	},
]

const Main = () => {
	return (
		<section className="lg:flex">
			{sections.map(section => (
				<Link href={section.url} key={section.title}>
					<a className="flex items-center justify-center lg:w-1/3 cursor-pointer lg:h-full h-72">
						<picture className="flex opacity-50 hover:opacity-90 duration-100 h-full w-full">
							<img
								alt=""
								src={section.img}
								className="object-cover h-full w-full"
							/>
						</picture>
						<span className="absolute font-serif text-black pointer-events-none xl:text-7xl text-5xl">
							{section.title}
						</span>
					</a>
				</Link>
			))}
		</section>
	)
}

export default Main
