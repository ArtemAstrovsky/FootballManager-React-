import { Drawer, Button, Space} from 'antd';
import React from 'react';
import { MenuOutlined } from '@ant-design/icons';
// import s from './Header.module.css'

class DropDownMenu extends React.Component {
	state = {
		visible: false,
		placement: 'left'
	};
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	onChange = e => {
		this.setState({
			placement: e.target.value,
		});
	};

	render() {
		const {
			placement,
			visible
		} = this.state;
		return (
			<>
				<Space>
					<Button type="primary" onClick={this.showDrawer} icon={<MenuOutlined />}></Button>
				</Space>
				<Drawer
					title="Всякая левая фигня" placement={placement} closable={false} 
					onClose={this.onClose} visible={visible} key={placement}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
			</Drawer>
			</>
		);
	}
}

export default DropDownMenu