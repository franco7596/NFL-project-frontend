import apiCall, { infoRequestType } from "./apiCall";

export async function reSetDatabase(token: string) {
	try {
		let infoRequest: infoRequestType = {
			method: "POST",
			headers: {
				"x-acces-token": token,
			},
			url: `upDateTeam`,
		};
		let responseReSet = await apiCall(infoRequest);
		if (responseReSet.status !== 200) throw new Error();
		infoRequest = {
			method: "POST",
			headers: {
				"x-acces-token": token,
			},
			url: `upDateRoster`,
		};
		responseReSet = await apiCall(infoRequest);
		if (responseReSet.status !== 200) throw new Error();
		return true;
	} catch {
		return false;
	}
}
