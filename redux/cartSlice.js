import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		cart: [],
	},
	reducers: {
		addToCart: (state, action) => {
			const itemInCart = state.cart.find(
				item => item.trueId === action.payload.trueId
			)
			if (itemInCart) {
				itemInCart.quantity++
			} else {
				state.cart.push({ ...action.payload, quantity: 1 })
			}
		},
		incrementQuantity: (state, action) => {
			const item = state.cart.find(item => item.trueId === action.payload)
			console.log(action.payload)
			item.quantity++
		},
		decrementQuantity: (state, action) => {
			const item = state.cart.find(item => item.trueId === action.payload)
			if (item.quantity === 1) {
				item.quantity = 1
			} else {
				item.quantity--
			}
		},
		removeItem: (state, action) => {
			const removeItem = state.cart.filter(item => item.trueId !== action.payload)
			state.cart = removeItem
		},
	},
})

export const cartReducer = cartSlice.reducer
export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
	cartSlice.actions
