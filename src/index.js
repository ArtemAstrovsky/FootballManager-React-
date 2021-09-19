import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import state from './store/state'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
	<React.StrictMode>
		{/* <Provider store={store}> */}
		<App state={state} />
		{/* </Provider> */}
	</React.StrictMode>,
	document.getElementById('root')
)
