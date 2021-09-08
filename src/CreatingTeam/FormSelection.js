import s from './CreatingTeam.module.css'
import React from 'react'
import {Radio} from 'antd'

const form = [
	{"link" : "../img/form.png", "value" : "../img/form.png"},
	{"link" : "../img/form2.png", "value" : "../img/form2.png"},
	{"link" : "../img/form3.png", "value" : "../img/form3.png"},
	{"link" : "../img/form4.png", "value" : "../img/form4.png"},
	{"link" : "../img/form5.png", "value" : "../img/form5.png"},
	{"link" : "../img/form6.png", "value" : "../img/form6.png"},
	{"link" : "../img/form7.png", "value" : "../img/form7.png"},
	{"link" : "../img/form8.png", "value" : "../img/form8.png"},
	{"link" : "../img/form9.png", "value" : "../img/form9.png"},
	{"link" : "../img/form10.png", "value" : "../img/form10.png"},
	{"link" : "../img/form11.png", "value" : "../img/form11.png"},
	{"link" : "../img/form1.png", "value" : "../img/form1.png"},
]

const FormSelection = ({ setSelectedForm, selectedForm }) => {

	let logoForm = form.map(item => (
		<div key={item.value} className={s.form}>
			<img  src={item.link} alt="" />
			<Radio 
				className={s.form__button} 
				value={item.value}>
			</Radio>
		</div>
		))

   return ( // ! Не работает defaultValue.. 
		<div className={s.form__block}>
			<p>Select form</p> 
			<Radio.Group className={s.form__radio} 
				onChange={e => setSelectedForm(e.target.value)} 
				value={selectedForm} 
				name="radioform" 
				defaultValue={5}>
				{logoForm}
			</Radio.Group>
		</div>
	
   );
}

export default FormSelection