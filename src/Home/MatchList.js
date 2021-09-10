import React from 'react'
import s from './Home.module.css'
import { message } from 'antd'

const MatchList = props => {
	const info2 = props => {
		message.success(
			<div className={s.clubinfo}>
				<img src={props.img} alt={props.id} width='100' height='100' />
				<h2> {props.clubName} </h2>
				<h3>{'Power club : ' + props.force} </h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
					repellendus amet repudiandae, in consectetur, illum ad doloribus
					ducimus quibusdam itaque quos suscipit placeat modi, voluptatum saepe
					sed eaque dolores velit.
				</p>
			</div>
		)
	}
	return (
		<div className={s.matchList__conteiner}>
			<table className={s.matchList}>
				<thead className={s.matchList__thead}>
					<tr>
						<th></th>
						<th>Club name</th>
						<th>Game</th>
						<th>Victory</th>
						<th>Defeat</th>
						<th>Glasses</th>
					</tr>
				</thead>
				<tbody className={s.matchList__tbody}>
					{props.matchList.map((item, index) => (
						<tr key={item.id}>
							<td>{index + 1}</td>
							<td onClick={() => info2(item)}>{item.clubName}</td>
							<td>{item.game}</td>
							<td>{item.victory}</td>
							<td>{item.defeat}</td>
							<td>{item.glasses}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default MatchList
