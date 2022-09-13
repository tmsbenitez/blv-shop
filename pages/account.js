import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { persistor } from '../redux/store'
import Header from '../components/Header'

const Account = () => {
	const { data: session, status } = useSession()

	const purge = () => {
		persistor.purge()
	}

	if (status === 'authenticated') {
		return (
			<main className="flex flex-col h-screen">
				<Header />
				<div className="flex items-center justify-center">
					<div className="flex flex-col justify-center w-fit items-center border border-zinc-400 p-6 lg:p-12 bg-white shadow-lg gap-4 my-12 mx-6 lg:mx-14">
						<div className="flex flex-wrap items-center justify-center pb-8 gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-16 h-16"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								/>
							</svg>
							<span className="text-5xl font-serif">My Account</span>
						</div>
						<div className="flex flex-wrap justify-center gap-4 items-center">
							<Image
								alt=""
								src={session.user.image}
								width="100%"
								height="100%"
								className="rounded-full"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<div className="flex gap-2">
								<label>Name:</label>
								<span>{session.user.name}</span>
							</div>
							<div className="flex gap-2">
								<label>Email:</label>
								<span>{session.user.email}</span>
							</div>
							<div className="flex gap-2">
								<label>Address:</label>
								<span>Street 1234</span>
							</div>
							<div className="flex gap-2">
								<label>Postal Code:</label>
								<span>1234</span>
							</div>
							<div className="flex gap-2">
								<label>Credit Card:</label>
								<span>XXXX-XXXX-XXXX-1234</span>
								<picture className="border rounded border-zinc-300 flex">
									<Image
										alt="credit-card-blv"
										src="/img/payment-methods/visa.png"
										width={40}
										height={20}
										className="object-contain"
										title='Visa'
									/>
								</picture>
							</div>
						</div>
						<div className="flex flex-col gap-2 pt-4 text-center">
							<Link href="/cart">
								<a className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800">
									Go to your cart
								</a>
							</Link>
							<Link href="/shop">
								<a className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800">
									Go to shop
								</a>
							</Link>
							<button
								onClick={() => {
									purge()
									signOut()
								}}
								className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-red-600 text-zinc-600 hover:text-red-400"
							>
								Sign out
							</button>
						</div>
					</div>
				</div>
			</main>
		)
	}
}

export default Account

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
