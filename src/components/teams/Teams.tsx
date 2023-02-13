import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startGetTeams } from "../../redux/actions/teamsAction";
import { stateType } from "../../redux/store";
import CardTeam from "./CardTeam";
import "./teams.css";

export default function Teams() {
	const dispach = useDispatch();
	const teams = useSelector((state: stateType) => state.teams.teams);
	useEffect(() => {
		dispach(startGetTeams());
	}, []);
	return (
		<section className="teams-section">
			{teams && (
				<ul className="teams-ul">
					{teams.map((team) => (
						<CardTeam team={team} />
					))}
				</ul>
			)}
		</section>
	);
}
