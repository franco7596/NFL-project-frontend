import {
	SUCCESSFUL_GET_TEAMS,
	ERROR_GET_TEAMS,
	START_GET_TEAMS,
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
