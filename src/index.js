import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state2 from './store/state'
import { Provider } from 'react-redux'
import { store } from './store/store'

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App state={state2} />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
)
