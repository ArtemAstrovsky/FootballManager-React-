import s from './Game.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import ClubTable from './СlubTable'
import TabloMatches from './TabloMatches'
import Loader from '../Loader/Loader'

function Game() {
	const [isLoading, setIsLoading] = useState(true)
	const [tournamentGrid, setTournamentGrid] = useState()
	const [round, setRound] = useState(1)
	const [yourTeam, setYourTeam] = useState('')
	const [clubOpponent, setClubOpponent] = useState(0)
	const [goalsFirstTeam, setGoalsFirstTeam] = useState(0)
	const [goalsSecondTeam, setGoalsSecondTeam] = useState(0)
	const [infoClub, setInfoClub] = useState({
		id: 1,
		clubName: 'Liverpool',
		logotype: '/img/Liverpool.png',
	}) // все клубы

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setInfoClub(result)
				setYourTeam(result[15]) // Information about your team
				setIsLoading(false)
			})
		fetch('/round')
			.then(result => result.json())
			.then(result => setRound(result.round))
		fetch('/tournamentGames')
			.then(result => result.json())
			.then(result => setTournamentGrid(result[round]))
	}, [])

	function сhampionshipGames() {
		if (round === 15) alert('The tournament is completed ')
		setRound(round + 1)
		nextRound() // Round Update
		for (let i = 0; i < tournamentGrid.length; i++) {
			let firstClub = tournamentGrid[i][0]
			let secondClub = tournamentGrid[i][1]
			let goalsTeamFirst = Math.floor(
				Math.random() * infoClub[firstClub - 1].force
			) // Random result of the game (taking into account the force of the team)
			let goalsTeamSecond = Math.floor(
				Math.random() * infoClub[secondClub - 1].force
			) // Random result of the game (taking into account the force of the team)
			if (firstClub === 16) {
				setGoalsFirstTeam(Math.floor(goalsTeamFirst / 100))
				setGoalsSecondTeam(Math.floor(goalsTeamSecond / 100))
				setClubOpponent(tournamentGrid[i][1])
			}
			setTimeout(() => {
				if (goalsTeamFirst >= goalsTeamSecond) {
					setTimeout(() => {
						firstWinnerTeam(firstClub)
					}, 2500)
					secondWinnerTeam(secondClub)
					console.log('x1xx')
				} else {
					setTimeout(() => {
						firstWinnerTeam(firstClub)
					}, 2500)
					secondWinnerTeam(secondClub)
					console.log('x2xx')
				}
			}, 3000 * i)
		}
	}

	function firstWinnerTeam(firstClub) {
		fetch('/teams/' + firstClub, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...infoClub[firstClub - 1],
				game: infoClub[firstClub - 1].game + 1,
				victory: infoClub[firstClub - 1].victory + 1,
				glasses: infoClub[firstClub - 1].glasses + 3,
			}),
		})
	}
	function secondWinnerTeam(secondClub) {
		fetch('/teams/' + secondClub, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...infoClub[secondClub - 1],
				game: infoClub[secondClub - 1].game + 1,
				defeat: infoClub[secondClub - 1].defeat + 1,
				glasses: infoClub[secondClub - 1].glasses + 1,
			}),
		})
	}

	function nextRound() {
		// transition to the next round
		fetch('/round', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				round: round + 1,
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
						goalsFirstTeam={goalsFirstTeam}
						goalsSecondTeam={goalsSecondTeam}
						yourTeam={yourTeam}
						clubOpponent={clubOpponent}
						infoClub={infoClub}
					/>
				)}
				<Button
					className={s.game__button}
					onClick={сhampionshipGames}
					type="primary"
				>
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
