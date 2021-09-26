import { addPlayersReducers } from '../reducers/playersReducers'

export const fetshPlayers = () => {
	return function (dispatch) {
		fetch('/teams')
			.then(result => result.json())
			.then(result => dispatch(addPlayersReducers(result)))
	}
}
