import {
	SUCCESSFUL_GET_TEAMS,
	ERROR_GET_TEAMS,
	START_GET_TEAMS,
	START_GET_TEAM_SELECTED,
	ERROR_GET_TEAM_SELECTED,
	SUCCESSFUL_GET_TEAM_SELECTED,
	START_GET_TEAM_DIVISION,
	ERROR_GET_TEAM_DIVISION,
	SUCCESSFUL_GET_TEAM_DIVISION,
} from "../types";
import {
	teamType,
	divisionType,
	filtersTeams,
} from "../types/teams/teamsTypeData";

export const startGetTeams = (filters?: filtersTeams) => ({
	type: START_GET_TEAMS,
	payload: filters,
});

export const successfulGetTeams = (teams: teamType[]) => ({
	type: SUCCESSFUL_GET_TEAMS,
	payload: teams,
});

export const errorGetTeams = () => ({
	type: ERROR_GET_TEAMS,
});

export const startGetTeamSelected = (id: number) => ({
	type: START_GET_TEAM_SELECTED,
	payload: id,
});

export const successfulGetTeamSelected = (teams: teamType) => ({
	type: SUCCESSFUL_GET_TEAM_SELECTED,
	payload: teams,
});

export const errorGetTeamSelected = () => ({
	type: ERROR_GET_TEAM_SELECTED,
});

export const startGetTeamDivisions = () => ({
	type: START_GET_TEAM_DIVISION,
});

export const successfulGetTeamsDivisions = (divisions: divisionType[]) => ({
	type: SUCCESSFUL_GET_TEAM_DIVISION,
	payload: divisions,
});

export const errorGetTeamDivisions = () => ({
	type: ERROR_GET_TEAM_DIVISION,
});
