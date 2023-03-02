import { useState } from "react";
import apiCall, { infoRequestType } from "../helpers/apiCall";
export function useLogIn() {
	const isLoguin = () => {
		const tokenData = sessionStorage.getItem("token");
		if (tokenData) return tokenData;
		return null;
	};
	const handleLogin = (username: string, password: string) => {
		const infoRequest: infoRequestType = {
			method: "POST",
			url: `login`,
			data: {
				username,
				password,
			},
		};
		return apiCall(infoRequest)
			.then((resp) => {
				if (resp.status !== 200) throw new Error();
				sessionStorage.setItem("token", resp.token);
				return resp.token;
			})
			.catch(() => {
				return null;
			});
	};

	return { isLoguin, handleLogin };
}
