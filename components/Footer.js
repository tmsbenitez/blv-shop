import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer className="flex justify-between py-8 text-sm text-white px-14 bg-zinc-800">
			<div>
				<h2 className="pb-2 text-md">Navigation</h2>
				<div className="flex flex-col">
					<Link href="/shop">
						<a>▹ Shop</a>
					</Link>
					<Link href="/shop/shoes">
						<a>▹ Shoes</a>
					</Link>
					<Link href="/shop/clothing">
						<a>▹ Clothing</a>
					</Link>
					<Link href="/shop/accessories">
						<a>▹ Accessories</a>
					</Link>
				</div>
			</div>
			<div>
				<h2 className="pb-2 text-md">Payment Methods</h2>
				<div className="grid grid-cols-3 gap-2">
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/visa.png"
						width="50%"
						height="30%"
						className="rounded"
						title="Visa"
					/>
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/paypal.png"
						width="50%"
						height="30%"
						className="rounded"
						title="PayPal"
					/>
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/mastercard.png"
						width="50%"
						height="30%"
						className="rounded"
						title="MasterCard"
					/>
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/apple-pay.png"
						width="50%"
						height="30%"
						className="rounded"
						title="Apple Pay"
					/>
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/google-pay.png"
						width="50%"
						height="30%"
						className="rounded"
						title="Google Pay"
					/>
					<Image
						alt="blv-payment-methods"
						src="/img/payment-methods/bitcoin.png"
						width="50%"
						height="30%"
						className="rounded"
						title="Bitcoin (BTC)"
					/>
				</div>
			</div>
			<div>
				<div className="pb-2">
					<p>This is a project with educational purpose.</p>
					<p>
						If you want to buy the clothes used here, <br />
						these are the real shops.
					</p>
				</div>
				<div className="grid grid-cols-2">
					<Link href="https://www.fidaclothes.com">
						<a>▹ Fida Clothes</a>
					</Link>
					<Link href="https://cerberus.empretienda.com.ar">
						<a>▹ Cerberus</a>
					</Link>
					<Link href="https://barnesindustries.com.ar">
						<a>▹ Barnes</a>
					</Link>
					<Link href="https://bajushowroom.com.ar">
						<a>▹ Baju</a>
					</Link>
					<Link href="https://www.tulstore.com.ar">
						<a>▹ Tulupa Store</a>
					</Link>
				</div>
			</div>
		</footer>
	)
}

export default Footer
