import s from './Game.module.css'
import React from "react"
import { Button } from 'antd';
import ClubTable from "./СlubTable"


function Game() {

	return(
		<>	
			<div className={s.home__conteiner}>
				<div className={s.home__tablo}>
					<div className={s.home__command}>
						<img src="../img/Club2.png" alt="" />
						<p>Название команды</p>
					</div>
					<div className={s.home__check}>
						<h2>Match Championship</h2>
						<p>
							<span>2</span>
							<span>-</span>
							<span>0</span>
						</p>
					</div>
					<div className={s.home__command}>
						<img src="../img/Liverpool.png" alt="" />
						<p>Название команды</p>
					</div>
				</div>
				<div className={s.home__button}>
					<Button type="primary">Game</Button>
				</div>
			</div>
			<div className={s.clublist__conteiner}>
				<div className={s.home__clubtable}>
					<div>
						<img src="../img/EuropeaLeague.png" alt="" />
						<h1>European Premier League</h1>
					</div>
					<ClubTable />
				</div>
			</div>
		</>
	)
}

export default Game