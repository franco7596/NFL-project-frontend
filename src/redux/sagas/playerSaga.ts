import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetPlayers,
	errorGetPlayersByTeam,
	errorGetPlayersByTeamTable,
	errorGetPlayerSelected,
	errorGetPlayerStatus,
	successfulGetPlayers,
	successfulGetPlayersByTeam,
	successfulGetPlayersByTeamTable,
	successfulGetPlayerSelected,
	successfulGetPlayerStatus,
} from "../actions/playersAction";
// import apiCall from "../../helpers/apiCall";
import {
	START_GET_PLAYERS,
	START_GET_PLAYERS_BY_TEAM,
	START_GET_PLAYERS_BY_TEAM_TABLE,
	START_GET_PLAYER_SELECTED,
	START_GET_PLAYER_STATUS,
} from "../types";
import {
	playerType,
	actionSuccessfulGetplayers,
	statusType,
	responseGetPlayers,
	actionStartGetPlayers,
	actionStartGetPlayerById,
	responseGetPlayerById,
} from "../types/players/playersTypeData";
import apiCall, { infoRequestType } from "../../helpers/apiCall";

type responseGetPlayersByTeam = {
	status: number;
	statusText: string;
	players: playerType[];
};
type responseGetPlayerStatus = {
	status: number;
	statusText: string;
	statusPlayer: statusType[];
};

function* getPlayers(info: actionStartGetPlayers) {
	try {
		const infoRequest: infoRequestType = {
			method: "POST",
			url: `getPlayers/?page=${info.payload?.page || 1}`,
			data: {
				checkOptions: info.payload?.checkOptions,
				sortSelected: info.payload?.sortSelected,
				searchInpit: info.payload?.searchInpit,
			},
		};
		const players: responseGetPlayers = yield call(apiCall, infoRequest);
		if (players.status !== 200) throw new Error(players.statusText);
		yield put(successfulGetPlayers(players));
	} catch (error) {
		yield put(errorGetPlayers());
	}
}
function* getPlayersByTeam(info: actionStartGetPlayerById) {
	try {
		const infoRequest: infoRequestType = {
			method: "POST",
			url: `getPlayersByTeam?id_team= ${info.payload.id_team}`,
		};
		const player: responseGetPlayersByTeam = yield call(apiCall, infoRequest);
		if (player.status !== 200) throw new Error(player.statusText);
		yield put(successfulGetPlayersByTeam(player.players));
	} catch (error) {
		yield put(errorGetPlayersByTeam());
	}
}
function* getPlayersByTeamTable(info: actionStartGetPlayerById) {
	try {
		const infoRequest: infoRequestType = {
			method: "POST",
			url: `getPlayersByTeam?id_team=${info.payload.id_team}`,
			data: {
				status: info.payload?.status,
				searchInpit: info.payload?.search_Inpit,
			},
		};
		const player: responseGetPlayersByTeam = yield call(apiCall, infoRequest);
		if (player.status !== 200) throw new Error(player.statusText);
		yield put(successfulGetPlayersByTeamTable(player.players));
	} catch (error) {
		yield put(errorGetPlayersByTeamTable());
	}
}
function* getPlayerById(info: actionStartGetPlayerById) {
	try {
		const infoRequest: infoRequestType = {
			method: "GET",
			url: `getPlayersById?id_player=${info.payload}`,
		};
		const player: responseGetPlayerById = yield call(apiCall, infoRequest);
		if (player.status !== 200) throw new Error(player.statusText);
		yield put(successfulGetPlayerSelected(player.player));
	} catch (error) {
		yield put(errorGetPlayerSelected());
	}
}

function* getPlayerStatus() {
	try {
		const infoRequest: infoRequestType = {
			method: "GET",
			url: "getComboStatus",
		};
		const playerStatus: responseGetPlayerStatus = yield call(
			apiCall,
			infoRequest
		);
		if (playerStatus.status !== 200) throw new Error(playerStatus.statusText);
		yield put(successfulGetPlayerStatus(playerStatus.statusPlayer));
	} catch (error) {
		yield put(errorGetPlayerStatus());
	}
}
export default function* players() {
	yield takeEvery(START_GET_PLAYERS, getPlayers);
	yield takeEvery(START_GET_PLAYERS_BY_TEAM, getPlayersByTeam);
	yield takeEvery(START_GET_PLAYERS_BY_TEAM_TABLE, getPlayersByTeamTable);
	yield takeEvery(START_GET_PLAYER_STATUS, getPlayerStatus);
	yield takeEvery(START_GET_PLAYER_SELECTED, getPlayerById);
}
