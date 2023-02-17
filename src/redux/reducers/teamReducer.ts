import {
	SUCCESSFUL_GET_TEAMS,
	ERROR_GET_TEAMS,
	START_GET_TEAMS,
	START_GET_TEAM_SELECTED,
	ERROR_GET_TEAM_SELECTED,
	SUCCESSFUL_GET_TEAM_SELECTED,
} from "../types";
import { teamType, actionTeamsType } from "../types/teams/teamsTypeData";

type stateTypeTeam = {
	error: boolean;
	loading: boolean;
	teams: null | teamType[];
	teamSelected: null | teamType;
};

const initialState: stateTypeTeam = {
	error: false,
	loading: false,
	teams: null,
	teamSelected: null,
};

export default function reduceTeam(
	state = initialState,
	action: actionTeamsType
) {
	switch (action.type) {
		case START_GET_TEAMS:
		case START_GET_TEAM_SELECTED:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_TEAMS:
		case ERROR_GET_TEAM_SELECTED:
			return {
				...state,
				loading: false,
				error: true,
			};
		case SUCCESSFUL_GET_TEAMS:
			return {
				...state,
				loading: false,
				teams: action.payload,
			};
		case SUCCESSFUL_GET_TEAM_SELECTED:
			return {
				...state,
				loading: false,
				teamSelected: action.payload,
			};
		default:
			return state;
	}
}
