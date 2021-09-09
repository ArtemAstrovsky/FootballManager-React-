import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList'
import Loader from '../Loader/Loader'

function TransferList(props) {
	const [transferList, setTransferList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('/playres')
			.then(result => result.json())
			.then(result => {
				setTransferList(result)
				setIsLoading(false)
			})
	}, [])

	return (
		<div>
			{isLoading ? (
				<Loader />
			) : (
				<PlayerList transferList={transferList} balanse={props.balanse} />
			)}
		</div>
	)
}

export default TransferList
