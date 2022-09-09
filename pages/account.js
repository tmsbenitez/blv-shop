import React from 'react'
import { useSession, signOut, getSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { persistor } from '../redux/store'

const Account = () => {
	const { data: session, status } = useSession()

	const purge = () => {
		persistor.purge()
	}

	if (status === 'authenticated') {
		return (
			<main className="flex justify-center items-center h-screen">
				<div className="flex flex-col justify-center items-center border border-zinc-400 p-12 bg-white shadow-lg gap-4">
					<span className="text-5xl font-serif pb-8">My Account</span>
					<div className="flex gap-4 items-center">
						<Image
							alt=""
							src={session.user.image}
							width="50%"
							height="50%"
							className="rounded"
						/>
						<span className="text-3xl">{session.user.name}</span>
					</div>
					<div className="flex flex-col gap-2 items-center">
						<span>{session.user.email}</span>
					</div>
					<div className="flex flex-col gap-2 pt-4 w-full text-center">
						<Link href="/shop">
							<a className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800">
								Go to Shop
							</a>
						</Link>
						<button
							onClick={() => {
								purge()
								signOut()
							}}
							className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800"
						>
							Sign out
						</button>
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
