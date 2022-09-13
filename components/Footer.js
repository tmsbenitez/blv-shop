import Link from 'next/link'
import Image from 'next/image'

const paymentMethods = [
	{ title: 'Visa', img: '/img/payment-methods/visa.png' },
	{ title: 'PayPal', img: '/img/payment-methods/paypal.png' },
	{ title: 'MasterCard', img: '/img/payment-methods/mastercard.png' },
	{ title: 'Apple Pay', img: '/img/payment-methods/apple-pay.png' },
	{ title: 'Google Pay', img: '/img/payment-methods/google-pay.png' },
	{ title: 'Bitcoin (BTC)', img: '/img/payment-methods/bitcoin.png' },
]

const navigation = [
	{ url: '/shop', text: 'Shop' },
	{ url: '/shop/shoes', text: 'Shoes' },
	{ url: '/shop/clothing', text: 'Clothing' },
	{ url: '/shop/accessories', text: 'Accessories' },
]

const websites = [
	{ url: 'https://www.fidaclothes.com', title: 'Fida Clothes' },
	{ url: 'https://cerberus.empretienda.com.ar', title: 'Cerberus' },
	{ url: 'https://barnesindustries.com.ar', title: 'Barnes' },
	{ url: 'https://bajushowroom.com.ar', title: 'Baju' },
	{ url: 'https://www.tulstore.com.ar', title: 'Tulupa Store' },
]

const Footer = () => {
	return (
		<footer className="flex flex-col md:flex-row gap-8 justify-between py-8 text-sm text-white px-14 bg-zinc-800">
			<div className='md:w-1/6 flex flex-col md:items-center'>
				<h2 className="pb-2 text-md">Navigation</h2>
				<div className="flex flex-col">
					{navigation.map(nav => (
						<Link href={nav.url} key={nav.text}>
							<a>{nav.text}</a>
						</Link>
					))}
				</div>
			</div>
			<div className='md:w-1/6 flex flex-col md:items-center'>
				<h2 className="pb-2 text-md">Payment Methods</h2>
				<div className="grid grid-cols-3 gap-2">
					{paymentMethods.map(payment => (
						<Image
							key={payment.title}
							alt={`blv-${payment.title}`}
							src={payment.img}
							width="60%"
							height="60%"
							className="rounded flex object-contain"
							title={payment.title}
						/>
					))}
				</div>
			</div>
			<div className='md:w-1/6 flex flex-col md:items-center'>
				<div className="pb-2">
					<p>This is a project with educational purpose.</p>
					<p>
						If you want to buy the clothes used here, <br />
						these are the real shops.
					</p>
				</div>
				<div className="grid grid-cols-2">
					{websites.map(website => (
						<Link href={website.url} key={website.title}>
							<a>▹ {website.title}</a>
						</Link>
					))}
				</div>
			</div>
		</footer>
	)
}

export default Footer
