const defaultState = {
	numberPlayers: 5,
}

const ADD_PLAYER = 'ADD_PLAYER'
const GET_PLAYER = 'GET_PLAYER'

export const numberPlayersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case ADD_PLAYER:
			return {
				...state,
				numberPlayers: state.numberPlayers + action.payload,
			}
		case GET_PLAYER:
			return {
				...state,
				numberPlayers: state.numberPlayers - action.payload,
			}
		default:
			return state
	}
}
