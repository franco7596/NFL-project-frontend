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

type actionWithoutPayload = {
	type:
		| "START_GET_PLAYERS"
		| "START_GET_PLAYERS_BY_TEAM"
		| "ERROR_GET_PLAYERS"
		| "ERROR_GET_PLAYERS_BY_TEAM";
};
export type actionSuccessfulGetplayers = {
	type: "SUCCESSFUL_GET_PLAYERS" | "SUCCESSFUL_GET_PLAYERS_BY_TEAM";
	payload: playerType[];
};
export type actionPlayersType =
	| actionWithoutPayload
	| actionSuccessfulGetplayers;
