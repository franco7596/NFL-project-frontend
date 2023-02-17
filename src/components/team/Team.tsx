import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetPlayersByTeam } from "../../redux/actions/playersAction";
import AttackTeam from "./AttackTeam";
import DefenseTeam from "./DefenseTeam";
import { stateType } from "../../redux/store";
import "./team.css";
import { startGetTeamSelected } from "../../redux/actions/teamsAction";

export default function Team() {
	const { idTeam } = useParams();
	const dispach = useDispatch();
	const playersByTeam = useSelector(
		(state: stateType) => state.players.playersByTeam
	);
	const teamSelected = useSelector(
		(state: stateType) => state.teams.teamSelected
	);
	useEffect(() => {
		dispach(startGetPlayersByTeam(parseInt(idTeam || "0")));
		dispach(startGetTeamSelected(parseInt(idTeam || "0")));
	}, [idTeam]);

	return (
		<div
			className="team-container"
			style={{
				backgroundImage: `url(${teamSelected?.images.background_1 || ""})`,
			}}
		>
			<h3>DEFENSE TEAM</h3>
			<DefenseTeam team={playersByTeam} />
			<h3>ATTACK TEAM</h3>
			<AttackTeam team={playersByTeam} />
			<div></div>
		</div>
	);
}
