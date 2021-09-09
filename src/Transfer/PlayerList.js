import React from 'react'
import { Button } from 'antd'
import s from './Transfer.module.css'
import { useState, useEffect } from 'react'

const PlayerList = props => {
	const [playerPrice, setPlayerPrice] = useState('')
	const [yourTeam, setYourTeam] = useState([])
	// const [restMoney, setRestMoney] = useState(props.balanse)

	useEffect(() => {
		fetch('/yourteam/1')
			.then(result => result.json())
			.then(result => setYourTeam(result))
	}, [])

	function payPlayers(player) {
		fetch('/playres/' + player.id)
			.then(result => result.json())
			.then(result => {
				setPlayerPrice(result.price)
				console.log(result.price)
				console.log('1')
				if (props.balanse > playerPrice) {
					console.log(playerPrice)
					console.log('2')
					let question = window.confirm(
						'Are you sure you want to purchase a player?'
					)
					if (question === true) buyPlayer(player)
				} else alert('Not enough money')
			})
	}

	function buyPlayer(player) {
		// setRestMoney = (restMoney - playerPrice)
		let balanse = props.balanse - playerPrice
		console.log(player)
		console.log(balanse)
		console.log('3')
		fetch('/playres/' + player.id, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...player,
				playerStatus: !player.playerStatus,
				difficulty: balanse,
			}),
		})
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
		fetch('/yourteam/1', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...yourTeam,
				difficulty: balanse,
			}),
		})
	}

	return (
		<div className={s.headerlist}>
			{props.transferList.map(item => (
				<div className={s.wrapper}>
					<div className={[s.card__wrapper, s.first].join(' ')}>
						<div className={s.front__card}>
							<img src={item.img} alt={item.it} width='100' height='100' />
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
									type='link'
									id={s.button}
									onClick={() => payPlayers(item)}
								>
									Buy player
								</Button>
							) : (
								<Button type='link' id={s.button} disabled>
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
