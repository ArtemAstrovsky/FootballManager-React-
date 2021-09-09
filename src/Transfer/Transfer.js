import React from 'react'
import TransferList from './TransferList'
import { message, Statistic, Alert } from 'antd'
import s from './Transfer.module.css'
import { useEffect, useState } from 'react'

function Transfer() {
	const info = () => {
		message.info(`In this section, you can purchase players. Pay attention to the strength and cost when evaluating 
			the team budget. The maximum number of players available to you by the tournament rules - 20. The minimum number
			of players for the game in the season 13. In the case of the need you can sell players with a loss price.`)
	}

	const [balance, setBalance] = useState([])

	useEffect(() => {
		fetch('/yourteam/1')
			.then(result => result.json())
			.then(result => {
				setBalance(result.difficulty)
			})
	}, [])
	return (
		<>
			<div className={s.transfer}>
				<Statistic title='Balance' prefix='$' value={balance} />
				<h1>Transfer players</h1>
				<Alert
					onClick={info}
					className={s.transfer__img}
					message='Information Panel'
					type='info'
					showIcon
				/>
			</div>
			<TransferList balanse={balance} />
		</>
	)
}

export default Transfer
