export type playerType = {
	id: number;
	infoPlayer: {
		name: string;
		height: string;
		age: number;
		experience: number;
		weight: string;
		arms: string;
		hands: string;
	};
	images: {
		photo: string;
	};
	infoCurrentTeam: {
		id: number;
		name: string;
		position: string;
		number: number;
		status: string;
	};
	hometown: {
		name: string;
	};
	college: {
		name: string;
	};
};
export type responseGetPlayers = {
	status: number;
	statusText: string;
	numPages: number;
	currentPage: number;
	players: playerType[];
};

type actionWithoutPayload = {
	type:
		| "START_GET_PLAYERS"
		| "START_GET_PLAYERS_BY_TEAM"
		| "ERROR_GET_PLAYERS"
		| "ERROR_GET_PLAYERS_BY_TEAM"
		| "START_GET_PLAYER_STATUS"
		| "ERROR_GET_PLAYER_STATUS";
};
export type actionSuccessfulGetplayersByTeam = {
	type: "SUCCESSFUL_GET_PLAYERS_BY_TEAM";
	payload: playerType[];
};
export type actionSuccessfulGetplayers = {
	type: "SUCCESSFUL_GET_PLAYERS";
	payload: responseGetPlayers;
};

type actionSuccessfulGetTeamsDivisions = {
	type: "SUCCESSFUL_GET_PLAYER_STATUS";
	payload: statusType[];
};

export type statusType = {
	id: number;
	name: string;
};

export type actionPlayersType =
	| actionWithoutPayload
	| actionSuccessfulGetplayers
	| actionSuccessfulGetTeamsDivisions
	| actionSuccessfulGetplayersByTeam;
