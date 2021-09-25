import React from 'react'
import s from './Academyclub.module.css'
import HeaderMenu from '../HeaderMenu/HeaderMenu'
import { useSelector, useDispatch } from 'react-redux'

function Academyclub(props) {
	const dispatch = useDispatch()
	const numberPlayers = useSelector(state => state.numberPlayers)

	const addPlayer = () => {
		dispatch({ type: 'ADD_PLAYER', payload: 1 })
	}
	const payPlayer = () => {
		dispatch({ type: 'GET_PLAYER', payload: 1 })
	}
	return (
		<>
			<HeaderMenu nav={props.nav} />
			<div className={s.container}>
				<div>{numberPlayers}</div>
				<button onClick={() => addPlayer()}>+</button>
				<button onClick={() => payPlayer()}>-</button>
			</div>
			<div className={s.container}>
				<div>{numberPlayers}</div>
				<button onClick={() => addPlayer()}>+</button>
				<button onClick={() => payPlayer()}>-</button>
			</div>
		</>
	)
}

export default Academyclub
