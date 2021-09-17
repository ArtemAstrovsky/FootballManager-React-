import React from 'react'
import { Button } from 'antd'
import s from './Transfer.module.css'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

const PlayerList = props => {
	let history = useHistory()
	const idMyTeam = 16

	function payPlayers(player) {
		let newBalanceTeam = 0
		if (props.balanceTeam > player.price) {
			let question = window.confirm(
				'Are you sure you want to purchase a player?'
			)
			if (question === true) {
				props.setBalanceTeam(props.balanceTeam - player.price)
				buyPlayer(player)
			}
		} else alert('Not enough money')
	}

	function buyPlayer(player) {
		fetch('/playres/' + player.id, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...player,
				playerStatus: !player.playerStatus,
			}),
		})
		console.log(props.teamFormation)
		console.log(props.balanceTeam)
		fetch('/teams/' + idMyTeam, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...props.teamFormation,
				difficulty: props.balanceTeam - player.price,
			}),
		}).then(r => {
			history.push('/composition')
			message.success(`Player successfully purchased `)
		})
	}

	return (
		<div className={s.headerlist}>
			{props.transferList.map(item => (
				<div key={item.id} className={s.wrapper}>
					<div className={[s.card__wrapper, s.first].join(' ')}>
						<div className={s.front__card}>
							<img src={item.img} alt={item.it} width="100" height="100" />
							<h2> {item.playerName} </h2>
							<p>{'Power player : ' + item.force} </p>
							<p>{'The Former club : ' + item.pastClub} </p>
							<p>
								Player status :{' '}
								{item.playerStatus ? 'Free player' : 'Player sold'}{' '}
							</p>
						</div>
						<div className={s.back__card}>
							<h2>{item.price + '$'}</h2>
							{item.playerStatus ? (
								<Button
									type="link"
									id={s.button}
									onClick={() => payPlayers(item)}
								>
									Buy player
								</Button>
							) : (
								<Button type="link" id={s.button} disabled>
									Player Sold
								</Button>
							)}
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default PlayerList

// <tbody>
// {props.transferList.map(item => (
// 	<tr key = {item.id} onclick="deleteAllUsers()">
// 		<td><img src={item.img} alt={item.it} width="100" height="100"/></td>
// 		<td>{item.playerName}</td>
// 		<td>{item.pastClub}</td>
// 		<td>{item.force}</td>
// 		<td>{item.price+"$"}</td>
// 		<td><Button type="link" onClick={()=> payPlayers(item)}>Buy player</Button></td>
// 		<td>{item.playerStatus ? 'Player sold' : 'Free player '}</td>
// 	</tr>
// ))}
// </tbody>

// function payPlayers(player) {
// 	fetch('/playres/' + player.id)
// 		.then(result => result.json())
// 		.then(result => {
// 			setPlayerPrice(result.price)
// 			console.log(result.price)
// 			console.log('1')
// 			if (restMoney > playerPrice) {
// 				console.log(playerPrice)
// 				console.log('2')
// 				let question = window.confirm(
// 					'Are you sure you want to purchase a player?'
// 				)
// 				if (question === true) buyPlayer(player)
// 			} else alert('Not enough money')
// 		})
// }
