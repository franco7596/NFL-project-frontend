import {
	START_GET_PLAYERS,
	ERROR_GET_PLAYERS,
	SUCCESSFUL_GET_PLAYERS,
	START_GET_PLAYERS_BY_TEAM,
	ERROR_GET_PLAYERS_BY_TEAM,
	SUCCESSFUL_GET_PLAYERS_BY_TEAM,
	START_GET_PLAYER_STATUS,
	ERROR_GET_PLAYER_STATUS,
	SUCCESSFUL_GET_PLAYER_STATUS,
	START_GET_PLAYER_SELECTED,
	ERROR_GET_PLAYER_SELECTED,
	SUCCESSFUL_GET_PLAYER_SELECTED,
} from "../types";
import {
	playerType,
	actionPlayersType,
	statusType,
} from "../types/players/playersTypeData";

type stateTypePlayers = {
	error: boolean;
	loading: boolean;
	players: null | playerType[];
	playerSelected: null | playerType;
	playersByTeam: null | playerType[];
	comboStatus: null | statusType[];
	currentPage: number;
	numPages: number;
};

const initialState: stateTypePlayers = {
	error: false,
	loading: false,
	players: null,
	playerSelected: null,
	playersByTeam: null,
	comboStatus: null,
	currentPage: 1,
	numPages: 1,
};

export default function reducePlayers(
	state = initialState,
	action: actionPlayersType
): stateTypePlayers {
	switch (action.type) {
		case START_GET_PLAYERS:
		case START_GET_PLAYERS_BY_TEAM:
		case START_GET_PLAYER_SELECTED:
		case START_GET_PLAYER_STATUS:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_PLAYERS:
		case ERROR_GET_PLAYERS_BY_TEAM:
		case ERROR_GET_PLAYER_SELECTED:
		case ERROR_GET_PLAYER_STATUS:
			return {
				...state,
				loading: false,
				error: true,
			};
		case SUCCESSFUL_GET_PLAYERS:
			return {
				...state,
				loading: false,
				players: action.payload.players,
				currentPage: action.payload.currentPage,
				numPages: action.payload.numPages,
			};
		case SUCCESSFUL_GET_PLAYERS_BY_TEAM:
			return {
				...state,
				loading: false,
				playersByTeam: action.payload,
			};
		case SUCCESSFUL_GET_PLAYER_SELECTED:
			return {
				...state,
				loading: false,
				playerSelected: action.payload,
			};
		case SUCCESSFUL_GET_PLAYER_STATUS:
			return {
				...state,
				loading: false,
				comboStatus: action.payload,
			};
		default:
			return state;
	}
}
