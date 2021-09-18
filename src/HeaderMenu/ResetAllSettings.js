import React from 'react'
import { useState, useEffect } from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

function ResetAllSettings() {
	const [settingsReset, setSettingsReset] = useState([])
	let history = useHistory()

	useEffect(() => {
		fetch('/reset')
			.then(result => result.json())
			.then(result => {
				setSettingsReset(result)
			})
	}, [])

	function resetSettings() {
		fetch('/registration', {
			method: 'PUT',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				registration: false,
			}),
		})
		message.success(`Club removed, you can create a new club `)
		history.push('/registration')
		// fetch('/teams', {
		// 	method: 'PUT',
		// 	headers: {
		// 		Accept: 'application/json',
		// 		'Content-Type': 'application/json',
		// 	},
		// 	body: JSON.stringify({
		// 		...settingsReset,
		// 	}),
		// })
	}
	return (
		<>
			<Button type="link" onClick={() => resetSettings()}>
				Reset all settings
			</Button>
		</>
	)
}

export default ResetAllSettings
