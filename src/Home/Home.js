import s from './Home.module.css'
import React, { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import YourTeam from './YourTeam'
import MatchList from './MatchList'
import { useHistory } from 'react-router-dom'

function Home() {
	let history = useHistory()
	const [match, setMatch] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setMatch(result)
				setIsLoading(false)
			})
		fetch('/registration')
			.then(result => result.json())
			.then(result => {
				if (result.registration === false) {
					history.push('/registration')
				}
			})
	}, [])

	return (
		<div className={s.home}>
			<div>{isLoading ? <Loader /> : <YourTeam />}</div>
			<div>
				<h1>European Premier League</h1>
			</div>
			<div>{isLoading ? <Loader /> : <MatchList matchList={match} />}</div>
		</div>
	)
}

export default Home
