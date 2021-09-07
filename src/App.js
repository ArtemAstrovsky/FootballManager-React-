import './App.css'
import HeaderMenu from './Header/Header'
import React from 'react'
import Game from './Game/Game'
import Transfer from './Transfer/Transfer'
import Home from './Home/Home'
import CreatingTeam from './CreatingTeam/CreatingTeam'
import Registration from './Registration/Registration'
import Error from './Error/Error'
import Composition from './Сomposition/Сomposition'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
	return (
		<div>
		<Router>
			<HeaderMenu />
			<Switch>
				<Route exact path="/" component={Home}/>
				<Route exact path="/game" component={Game}/>                   
				<Route exact path="/transfer" component={Transfer}/>
				<Route exact path="/creatingteam" component={CreatingTeam}/>
				<Route exact path="/composition" component={Composition}/>
				<Route exact path="/creatingteam" component={CreatingTeam}/>
				<Route exact path="/registration" component={Registration}/>
				<Route component={Error}/>
			</Switch>
		</Router>
		</div>
	);
}

export default App;
