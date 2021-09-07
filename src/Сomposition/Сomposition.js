import s from './Сomposition.module.css'
import React from "react"
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import СompositionList from './СompositionList'


function Сomposition() {
	const [compositionList, setСompositionList] = useState([])
   const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
      fetch('/playres')
         .then(result => result.json())
         .then((result) => {
				console.log(result)
            setСompositionList(result)
            setIsLoading(false)
         }
   )}, [])
	return(
		<div className={s.composition}>
			<div>{ isLoading ? <Loader /> : <СompositionList compositionList={compositionList} />}</div>
		</div>
	)
}

export default Сomposition