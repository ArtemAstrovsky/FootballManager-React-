import React from "react"
import { Result, Button } from 'antd';
import { Link } from "react-router-dom"

function Error() {
	const styleError = {
		color : "black"
	}

	return(
		<>
			<Result
				status="404"
				title="404"
				subTitle="Sorry, the page you visited does not exist."
				extra={<Button type="primary"><Link style={styleError} to='/'>Back Home</Link></Button>}
			/>
		</>
	)
}

export default Error
