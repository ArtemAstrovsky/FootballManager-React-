import s from './Сomposition.module.css'
import React from 'react'
import { Button } from 'antd'

function СompositionList(props) {
	function salePlayers(player) {
		fetch('/playres/' + player.id, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ ...player, playerStatus: true }),
		})
	}
	return (
		<div className={s.headerlist}>
			<h1>Team composition</h1>
			<table className={s.composition}>
				<thead className={s.composition__thead}>
					<tr>
						<th>Player name</th>
						<th>Power player</th>
						<th>Player value</th>
						<th>Sale value</th>
						<th>Selling a player</th>
					</tr>
				</thead>
				{props.compositionList.map((item, index) => (
					<>
						{!item.playerStatus && (
							<tbody className={s.composition__tbody}>
								<tr key={item.id}>
									<td>{item.playerName}</td>
									<td>{item.force}</td>
									<td>{item.price}</td>
									<td>{Math.floor(Math.random() * 10)}%</td>
									<td>
										<Button
											type="link"
											id={s.button}
											onClick={() => salePlayers(item)}
										>
											Sale player
										</Button>
									</td>
								</tr>
							</tbody>
						)}
					</>
				))}
			</table>
		</div>
	)
}

export default СompositionList
