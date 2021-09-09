import React from 'react'
import s from './Game.module.css'

const ClubList = props => {
	return (
		<div className={s.clublist__conteiner}>
			<table className={s.clublist}>
				<thead className={s.clublist__thead}>
					<tr>
						<th></th>
						<th>Tournament</th>
						<th>Rival</th>
						<th>Result</th>
					</tr>
				</thead>
				<tbody className={s.clublist__tbody}>
					{props.clubTable.map((item, index) => (
						<tr key={item.id}>
							<td>{index + 1}</td>
							<td>European Premier League</td>
							<td>{item.clubName}</td>
							<td>-</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default ClubList
