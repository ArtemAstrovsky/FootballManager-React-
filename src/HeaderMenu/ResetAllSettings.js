import React from 'react'
import { Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { message } from 'antd'

function ResetAllSettings() {
	let history = useHistory()

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
