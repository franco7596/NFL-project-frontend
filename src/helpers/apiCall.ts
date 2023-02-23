import clienteAxios from "../axios";
import { filtersTeams } from "../redux/types/teams/teamsTypeData";

export type infoRequestType = {
	method: "POST" | "GET";
	url: string;
	headers?: {
		"x-acces-token": string;
	};
	data?: filtersTeams;
	params?: filtersTeams;
};

export default function apiCall(infoRequest: infoRequestType) {
	return clienteAxios(infoRequest)
		.then((resp) => {
			if (resp.status !== 200) {
				throw { error: "error en la peticion" };
			}
			return resp.data;
		})
		.catch((err) => err);
}
