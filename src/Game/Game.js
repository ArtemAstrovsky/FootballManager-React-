import s from './Game.module.css'
import React from 'react'
import { Button } from 'antd'
import ClubTable from './СlubTable'

function Game() {
	return (
		<div className={s.game}>
			<div className={s.game__conteiner}>
				<div className={s.game__tablo}>
					<div className={s.game__command}>
						<img src='../img/Club6.png' alt='' />
						<p>Team name</p>
					</div>
					<div className={s.game__check}>
						<h2>Match Championship</h2>
						<p>
							<span>2</span>
							<span>-</span>
							<span>0</span>
						</p>
					</div>
					<div className={s.game__command}>
						<img src='../img/Liverpool.png' alt='' />
						<p>Team name</p>
					</div>
				</div>
				<Button className={s.game__button} type='primary'>
					Game
				</Button>
			</div>
			<div className={s.clublist__conteiner}>
				<div className={s.game__clubtable}>
					<h1>Match schedule</h1>
					<ClubTable />
				</div>
			</div>
		</div>
	)
}

export default Game
