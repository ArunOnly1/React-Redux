import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement } from '../redux/slices/counterSlice'
const Counter = () => {
	const values = useSelector((state) => state.counter)
	const { value } = values

	const dispatch = useDispatch()
	return (
		<div style={{ margin: '100px 200px' }}>
			<button style={{ marginRight: 10 }} onClick={() => dispatch(increment())}>
				+
			</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<h1>{value}</h1>
		</div>
	)
}

export default Counter
