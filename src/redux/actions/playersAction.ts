import { filtersGenericPage } from "../../helpers/typesHelpers";
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
	SUCCESSFUL_GET_PLAYERS_BY_TEAM_TABLE,
	ERROR_GET_PLAYERS_BY_TEAM_TABLE,
	START_GET_PLAYERS_BY_TEAM_TABLE,
} from "../types";
import {
	playerType,
	getPlayersByIdTeam,
	responseGetPlayers,
	statusType,
} from "../types/players/playersTypeData";

export const startGetPlayers = (filters?: filtersGenericPage) => ({
	type: START_GET_PLAYERS,
	payload: filters,
});

export const successfulGetPlayers = (data: responseGetPlayers) => ({
	type: SUCCESSFUL_GET_PLAYERS,
	payload: data,
});

export const errorGetPlayers = () => ({
	type: ERROR_GET_PLAYERS,
});
export const startGetPlayersByTeam = (payload: getPlayersByIdTeam) => ({
	type: START_GET_PLAYERS_BY_TEAM,
	payload,
});

export const successfulGetPlayersByTeam = (players: playerType[]) => ({
	type: SUCCESSFUL_GET_PLAYERS_BY_TEAM,
	payload: players,
});

export const errorGetPlayersByTeam = () => ({
	type: ERROR_GET_PLAYERS_BY_TEAM,
});
export const startGetPlayersByTeamTable = (payload: getPlayersByIdTeam) => ({
	type: START_GET_PLAYERS_BY_TEAM_TABLE,
	payload,
});

export const successfulGetPlayersByTeamTable = (players: playerType[]) => ({
	type: SUCCESSFUL_GET_PLAYERS_BY_TEAM_TABLE,
	payload: players,
});

export const errorGetPlayersByTeamTable = () => ({
	type: ERROR_GET_PLAYERS_BY_TEAM_TABLE,
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

export const startGetPlayerSelected = (id: number) => ({
	type: START_GET_PLAYER_SELECTED,
	payload: id,
});
// cambiar
export const successfulGetPlayerSelected = (player: playerType) => ({
	type: SUCCESSFUL_GET_PLAYER_SELECTED,
	payload: player,
});

export const errorGetPlayerSelected = () => ({
	type: ERROR_GET_PLAYER_SELECTED,
});
