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
} from "../types";
import {
	playerType,
	responseGetPlayers,
	statusType,
} from "../types/players/playersTypeData";

export const startGetPlayers = () => ({
	type: START_GET_PLAYERS,
});

export const successfulGetPlayers = (data: responseGetPlayers) => ({
	type: SUCCESSFUL_GET_PLAYERS,
	payload: data,
});

export const errorGetPlayers = () => ({
	type: ERROR_GET_PLAYERS,
});
export const startGetPlayersByTeam = (idTeam: number) => ({
	type: START_GET_PLAYERS_BY_TEAM,
	payload: idTeam,
});

export const successfulGetPlayersByTeam = (players: playerType[]) => ({
	type: SUCCESSFUL_GET_PLAYERS_BY_TEAM,
	payload: players,
});

export const errorGetPlayersByTeam = () => ({
	type: ERROR_GET_PLAYERS_BY_TEAM,
});

export const startGetPlayerStatus = () => ({
	type: START_GET_PLAYER_STATUS,
});

export const successfulGetPlayerStatus = (status: statusType[]) => ({
	type: SUCCESSFUL_GET_PLAYER_STATUS,
	payload: status,
});

export const errorGetPlayerStatus = () => ({
	type: ERROR_GET_PLAYER_STATUS,
});
