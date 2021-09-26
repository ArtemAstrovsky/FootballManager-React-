const defaultState = {
	players: [],
}

const ADD_PLAYERS = 'ADD_PLAYERS'
const SELL_PLAYER = 'GET_PLAYER'

export const playersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PLAYERS:
			return {
				...state,
				players: [...state.players, ...action.payload],
			}
		case SELL_PLAYER:
			return {
				...state,
				players: [...state.players, ...action.payload],
			}
		default:
			return state
	}
}

export const addPlayersReducers = payload => ({ type: ADD_PLAYERS, payload })
