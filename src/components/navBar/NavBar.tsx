import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./navBar.css";
import { useNavigate } from "react-router-dom";
import homeIcon from "../../assets/icons/logo-NFL.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginUser from "../logInUser/LoginUser";

export default function NavBar() {
	const navegation = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);
	return (
		<div className="nav_bar">
			<Box
				style={{
					minWidth: "100%",
					position: "fixed",
					top: 0,
					left: 0,
					zIndex: 100,
				}}
			>
				<AppBar
					position="static"
					style={{ backgroundColor: "var(--nav_bar-color)" }}
				>
					<div className="nav_bar-tool_bar">
						<img
							src={homeIcon}
							className="nav_bar-img button"
							alt="#"
							onClick={() => navegation("/")}
						/>
						<h1 className="nav_bar-h1">NFL</h1>
						<div className="nav_bar-buttons">
							<Button color="inherit">
								<a
									href="https://ar.linkedin.com/in/franco-ribotta-274a211b0?trk=people-guest_people_search-card"
									target="_blank"
									className="nav_bar-a"
								>
									<LinkedInIcon />
								</a>
							</Button>
							<Button color="inherit">
								<a
									href="https://ar.linkedin.com/in/franco-ribotta-274a211b0?trk=people-guest_people_search-card"
									target="_blank"
									className="nav_bar-a"
								>
									<GitHubIcon />
								</a>
							</Button>
							<Button onClick={handleOpen} color="inherit">
								<AccountCircleIcon />
							</Button>
						</div>
					</div>
				</AppBar>
			</Box>
			<LoginUser openModal={openModal} handleClose={handleClose} />
		</div>
	);
}
