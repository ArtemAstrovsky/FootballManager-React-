import s from './CreatingTeam.module.css'
import React from 'react'
import { Radio } from 'antd'

const logo = [
	{"link" : "../img/Club1.png", "value" : "../img/Club1.png"},
	{"link" :"../img/Club2.png", "value" : "../img/Club2.png"},
	{"link" : "../img/Club3.png", "value" : "../img/Club3.png"},
	{"link" : "../img/Club4.png", "value" : "../img/Club4.png"},
	{"link" : "../img/Club5.png", "value" : "../img/Club5.png"},
	{"link" : "../img/Club6.png", "value" : "../img/Club6.png"},
	{"link" : "../img/Club7.png", "value" : "../img/Club7.png"},
	{"link" : "../img/Club8.png", "value" : "../img/Club8.png"},
]

const LogoSelection = ({ setSelectedLogo, selectedLogo }) => {

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