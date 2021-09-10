import s from './Game.module.css'
import { useState, useEffect } from 'react'

function TabloMatches(props) {
	console.log(props.infoClub)
	console.log(props.clubOpponent)
	const [resultsGames, setResultsGames] = useState('')
	console.log('xxx')
	console.log(props.infoClub[0])
	useEffect(() => {
		fetch('/сhampionshipGames')
			.then(result => result.json())
			.then(result => setResultsGames(result))
	}, [])

	return (
		<>
			<div className={s.game__tablo}>
				<div className={s.game__command}>
					<img
						src={props.yourTeam.img}
						alt={props.yourTeam.id}
						width="200"
						height="200"
					/>
					<p>FC {props.yourTeam.clubName}</p>
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
					<img
						src={props.infoClub[props.clubOpponent].img}
						alt={props.infoClub[props.clubOpponent].id}
						width="200"
						height="200"
					/>
					<p>FC {props.infoClub[props.clubOpponent].clubName}</p>
				</div>
			</div>
		</>
	)
}

export default TabloMatches
