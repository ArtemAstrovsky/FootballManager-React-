import React, { useEffect, useState } from 'react'
import s from './Home.module.css'

function YourTeam() {
	const [yourTeam , setYourTeam] = useState([])

	useEffect(() => {
		fetch('/yourteam/1')
			.then(result => result.json())
			.then((result) => {
				setYourTeam(result)
			}
	)}, [])
	return ( // Сразу идет рендер, потом догоняет юз эффект....
		<div className={s.yourinfo}>
			<div className={s.yourteam}>
				<img src={yourTeam.img} alt={yourTeam.id} width="200" height="200"/>
				<div className={s.info}>
					<h1>FC {yourTeam.clubName}</h1>
					<p>City : {yourTeam.city}</p>
					<p>Forse Club : {yourTeam.force}</p>
					<p>Game : {yourTeam.game}</p>
					<p>Victory : {yourTeam.victory}</p>
					<p>Number of players : {yourTeam.numberofplayers}</p>
				</div>
			</div>
			<div className={s.yourteam__img}>                              
				<img src="../img/EuropeaLeague.png" alt="" />	
			</div>

		</div>
	);
}

export default YourTeam;



//   "yourteam": [
//     {
//       "id": 1,
//       "clubName": "Zenit",
//       "force": 0,
//       "img": "../img/Club8.png",
//       "game": 0,
//       "victory": 0,
//       "draw": 0,
//       "defeat": 0,
//       "glasses": 0,
//       "money": 0,
//       "numberofplayers": 0,
//       "difficulty": 50000000,
//       "city": "Piter",
//       "form": "../img/form4.png",
// 		"registration": false,
// 		"login": false
//     }