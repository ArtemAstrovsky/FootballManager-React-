import s from './Game.module.css'
import React from 'react'
import { Button } from 'antd'
import ClubTable from './СlubTable'
import { useState, useEffect } from 'react'

let round = 1

let game1 = {
	1: [[16, 1]],
	2: [[16, 9]],
	3: [[16, 2]],
	4: [[16, 10]],
	5: [[16, 3]],
	6: [[16, 11]],
	7: [[16, 4]],
	8: [[16, 12]],
	9: [[16, 5]],
	10: [[16, 13]],
	11: [[16, 6]],
	12: [[16, 14]],
	13: [[16, 7]],
	14: [[16, 15]],
	15: [[16, 8]],
}
// let games2 = {
// 	1: [
// 		[2, 15],
// 		[3, 14],
// 		[4, 13],
// 		[5, 12],
// 		[6, 11],
// 		[7, 10],
// 		[8, 11],
// 	],
// 	2: [
// 		[10, 8],
// 		[11, 7],
// 		[12, 6],
// 		[13, 5],
// 		[14, 4],
// 		[15, 3],
// 		[1, 2],
// 	],
// 	3: [
// 		[3, 1],
// 		[4, 15],
// 		[5, 14],
// 		[6, 13],
// 		[7, 12],
// 		[8, 11],
// 		[9, 10],
// 	],
// 	4: [
// 		[11, 9],
// 		[12, 8],
// 		[13, 7],
// 		[14, 6],
// 		[15, 5],
// 		[1, 4],
// 		[2, 3],
// 	],
// 	5: [
// 		[4, 2],
// 		[5, 1],
// 		[6, 15],
// 		[7, 14],
// 		[8, 13],
// 		[9, 12],
// 		[10, 11],
// 	],
// 	6: [
// 		[12, 10],
// 		[13, 9],
// 		[14, 8],
// 		[15, 7],
// 		[1, 6],
// 		[2, 5],
// 		[3, 4],
// 	],
// 	7: [
// 		[5, 3],
// 		[6, 2],
// 		[7, 1],
// 		[8, 15],
// 		[9, 14],
// 		[10, 13],
// 		[11, 12],
// 	],
// 	8: [
// 		[13, 11],
// 		[14, 10],
// 		[15, 9],
// 		[1, 8],
// 		[2, 7],
// 		[3, 6],
// 		[4, 5],
// 	],
// 	9: [
// 		[6, 4],
// 		[7, 3],
// 		[8, 2],
// 		[9, 1],
// 		[10, 15],
// 		[11, 14],
// 		[12, 13],
// 	],
// 	10: [
// 		[14, 12],
// 		[15, 11],
// 		[1, 10],
// 		[2, 9],
// 		[3, 8],
// 		[4, 7],
// 		[5, 6],
// 	],
// 	11: [
// 		[7, 5],
// 		[8, 4],
// 		[9, 3],
// 		[10, 2],
// 		[11, 1],
// 		[12, 15],
// 		[13, 14],
// 	],
// 	12: [
// 		[15, 13],
// 		[1, 12],
// 		[2, 11],
// 		[3, 10],
// 		[4, 9],
// 		[5, 8],
// 		[6, 7],
// 	],
// 	13: [
// 		[8, 6],
// 		[9, 5],
// 		[10, 4],
// 		[11, 3],
// 		[12, 2],
// 		[13, 1],
// 		[14, 15],
// 	],
// 	14: [
// 		[1, 14],
// 		[2, 13],
// 		[3, 12],
// 		[4, 11],
// 		[5, 10],
// 		[6, 9],
// 		[7, 8],
// 	],
// 	15: [
// 		[9, 7],
// 		[10, 6],
// 		[11, 5],
// 		[12, 4],
// 		[13, 3],
// 		[14, 2],
// 		[15, 1],
// 	],
// }

function Game() {
	const [infoClub, setInfoClub] = useState('')
	// const [myMatches, setMyMatches] = useState('')
	const [yourTeam, setYourTeam] = useState([])

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => setInfoClub(result))
		fetch('/yourteam/16')
			.then(result => result.json())
			.then(result => setYourTeam(result))
	})

	function games1() {
		let club1 = [game1[round][0][1]].join('')
		let teamCheck1 = Math.random() * yourTeam.force
		let teamCheck2 = Math.random() * infoClub[club1 - 1].force
		console.log(yourTeam.game)
		if (teamCheck1 >= teamCheck2) {
			fetch3()
			fetch2(club1)
			console.log('xxx')
		} else {
			fetch1(club1)
			fetch4()
			console.log('x2xx')
		}
		round = round + 1
		console.log(yourTeam.game)
	}
	function fetch3() {
		fetch('/yourteam/16', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...yourTeam,
				game: yourTeam.game + 1,
				victory: yourTeam.victory + 1,
				glasses: yourTeam.glasses + 3,
			}),
		})
	}
	function fetch4() {
		fetch('/yourteam/16', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...yourTeam,
				game: yourTeam.game + 1,
				defeat: yourTeam.defeat + 1,
			}),
		})
	}

	// function games() {
	// 	// for (let i = 0; i < 6; i++) {
	// 	// 	let club1 = [games1[round][i][0]].join('')
	// 	// 	let club2 = [games2[round][i][1]].join('')
	// 	// 	let teamCheck1 = Math.random() * 10
	// 	// 	let teamCheck2 = Math.random() * 10
	// 	// 	console.log(club1)
	// 	// 	console.log(club2)
	// 	// 	console.log(infoClub[club1 - 1], infoClub[club2 - 1])
	// 	// 	if (teamCheck1 >= teamCheck2) {
	// 	// 		fetch1(club1)
	// 	// 		fetch2(club2)
	// 	// 	} else {
	// 	// 		fetch1(club2)
	// 	// 		fetch2(club1)
	// 	// 	}
	// 	// }
	// 	// round = round + 1
	// }
	function fetch1(club) {
		fetch('/teams/' + club, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...infoClub[club - 1],
				game: infoClub[club - 1].game + 1,
				victory: infoClub[club - 1].victory + 1,
				glasses: infoClub[club - 1].glasses + 3,
			}),
		})
	}
	function fetch2(club) {
		fetch('/teams/' + club, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...infoClub[club - 1],
				game: infoClub[club - 1].game + 1,
				defeat: infoClub[club - 1].defeat + 1,
			}),
		})
	}

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
				<Button className={s.game__button} onClick={games1} type='primary'>
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
