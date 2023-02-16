import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetPlayersByTeam } from "../../redux/actions/playersAction";
import AttackTeam from "./AttackTeam";
import DefenseTeam from "./DefenseTeam";
import { stateType } from "../../redux/store";
import "./team.css";
import { playerType } from "../../redux/types/players/playersTypeData";

type playersState = playerType | null;

export default function Team() {
	const { idTeam } = useParams();
	const dispach = useDispatch();
	const playersByTeam = useSelector(
		(state: stateType) => state.players.playersByTeam
	);
	const [defenseTeam, setDefenseTeam] = useState(null);
	const [attackTeam, setAttackTeam] = useState<playersState>(null);
	useEffect(() => {
		if (parseInt !== undefined) {
			dispach(startGetPlayersByTeam(parseInt(idTeam || "0")));
		}
	}, [idTeam]);

	useEffect(() => {
		if (playersByTeam) {
			let newTeamDefense: playerType[];
			let newTeamAttack: playerType[];
			const positionDefense = ["DE", "DL", "CB", "LB", "FS", "SS"];
			const positionAttack = ["WR", "OT", "OG", "C", "TE", "QB", "FB", "TB"];
			playersByTeam.forEach((player) => {
				if (positionDefense.includes(player.infoCurrentTeam.position)) {
					newTeamDefense.push(player);
				}
				if (positionAttack.includes(player.infoCurrentTeam.position)) {
					newTeamAttack.push(player);
				}
			});
			setDefenseTeam(newTeamDefense);
			setAttackTeam(newTeamAttack);
		}
	}, [playersByTeam]);

	return (
		<div>
			<h3>DEFENSE TEAM</h3>
			<DefenseTeam team={defenseTeam} />
			<h3>ATTACK TEAM</h3>
			{attackTeam !== null && <AttackTeam team={attackTeam} />}
		</div>
	);
}
