import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state from './store/state'
// import store from './store/store'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const defaultState = {
	numberPlayers: 0,
}

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_PLAYER':
			return {
				...state,
				numberPlayers: state.numberPlayers + action.numberPlayers,
			}
		case 'GET_PLAYER':
			return {
				...state,
				numberPlayers: state.numberPlayers - action.numberPlayers,
			}
		default:
			return state
	}
}

const store = createStore(reducer)

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App state={state} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
