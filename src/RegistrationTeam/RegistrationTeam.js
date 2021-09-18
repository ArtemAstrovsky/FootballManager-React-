import s from './RegistrationTeam.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import Uniform from './Uniform'
import Logotype from './Logotype'
import СityСlubСhoice from './СityСlubСhoice'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

const RegistrationTeam = props => {
	const idMyTeam = 16
	const [city, setCity] = useState('')
	const [clubName, setClubName] = useState('')
	const [uniform, setUniform] = useState(1)
	const [logotype, setLogotype] = useState(6)
	const [difficulty, setDifficulty] = useState(1)
	const [yourTeam, setYourTeam] = useState([])
	let history = useHistory()

	useEffect(() => {
		fetch('/teams/' + idMyTeam)
			.then(result => result.json())
			.then(result => setYourTeam(result))
	}, [])

	function saveInformationClub() {
		fetch('/registration', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				registration: true,
			}),
		})
		//  Loading to the server selected command data
		fetch('/teams/' + idMyTeam, {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...yourTeam,
				clubName,
				difficulty,
				city,
				logotype,
				uniform,
			}),
		}).then(r => {
			history.push('/')
			message.success(`Team ${clubName} has been created`)
		})
	}

	return (
		<div className={s.container}>
			<div className={s.header}>
				<img src="../img/logo.png" alt="" />
				<div className={s.header__title}>
					<h1>FOOTBALL MANAGER IТ FOOTBALL</h1>
					<p>Create a dream team and bring it to victory </p>
				</div>
				<img src="../img/Cup6.png" alt="" />
			</div>
			<div className={s.creating}>
				<Row>
					<Col className={s.creating__col} span={11}>
						<СityСlubСhoice
							setCity={setCity}
							setClubName={setClubName}
							setDifficulty={setDifficulty}
							difficulty={difficulty}
						/>
						<div className={s.creating__button}>
							<Button
								id={s.button}
								onClick={saveInformationClub}
								type="primary"
							>
								Registration of team
							</Button>
						</div>
					</Col>
					<Col className={s.creating__col} span={11}>
						<div>
							<Uniform
								className={s.selects}
								uniform={uniform}
								setUniform={setUniform}
								form={props.form}
							/>
							<Logotype
								className={s.selects}
								setLogotype={setLogotype}
								logotype={logotype}
								logo={props.logo}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default RegistrationTeam
