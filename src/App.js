import './App.css'
import React from 'react'
import Game from './Game/Game'
import Transfer from './Transfer/Transfer'
import Home from './Home/Home'
import RegistrationTeam from './RegistrationTeam/RegistrationTeam'
import Registration from './Registration/Registration'
import Error from './Error/Error'
import ClubPlayers from './Сomposition/Сomposition'
import Academyclub from './Academyclub/Academyclub'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App(props) {
	return (
		<Router>
			<Switch>
				<Route exact path="/" render={() => <Home nav={props.state.nav} />} />
				<Route
					exact
					path="/game"
					render={() => (
						<Game
							nav={props.state.nav}
							сlubGames={props.state.сlubGames}
							otherGames={props.state.otherGames}
						/>
					)}
				/>
				<Route
					exact
					path="/transfer"
					render={() => <Transfer nav={props.state.nav} />}
				/>
				<Route
					exact
					path="/registrationteam"
					render={() => (
						<RegistrationTeam form={props.state.form} logo={props.state.logo} />
					)}
				/>
				<Route
					exact
					path="/clubplayers"
					render={() => <ClubPlayers nav={props.state.nav} />}
				/>
				<Route exact path="/registrationteam" component={RegistrationTeam} />
				<Route
					exact
					path="/academyclub"
					render={() => <Academyclub nav={props.state.nav} />}
				/>
				<Route exact path="/registration" component={Registration} />
				<Route component={Error} />
			</Switch>
		</Router>
	)
}

export default App

// start of a new project
// npm install -g json-server
// npx json-server --watch db.json (server start)
// npx create-react-app name (creating)
// cd name
// npm run start - (start program)
// npm install react-router react-router-dom --save
// import { useHistory } from 'react-router-dom'  (history)
// npm install react-devtools --save
// npm install react-redux --save
// npm install react-redux --save
// npm install redux-thunk --save
