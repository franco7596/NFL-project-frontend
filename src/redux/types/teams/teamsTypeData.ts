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

type actionStartGetTeams = {
	type: "START_GET_TEAMS";
};
type actionErrorGetTeams = {
	type: "ERROR_GET_TEAMS";
};
type actionSuccessfulGetTeams = {
	type: "SUCCESSFUL_GET_TEAMS";
	payload: teamType[];
};
export type actionTeamsType =
	| actionStartGetTeams
	| actionErrorGetTeams
	| actionSuccessfulGetTeams;
