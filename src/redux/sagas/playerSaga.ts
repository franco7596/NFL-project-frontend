import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetPlayers,
	errorGetPlayersByTeam,
	errorGetPlayerStatus,
	successfulGetPlayers,
	successfulGetPlayersByTeam,
	successfulGetPlayerStatus,
} from "../actions/playersAction";
// import apiCall from "../../helpers/apiCall";
import {
	START_GET_PLAYERS,
	START_GET_PLAYERS_BY_TEAM,
	START_GET_PLAYER_STATUS,
} from "../types";
import {
	playerType,
	actionSuccessfulGetplayers,
	statusType,
	responseGetPlayers,
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

function* getPlayers() {
	try {
		const infoRequest: infoRequestType = {
			method: "GET",
			url: "getPlayers",
		};
		const players: responseGetPlayers = yield call(apiCall, infoRequest);
		if (players.status !== 200) throw new Error(players.statusText);
		yield put(successfulGetPlayers(players));
	} catch (error) {
		yield put(errorGetPlayers());
	}
}
function* getPlayersByTeam(info: actionSuccessfulGetplayers) {
	try {
		const infoRequest: infoRequestType = {
			method: "GET",
			url: `getPlayersByTeam?id_team= ${info.payload}`,
		};
		const player: responseGetPlayersByTeam = yield call(apiCall, infoRequest);
		if (player.status !== 200) throw new Error(player.statusText);
		yield put(successfulGetPlayersByTeam(player.players));
	} catch (error) {
		yield put(errorGetPlayersByTeam());
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
	yield takeEvery(START_GET_PLAYER_STATUS, getPlayerStatus);
}
