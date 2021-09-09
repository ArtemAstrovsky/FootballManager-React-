import s from './CreatingTeam.module.css'
import React from 'react'
import { Radio } from 'antd'

const FormSelection = ({ setSelectedForm, selectedForm, form }) => {
	console.log(form)
	let logoForm = form.map(item => (
		<div key={item.value} className={s.form}>
			<img src={item.link} alt='' />
			<Radio className={s.form__button} value={item.value}></Radio>
		</div>
	))

	return (
		// ! Не работает defaultValue..
		<div className={s.form__block}>
			<p>Select form</p>
			<Radio.Group
				className={s.form__radio}
				onChange={e => setSelectedForm(e.target.value)}
				value={selectedForm}
				name='radioform'
				defaultValue={5}
			>
				{logoForm}
			</Radio.Group>
		</div>
	)
}

export default FormSelection
