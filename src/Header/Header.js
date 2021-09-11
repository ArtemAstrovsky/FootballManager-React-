import React from 'react'
import { Layout, Menu } from 'antd'
import DropDownMenu from './DropDownMenu'
import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'

const { Header } = Layout

function HeaderMenu(props) {
	let location = useLocation()
	let navItems = props.nav.map(item => (
		<Menu.Item key={item.link}>
			<Link to={item.link}>{item.text}</Link>
		</Menu.Item>
	))

	return (
		<>
			<Layout className={s.layout}>
				<Header>
					<div className={s.logo} />
					<Menu
						theme="dark"
						mode="horizontal"
						selectedKeys={[location.pathname]}
					>
						<Menu.Item key="0">
							<DropDownMenu />
						</Menu.Item>
						{navItems}
					</Menu>
				</Header>
			</Layout>
		</>
	)
}

export default HeaderMenu
// defaultSelectedKeys={['2']}
