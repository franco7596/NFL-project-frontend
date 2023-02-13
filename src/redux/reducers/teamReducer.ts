import {
	SUCCESSFUL_GET_TEAMS,
	ERROR_GET_TEAMS,
	START_GET_TEAMS,
} from "../types";
import { teamType, actionTeamsType } from "../types/teams/teamsTypeData";

type stateType = {
	error: boolean;
	loading: boolean;
	teams: null | teamType[];
};

const initialState: stateType = {
	error: false,
	loading: false,
	teams: null,
};

export default function reduceMaps(
	state = initialState,
	action: actionTeamsType
) {
	switch (action.type) {
		case START_GET_TEAMS:
			return {
				...state,
				loading: true,
			};
		case ERROR_GET_TEAMS:
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
		default:
			return state;
	}
}
