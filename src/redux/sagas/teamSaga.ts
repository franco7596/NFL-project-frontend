import { call, put, takeEvery } from "redux-saga/effects";
import {
	successfulGetTeams,
	errorGetTeams,
	successfulGetTeamSelected,
	errorGetTeamSelected,
	errorGetTeamDivisions,
	successfulGetTeamsDivisions,
} from "../actions/teamsAction";
// import apiCall from "../../helpers/apiCall";
import {
	START_GET_TEAMS,
	START_GET_TEAM_DIVISION,
	START_GET_TEAM_SELECTED,
} from "../types";
import {
	actionSuccessfulGetTeamSelected,
	divisionType,
	teamType,
} from "../types/teams/teamsTypeData";
import apiCall from "../../helpers/apiCall";

type responseGetTeams = {
	status: number;
	statusText: string;
	teams: teamType[];
};

type responseGetTeamSelected = {
	status: number;
	statusText: string;
	team: teamType;
};

type responseGetTeamDivisions = {
	status: number;
	statusText: string;
	divisions: divisionType[];
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

function* getTeamSelected(info: actionSuccessfulGetTeamSelected) {
	try {
		const player: responseGetTeamSelected = yield call(
			apiCall,
			`getTeamById?id= ${info.payload}`
		);
		if (player.status !== 200) throw new Error(player.statusText);
		yield put(successfulGetTeamSelected(player.team));
	} catch (error) {
		yield put(errorGetTeamSelected());
	}
}

function* getTeamDivisions() {
	try {
		const divisions: responseGetTeamDivisions = yield call(
			apiCall,
			"getComboDivision"
		);
		if (divisions.status !== 200) throw new Error(divisions.statusText);
		yield put(successfulGetTeamsDivisions(divisions.divisions));
	} catch (error) {
		yield put(errorGetTeamDivisions());
	}
}

export default function* teams() {
	yield takeEvery(START_GET_TEAMS, getTeams);
	yield takeEvery(START_GET_TEAM_SELECTED, getTeamSelected);
	yield takeEvery(START_GET_TEAM_DIVISION, getTeamDivisions);
}
