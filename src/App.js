import './App.css'
import HeaderMenu from './HeaderMenu/HeaderMenu'
import React from 'react'
import Game from './Game/Game'
import Transfer from './Transfer/Transfer'
import Home from './Home/Home'
import RegistrationTeam from './RegistrationTeam/RegistrationTeam'
import Registration from './Registration/Registration'
import Error from './Error/Error'
import ClubPlayers from './Сomposition/Сomposition'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(props) {
	return (
		<div>
			<Router>
				<HeaderMenu nav={props.state.nav} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route
						exact
						path="/game"
						render={() => (
							<Game
								сlubGames={props.state.сlubGames}
								otherGames={props.state.otherGames}
							/>
						)}
					/>
					<Route exact path="/transfer" component={Transfer} />
					<Route
						exact
						path="/registrationteam"
						render={() => (
							<RegistrationTeam
								form={props.state.form}
								logo={props.state.logo}
							/>
						)}
					/>
					<Route exact path="/clubplayers" component={ClubPlayers} />
					<Route exact path="/registrationteam" component={RegistrationTeam} />
					<Route exact path="/academy-club" component={Home} />
					<Route exact path="/registration" component={Registration} />
					<Route component={Error} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
