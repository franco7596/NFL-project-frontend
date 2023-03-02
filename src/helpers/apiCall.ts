import clienteAxios from "../axios";
import { filtersGenericPage, loguinData } from "./typesHelpers";

export type infoRequestType = {
	method: "POST" | "GET";
	url: string;
	headers?: {
		"x-acces-token": string;
	};
	data?: filtersGenericPage | loguinData;
};

export default function apiCall(infoRequest: infoRequestType) {
	return clienteAxios(infoRequest)
		.then((resp) => {
			if (resp.status !== 200) {
				throw new Error("error en la peticion");
			}
			return resp.data;
		})
		.catch((err) => err);
}
