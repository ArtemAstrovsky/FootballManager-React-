import React from 'react'
import { useState, useEffect } from 'react'
import Loader from '../Loader/Loader'
import ClubList from './ClubList'

function ClubTable() {
	const [clubTable, setСlubtable] = useState()
	const [isLoadingClub, setIsLoadingClub] = useState(true)

	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setСlubtable(result)
				setIsLoadingClub(false)
			})
	}, [])

	return (
		<>
			<div>
				{isLoadingClub ? <Loader /> : <ClubList clubTable={clubTable} />}
			</div>
		</>
	)
}

export default ClubTable
