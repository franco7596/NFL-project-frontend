import { filtersGenericPage } from "../../../helpers/typesHelpers";

export type teamType = {
	id: number;
	infoTeam: {
		name: string;
		established: string;
		stadium: string;
		officialPage: string;
	};
	images: {
		logo: string;
		background_1: string;
		background_2: string;
	};
	headCoach: {
		name: string;
	};
	games: {
		won: number;
		lost: number;
		tied: number;
	};
	owners: [
		{
			name: string;
		}
	];
	division: {
		name: string;
	};
};

type actionGetTeams = {
	type:
		| "START_GET_TEAM_SELECTED"
		| "ERROR_GET_TEAMS"
		| "ERROR_GET_TEAM_SELECTED";
};

export type actionStartGetTeams = {
	type: "START_GET_TEAMS";
	payload?: filtersGenericPage;
};

type actionSuccessfulGetTeams = {
	type: "SUCCESSFUL_GET_TEAMS";
	payload: teamType[];
};
export type actionSuccessfulGetTeamSelected = {
	type: "SUCCESSFUL_GET_TEAM_SELECTED";
	payload: teamType;
};
type actionSuccessfulGetTeamsDivisions = {
	type: "SUCCESSFUL_GET_TEAM_DIVISION";
	payload: divisionType[];
};
type actionStartGetTeamDivisions = {
	type: "ERROR_GET_TEAM_DIVISION" | "START_GET_TEAM_DIVISION";
};
export type actionTeamsType =
	| actionGetTeams
	| actionStartGetTeams
	| actionSuccessfulGetTeams
	| actionSuccessfulGetTeamSelected
	| actionStartGetTeamDivisions
	| actionSuccessfulGetTeamsDivisions;

export type divisionType = {
	id: number;
	name: string;
};
