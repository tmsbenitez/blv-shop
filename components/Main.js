import Link from 'next/link'
import Image from 'next/image'

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
			{sections.map(({ url, title, img }) => (
				<Link href={url} key={title}>
					<a className="flex items-center justify-center lg:w-1/3 cursor-pointer lg:h-full h-72">
						<picture className="flex opacity-50 hover:opacity-90 duration-100 h-full w-full">
							<Image
								alt={`blv-${title}`}
								src={img}
								width="1000%"
								height="1280"
								className="object-cover h-full w-full"
							/>
						</picture>
						<span className="absolute font-serif text-black pointer-events-none xl:text-7xl text-5xl">
							{title}
						</span>
					</a>
				</Link>
			))}
		</section>
	)
}

export default Main
