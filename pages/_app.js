import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { persistor, store } from '../redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function MyApp({
	Component,
	pageProps: { session, ...pageProps },
}) {
	return (
		<SessionProvider session={session}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<Component {...pageProps} />
				</PersistGate>
			</Provider>
		</SessionProvider>
	)
}
