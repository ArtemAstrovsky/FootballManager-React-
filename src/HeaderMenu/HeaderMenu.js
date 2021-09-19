import React from 'react'
import { Layout, Menu } from 'antd'
import DropDownMenu from './DropDownMenu'
import { Link, useLocation } from 'react-router-dom'
import s from './Header.module.css'
import { useState, useEffect } from 'react'

const { Header } = Layout

function HeaderMenu(props) {
	const [balanceTeam, setBalanceTeam] = useState()
	const idMyTeam = 15
	let location = useLocation()
	let navItems = props.nav.map(item => (
		<Menu.Item key={item.link}>
			<Link to={item.link}>{item.text}</Link>
		</Menu.Item>
	))
	useEffect(() => {
		fetch('/teams')
			.then(result => result.json())
			.then(result => {
				setBalanceTeam(result[idMyTeam].difficulty)
			})
	}, [])

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
							<DropDownMenu balanceTeam={balanceTeam} />
						</Menu.Item>
						{navItems}
					</Menu>
				</Header>
			</Layout>
		</>
	)
}

export default HeaderMenu
