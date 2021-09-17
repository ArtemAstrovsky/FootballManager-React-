import React from 'react'
import TransferList from './TransferList'
import { message, Statistic, Alert } from 'antd'
import s from './Transfer.module.css'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'

function Transfer() {
	const info = () => {
		message.info(`In this section, you can purchase players. Pay attention to the strength and cost when evaluating 
			the team budget. The maximum number of players available to you by the tournament rules - 20. The minimum number
			of players for the game in the season 13. In the case of the need you can sell players with a loss price.`)
	}
	const idMyTeam = 15
	const [balanceTeam, setBalanceTeam] = useState()
	const [isLoading, setIsLoading] = useState(true)
	const [teamFormation, setTeamFormation] = useState()

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setBalanceTeam(result[idMyTeam].difficulty)
				setTeamFormation(result[idMyTeam])
				setIsLoading(false)
			})
	}, [])
	return (
		<>
			<div className={s.transfer}>
				<Statistic title="Balance" prefix="$" value={balanceTeam} />
				<h1>Transfer players</h1>
				<Alert
					onClick={info}
					className={s.transfer__img}
					message="Information Panel"
					type="info"
					showIcon
				/>
			</div>
			<div>
				{isLoading ? (
					<Loader />
				) : (
					<TransferList
						teamFormation={teamFormation}
						balanceTeam={balanceTeam}
						setBalanceTeam={setBalanceTeam}
					/>
				)}
			</div>
		</>
	)
}

export default Transfer
