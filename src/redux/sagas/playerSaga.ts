import { call, put, takeEvery } from "redux-saga/effects";
import {
	errorGetPlayers,
	errorGetPlayersByTeam,
	successfulGetPlayers,
	successfulGetPlayersByTeam,
} from "../actions/playersAction";
// import apiCall from "../../helpers/apiCall";
import { START_GET_PLAYERS, START_GET_PLAYERS_BY_TEAM } from "../types";
import {
	playerType,
	actionSuccessfulGetplayers,
} from "../types/players/playersTypeData";
import apiCall, { infoRequestType } from "../../helpers/apiCall";

type responseGetPlayers = {
	status: number;
	statusText: string;
	numPages: number;
	currentPage: number;
	players: playerType[];
};
type responseGetPlayersByTeam = {
	status: number;
	statusText: string;
	players: playerType[];
};

function* getPlayers() {
	try {
		const infoRequest: infoRequestType = {
			method: "GET",
			url: "getPlayers",
		};
		const players: responseGetPlayers = yield call(apiCall, infoRequest);
		if (players.status !== 200) throw new Error(players.statusText);
		yield put(successfulGetPlayers(players.players));
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

export default function* players() {
	yield takeEvery(START_GET_PLAYERS, getPlayers);
	yield takeEvery(START_GET_PLAYERS_BY_TEAM, getPlayersByTeam);
}
