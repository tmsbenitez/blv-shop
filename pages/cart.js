import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Image from 'next/image'

const Cart = () => {
	const cart = useSelector(state => state.cart)

	return (
		<section>
			<Header />
			<main className="flex flex-col items-center">
				<h3 className="text-6xl font-serif py-12 text-center">My Cart</h3>
				<div className="w-6/12 flex flex-col bg-white border rounded shadow-lg">
					{cart.map(item => {
						const { name, images, price } = item
						return (
							<div key={name} className="flex gap-4">
								<Image
									alt={`blv-${name}`}
									src={images[0]}
									width={150}
									height={150}
								/>
								<div>
									<p className="text-xl">{name}</p>
									<p className="text-2xl font-bold">${price}</p>
								</div>
							</div>
						)
					})}
				</div>
			</main>
		</section>
	)
}

export default Cart

export const getServerSideProps = async context => {
	const session = await getSession(context)
	if (!session) {
		return {
			redirect: {
				destination: '/login',
			},
		}
	}
	return {
		props: { session },
	}
}
