import s from './Сomposition.module.css'
import React from 'react'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import СompositionList from './СompositionList'
import HeaderMenu from '../HeaderMenu/HeaderMenu'

function Сomposition(props) {
	const [compositionList, setСompositionList] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		fetch('/playres')
			.then(result => result.json())
			.then(result => {
				setСompositionList(result)
				setIsLoading(false)
			})
	}, [])
	return (
		<>
			<HeaderMenu nav={props.nav} />
			<div className={s.composition}>
				<div>
					{isLoading ? (
						<Loader />
					) : (
						<СompositionList compositionList={compositionList} />
					)}
				</div>
			</div>
		</>
	)
}

export default Сomposition
