import { call, put, takeEvery } from "redux-saga/effects";
import { successfulGetTeams, errorGetTeams } from "../actions/teamsAction";
// import apiCall from "../../helpers/apiCall";
import { START_GET_TEAMS } from "../types";
import { teamType } from "../types/teams/teamsTypeData";
import apiCall from "../../helpers/apiCall";

type responseGetTeams = {
	status: number;
	statusText: string;
	teams: teamType[];
};

function* getTeams() {
	try {
		const teams: responseGetTeams = yield call(apiCall, "getTeam");
		if (teams.status !== 200) throw new Error(teams.statusText);
		yield put(successfulGetTeams(teams.teams));
	} catch (error) {
		yield put(errorGetTeams());
	}
}

export default function* teams() {
	yield takeEvery(START_GET_TEAMS, getTeams);
}
