import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		value: 0,
	},
	reducers: {
		increment: (state, action) => {
			console.log(state, action)
			state.value = state.value + 1
		},

		decrement: (state, action) => {
			console.log(state, action)
			state.value = state.value - 1
		},
	},
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer
