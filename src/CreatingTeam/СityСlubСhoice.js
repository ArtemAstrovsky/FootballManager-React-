import React from 'react'
import s from './CreatingTeam.module.css'
import { Input , Radio , message} from 'antd'
import { UserOutlined , ExclamationCircleOutlined , HomeOutlined} from '@ant-design/icons'


const СityСlubСhoice = ({  setCity, setTeamName, selectedDifficulty, setSelectedDifficulty }) => {
	
	const warning = () => { // Description of the level of complexity 
		message.warning(`From the difficulty level that you select the depends 
			on the older amount ($) to which you can count `)
	}
	return (
		<>
			<div className={s.creating__block}>
				<div className={s.creating__team}>
					<p>Team name</p>
					<Input size="large" 
						placeholder="Team name" 
						onChange={event => setTeamName(event.target.value)} 
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
					<p><ExclamationCircleOutlined 
						style={{ fontSize: '24px'}} 
						onClick={warning}/><span>Difficulty level</span></p> 
					<Radio.Group name="radiodifficulty" 
						onChange={e => setSelectedDifficulty(e.target.value)}
						value={selectedDifficulty} 
						defaultValue={30000000}>
						<Radio value={30000000}>Heavy</Radio><br/>
						<Radio value={40000000}>Medium</Radio><br/>
						<Radio value={50000000}>Light</Radio><br/>
					</Radio.Group>
				</div>
			</div>
		</>
	);
}


export default СityСlubСhoice