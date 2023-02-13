import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NavBar from "../components/navBar/NavBar";
import Players from "../components/players/Players";
import Team from "../components/team/Team";
import Teams from "../components/teams/Teams";

export default function App() {
	return (
		<HashRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Teams" element={<Teams />} />
				<Route path="/Players" element={<Players />} />
				<Route path="/team/:idTeam" element={<Team />} />
			</Routes>
		</HashRouter>
	);
}
