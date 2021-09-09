import s from './CreatingTeam.module.css'
import React from 'react'
import { useState, useEffect } from 'react'
import { Row, Col, Button } from 'antd'
import FormSelection from './FormSelection'
import LogoSelection from './LogoSelection'
import СityСlubСhoice from './СityСlubСhoice'

const CreatingTeam = props => {
	// изменить название
	const [city, setCity] = useState('')
	const [teamName, setTeamName] = useState('')
	const [selectedForm, setSelectedForm] = useState(1)
	const [selectedLogo, setSelectedLogo] = useState(6)
	const [selectedDifficulty, setSelectedDifficulty] = useState(1)
	const [yourTeam, setYourTeam] = useState([])

	useEffect(() => {
		fetch('/yourteam/1')
			.then(result => result.json())
			.then(result => setYourTeam(result))
	}, [])

	function inform(props) {
		fetch('/yourteam/1', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				...yourTeam,
				clubName: teamName,
				difficulty: selectedDifficulty,
				city: city,
				img: selectedLogo,
				form: selectedForm,
			}),
		})
	}

	return (
		<div className={s.container}>
			<div className={s.header}>
				<img src='../img/logo.png' alt='' />
				<div className={s.header__title}>
					<h1>FOOTBALL MANAGER IТ FOOTBALL</h1>
					<p>Create a dream team and bring it to victory </p>
				</div>
				<img src='../img/Cup6.png' alt='' />
			</div>
			<div className={s.creating}>
				<Row>
					<Col className={s.creating__col} span={11}>
						<СityСlubСhoice
							setCity={setCity}
							setTeamName={setTeamName}
							setSelectedDifficulty={setSelectedDifficulty}
							selectedDifficulty={selectedDifficulty}
						/>
						<div className={s.creating__button}>
							<Button id={s.button} onClick={inform} type='primary'>
								Create a team
							</Button>
						</div>
					</Col>
					<Col className={s.creating__col} span={11}>
						<div>
							<FormSelection
								className={s.selects}
								selectedForm={selectedForm}
								setSelectedForm={setSelectedForm}
								form={props.form}
							/>
							<LogoSelection
								className={s.selects}
								setSelectedLogo={setSelectedLogo}
								selectedLogo={selectedLogo}
								logo={props.logo}
							/>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default CreatingTeam
