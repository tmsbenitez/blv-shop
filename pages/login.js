import { useSession, signIn, getSession } from 'next-auth/react'

const Login = () => {
	const { data: session } = useSession()

	if (!session) {
		return (
			<main className="flex items-center justify-center h-screen">
				<div className="flex flex-col bg-white p-8 border border-zinc-400 rounded shadow-lg gap-4">
					<p>You are not signed in</p>
					<button
						onClick={signIn}
						className="px-8 py-2 duration-100 border rounded-sm border-zinc-400 hover:border-zinc-600 text-zinc-600 hover:text-zinc-800"
					>
						Sign In
					</button>
				</div>
			</main>
		)
	}
}

export default Login

export const getServerSideProps = async context => {
	const session = await getSession(context)
	if (session) {
		return {
			redirect: {
				destination: '/account',
			},
		}
	}
	return {
		props: { session },
	}
}
