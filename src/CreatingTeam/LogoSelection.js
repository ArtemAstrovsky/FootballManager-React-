import s from './CreatingTeam.module.css'
import React from 'react'
import { Radio } from 'antd'


const LogoSelection = ({ setSelectedLogo, selectedLogo , logo }) => {
	console.log(logo)
	let logoItems = logo.map(item => (
		<div key={item.value} className={s.form}>
			<img src={item.link} alt="" />
			<Radio 
				className={s.form__button} 
				value={item.value}>
			</Radio>
		</div>
		))

   return ( // ! Не работает defaultValue.. 
		<div className={s.form__block}>
			<p> Choice of Logo (Avatar) Teams</p> 
			<Radio.Group className={s.form__radio} 
				onChange={e => setSelectedLogo(e.target.value)} 
				value={selectedLogo} 
				name="radiologo" 
				defaultValue={5}>
				{logoItems}
			</Radio.Group>
		</div>
	
   );
}

export default LogoSelection