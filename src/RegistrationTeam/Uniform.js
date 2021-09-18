import s from './RegistrationTeam.module.css'
import React from 'react'
import { Radio } from 'antd'

const Uniform = ({ setUniform, uniform, form }) => {
	let logoUniform = form.map(item => (
		<div key={item.value} className={s.form}>
			<img src={item.link} alt="" />
			<Radio className={s.form__button} value={item.value}></Radio>
		</div>
	))

	return (
		<div className={s.form__block}>
			<p>Select form</p>
			<Radio.Group
				className={s.form__radio}
				onChange={e => setUniform(e.target.value)}
				value={uniform}
				name="radioform"
				defaultValue={5}
			>
				{logoUniform}
			</Radio.Group>
		</div>
	)
}

export default Uniform
