import {
	START_GET_PLAYERS,
	ERROR_GET_PLAYERS,
	SUCCESSFUL_GET_PLAYERS,
	START_GET_PLAYERS_BY_TEAM,
	ERROR_GET_PLAYERS_BY_TEAM,
	SUCCESSFUL_GET_PLAYERS_BY_TEAM,
} from "../types";
import { playerType } from "../types/players/playersTypeData";

export const startGetPlayers = () => ({
	type: START_GET_PLAYERS,
});

export const successfulGetPlayers = (players: playerType[]) => ({
	type: SUCCESSFUL_GET_PLAYERS,
	payload: players,
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
