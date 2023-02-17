import {
	SUCCESSFUL_GET_TEAMS,
	ERROR_GET_TEAMS,
	START_GET_TEAMS,
	START_GET_TEAM_SELECTED,
	ERROR_GET_TEAM_SELECTED,
	SUCCESSFUL_GET_TEAM_SELECTED,
} from "../types";
import { teamType } from "../types/teams/teamsTypeData";

export const startGetTeams = () => ({
	type: START_GET_TEAMS,
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
