import React, { useEffect, useState } from 'react'
import PlayerList from './PlayerList'
import Loader from '../Loader/Loader'
// import s from './Transfer.module.css'

function TransferList() {
   const [transferList, setTransferList] = useState([])
   const [isLoading, setIsLoading] = useState(true)

	const sortName = () => {
		console.log("0")
	}

   useEffect(() => {
      fetch('/playres')
         .then(result => result.json())
         .then((result) => {
				console.log(result)
            setTransferList(result)
            setIsLoading(false)
         }
   )}, [])

   return(
      <div>{ isLoading ? <Loader /> : <PlayerList transferList={transferList} sortName={sortName}/>}</div>
   );
}

export default TransferList