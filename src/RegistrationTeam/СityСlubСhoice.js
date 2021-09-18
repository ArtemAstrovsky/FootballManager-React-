import React from 'react'
import s from './RegistrationTeam.module.css'
import { Input, Radio, message } from 'antd'
import {
	UserOutlined,
	ExclamationCircleOutlined,
	HomeOutlined,
} from '@ant-design/icons'

const СityСlubСhoice = ({
	setCity,
	setClubName,
	difficulty,
	setDifficulty,
}) => {
	const warning = () => {
		// Description of the level of complexity
		message.warning(`From the difficulty level that you select the depends 
			on the older amount ($) to which you can count `)
	}
	return (
		<>
			<div className={s.creating__block}>
				<div className={s.creating__team}>
					<p>Team name</p>
					<Input
						size="large"
						placeholder="Team name"
						onChange={event => setClubName(event.target.value)}
						prefix={<UserOutlined />}
					/>
					<p>Тown</p>
					<Input
						size="large"
						placeholder="Тown"
						onChange={event => setCity(event.target.value)}
						prefix={<HomeOutlined />}
					/>
				</div>
				<div className={s.creating__leval}>
					<p>
						<ExclamationCircleOutlined
							style={{ fontSize: '24px' }}
							onClick={warning}
						/>
						<span>Difficulty level</span>
					</p>
					<Radio.Group
						name="radiodifficulty"
						onChange={e => setDifficulty(e.target.value)}
						value={difficulty}
						defaultValue={60000000}
					>
						<Radio value={80000000}>Heavy</Radio>
						<br />
						<Radio value={100000000}>Medium</Radio>
						<br />
						<Radio value={120000000}>Light</Radio>
						<br />
					</Radio.Group>
				</div>
			</div>
		</>
	)
}

export default СityСlubСhoice
