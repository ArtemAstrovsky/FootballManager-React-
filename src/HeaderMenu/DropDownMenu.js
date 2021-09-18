import { Drawer, Button, Space, Statistic } from 'antd'
import React from 'react'
import { MenuOutlined } from '@ant-design/icons'
import ResetAllSettings from './ResetAllSettings'
// import s from './Header.module.css'

class DropDownMenu extends React.Component {
	constructor(props) {
		super(props)
		this.settingsReset = this.props.settingsReset
	}
	state = {
		visible: false,
		placement: 'left',
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		})
	}

	onClose = () => {
		this.setState({
			visible: false,
		})
	}
	onChange = e => {
		this.setState({
			placement: e.target.value,
		})
	}

	render() {
		const { placement, visible } = this.state
		return (
			<>
				<Space>
					<Button
						type="primary"
						onClick={this.showDrawer}
						icon={<MenuOutlined />}
					></Button>
				</Space>
				<Drawer
					title={
						<Statistic
							title="Balance"
							prefix="$"
							value={this.props.balanceTeam}
						/>
					}
					placement={placement}
					closable={false}
					onClose={this.onClose}
					visible={visible}
					key={placement}
				>
					<p>
						<ResetAllSettings />
					</p>
					<p>Some contents...</p>
				</Drawer>
			</>
		)
	}
}

export default DropDownMenu
