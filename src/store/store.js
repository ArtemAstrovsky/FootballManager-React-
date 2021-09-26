import { createStore, combineReducers } from 'redux'
import { numberPlayersReducer } from './reducers/numberPlayersReducers'

// export const store = createStore(redusers, {})

const rootReducers = combineReducers({
	numberPlayers: numberPlayersReducer,
})

export const store = createStore(rootReducers)
