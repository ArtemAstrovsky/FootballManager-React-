import s from './Game.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import ClubTable from './СlubTable'
import TabloMatches from './TabloMatches'
import Loader from '../Loader/Loader'

let round = 1

function Game(props) {
	const [isLoading, setIsLoading] = useState(true)
	const [infoClub, setInfoClub] = useState([
		{
			id: 1,
			clubName: 'Liverpool',
			img: '/img/Liverpool.png',
		},
	])
	// const [myMatches, setMyMatches] = useState('');
	const [yourTeam, setYourTeam] = useState([])
	const [clubOpponent, setClubOpponent] = useState(0)

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setIsLoading(false)
				setInfoClub(result)
			})
		fetch('/yourteam/16')
			.then(result => result.json())
			.then(result => setYourTeam(result))
	}, [])

	function games1() {
		let club1 = [props.сlubGames[round][0][1]].join('')
		let teamCheck1 = Math.random() * yourTeam.force
		let teamCheck2 = Math.random() * infoClub[club1 - 1].force
		setClubOpponent([props.сlubGames[round][0][1]].join(''))
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
				// сhampionshipGames: (yourTeam.сhampionshipGames[round] = 'win'),
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
				// сhampionshipGames: (yourTeam.сhampionshipGames[round] = 'losing'),
			}),
		})
	}

	// function games() {
	// for (let i = 0; i < 6; i++) {
	// 	let club1 = [props.otherGames[round][i][0]].join('')
	// 	let club2 = [props.otherGames[round][i][1]].join('')
	// 	let teamCheck1 = Math.random() * 10
	// 	let teamCheck2 = Math.random() * 10
	// 	console.log(club1)
	// 	console.log(club2)
	// 	console.log(infoClub[club1 - 1], infoClub[club2 - 1])
	// 	if (teamCheck1 >= teamCheck2) {
	// 		fetch1(club1)
	// 		fetch2(club2)
	// 	} else {
	// 		fetch1(club2)
	// 		fetch2(club1)
	// 	}
	//	 }
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
				{isLoading ? (
					<Loader />
				) : (
					<TabloMatches
						yourTeam={yourTeam}
						clubOpponent={clubOpponent}
						infoClub={infoClub}
					/>
				)}
				<Button className={s.game__button} onClick={games1} type="primary">
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
