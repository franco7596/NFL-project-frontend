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
import { Menu, MenuItem } from "@mui/material";

export default function NavBar() {
	const navegation = useNavigate();
	const [openModal, setOpenModal] = useState(false);
	const handleOpen = () => setOpenModal(true);
	const handleClose = () => setOpenModal(false);

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [openMenuGit, setOpenMenuGit] = useState(false);
	const handleMenuGit = (e?: React.MouseEvent<HTMLElement>) => {
		setOpenMenuGit(!openMenuGit);
		if (!openMenuGit && e) {
			setAnchorEl(e.currentTarget);
		} else {
			setAnchorEl(null);
		}
	};
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
							<Button color="inherit" onClick={handleMenuGit}>
								<GitHubIcon />
								<Menu anchorEl={anchorEl} open={openMenuGit}>
									<a
										href="https://github.com/franco7596/NFL-project-frontend"
										target="_blank"
										className="nav_bar-a"
									>
										<MenuItem onClick={handleMenuGit}>FRONT-END</MenuItem>
									</a>
									<a
										href="https://github.com/franco7596/NFL-project-backend"
										target="_blank"
										className="nav_bar-a"
									>
										<MenuItem onClick={handleMenuGit}>BACK-END</MenuItem>
									</a>
									<a
										href="https://github.com/franco7596/NFL-project-scrapy"
										target="_blank"
										className="nav_bar-a"
									>
										<MenuItem onClick={handleMenuGit}>SCRAPY</MenuItem>
									</a>
								</Menu>
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
