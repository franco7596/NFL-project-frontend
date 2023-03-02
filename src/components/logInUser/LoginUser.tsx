import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./loginUser.css";
import { useLogIn } from "../../hooks/useLogIn";
import { reSetDatabase } from "../../helpers/reSetDataBase";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	p: 4,
};

type modalParams = {
	openModal: boolean;
	handleClose: () => void;
};

export default function LoginUser({ openModal, handleClose }: modalParams) {
	const [username, setUsername] = useState("");
	const [pasword, setPasword] = useState("");
	const [token, setToken] = useState<null | string>(null);
	const { isLoguin, handleLogin } = useLogIn();
	const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const tokenResponse = await handleLogin(username, pasword);
		if (!tokenResponse) {
			alert("WRONG USERNAME OR PASSWORD");
			setUsername("");
			setPasword("");
		} else {
			setToken(tokenResponse);
		}
	};
	useEffect(() => {
		const tokenResponse = isLoguin();
		if (tokenResponse) setToken(tokenResponse);
	}, []);

	const handleResetTeam = async () => {
		if (token) {
			const responseReset = await reSetDatabase(token);
			if (responseReset) {
				alert("Reset Database In Progres");
			} else {
				alert("Reset Couldn't Start");
			}
		}
	};

	return (
		<Modal open={openModal} onClose={handleClose}>
			<Box sx={style}>
				{!token ? (
					<form className="form-login" onSubmit={handleOnSubmit}>
						<h3 className="title-login">Login Here</h3>
						<label className="login-lable" htmlFor="username">
							Username
						</label>
						<input
							className="login-input"
							type="text"
							placeholder="Email or Phone"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
						<label className="login-lable" htmlFor="password">
							Password
						</label>
						<input
							className="login-input"
							type="password"
							placeholder="Password"
							id="password"
							value={pasword}
							onChange={(e) => setPasword(e.target.value)}
						/>
						<button className="login-button">Log In</button>
					</form>
				) : (
					<div className="form-reset">
						<h3 className="title-login">Re-set Database</h3>
						<button onClick={handleResetTeam} className="login-button">
							Re-scrawl Teams and Roster
						</button>
					</div>
				)}
			</Box>
		</Modal>
	);
}
