import React from 'react'
import s from './Home.module.css'

const ClubList = (props) => {

   return (
      <table className={s.clublist}>
			<thead className={s.clublist__thead}>
				<tr>
					<th></th>
					<th>Club name</th>
					<th>Game</th>
					<th>draw</th>
					<th>Defeat</th>
					<th>Glasses</th>
				</tr>
			</thead>
			<tbody className={s.clublist__tbody}>
				{props.clubTable.map((item,index) => (  
					<tr key = {item.id} > 
						<td>{index+1}</td>
						<td>{item.clubName}</td>
						<td>{item.game}</td>
						<td>{item.draw}</td>
						<td>{item.defeat}</td>
						<td>{item.glasses}</td>
					</tr>    
            ))}
         </tbody>
      </table>
   );
}


export default ClubList
