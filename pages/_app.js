import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<Component {...pageProps} />
			</Provider>
		</SessionProvider>
	)
}
