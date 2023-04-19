import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import NavBar from "../components/navBar/NavBar";
import Player from "../components/players/Player";
import Players from "../components/players/Players";
import Team from "../components/team/Team";
import Teams from "../components/teams/Teams";
import Footer from "../components/footer/Footer";

export default function App() {
	return (
		<HashRouter>
			<NavBar />
			<div className="pattern" />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Teams" element={<Teams />} />
				<Route path="/Players" element={<Players />} />
				<Route path="/team/:idTeam" element={<Team />} />
				<Route path="/player/:idPlayer" element={<Player />} />
			</Routes>
			<Footer />
		</HashRouter>
	);
}
