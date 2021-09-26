import { createStore, combineReducers, applyMiddleware } from 'redux'
import { numberPlayersReducer } from './reducers/numberPlayersReducers'
import { playersReducer } from './reducers/playersReducers'
import thunk from 'redux-thunk'

// export const store = createStore(redusers, {})

const rootReducers = combineReducers({
	numberPlayers: numberPlayersReducer,
	players: playersReducer,
})

export const store = createStore(rootReducers, applyMiddleware(thunk))
