import { useSelector } from 'react-redux'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import CartItem from '../components/CartItem'
import Total from '../components/Total'

const Cart = () => {
	const cart = useSelector(state => state.cart)

	return (
		<section className="flex flex-col items-center">
			<Header />
			<main className="flex flex-col items-center gap-12">
				<h3 className="text-6xl font-serif pt-12 text-center">My Cart</h3>
				<div className=" flex flex-col gap-2">
					{cart?.map(item => (
						<CartItem
							key={item.name}
							name={item.name}
							image={item.images}
							quantity={item.quantity}
							price={item.price}
						/>
					))}
				</div>
				<Total />
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
