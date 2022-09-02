import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import mongodb from '../../../lib/mongodb'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID,
			clientSecret: process.env.GOOGLE_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
	callbacks: {
		async session({ session }) {
			session.user.cart = []
			return session
		},
	},
	theme: {
		colorScheme: 'light', // "auto" | "dark" | "light"
		brandColor: '', // Hex color code
		logo: '/img/logo.png', // Absolute URL to image
		buttonText: '', // Hex color code
	},
	secret: process.env.SECRET,
	adapter: MongoDBAdapter(mongodb),
})
