import {
	START_GET_PLAYERS,
	ERROR_GET_PLAYERS,
	SUCCESSFUL_GET_PLAYERS,
	START_GET_PLAYERS_BY_TEAM,
	ERROR_GET_PLAYERS_BY_TEAM,
	SUCCESSFUL_GET_PLAYERS_BY_TEAM,
} from "../types";
import {
	playerType,
	actionPlayersType,
} from "../types/players/playersTypeData";

type stateType = {
	error: boolean;
	loading: boolean;
	players: null | playerType[];
	playersByTeam: null | playerType[];
};

const initialState: stateType = {
	error: false,
	loading: false,
	players: null,
	playersByTeam: null,
};

export default function reduceMaps(
	state = initialState,
	action: actionPlayersType
) {
	switch (action.type) {
		case START_GET_PLAYERS:
		case START_GET_PLAYERS_BY_TEAM:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_PLAYERS:
		case ERROR_GET_PLAYERS_BY_TEAM:
			return {
				...state,
				loading: false,
				error: true,
			};
		case SUCCESSFUL_GET_PLAYERS:
			return {
				...state,
				loading: false,
				players: action.payload,
			};
		case SUCCESSFUL_GET_PLAYERS_BY_TEAM:
			return {
				...state,
				loading: false,
				playersByTeam: action.payload,
			};
		default:
			return state;
	}
}
