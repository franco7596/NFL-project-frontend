import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { startGetPlayersByTeam } from "../../redux/actions/playersAction";
import { stateType } from "../../redux/store";
import "./team.css";
import { startGetTeamSelected } from "../../redux/actions/teamsAction";
import PlayersFild from "./PlayersFild";
import positionsTeam from "../../helpers/positionsTeam.json";
import emptyPlayer from "../../assets/players/EmptyPlayer.svg";

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
			<h2>{teamSelected?.infoTeam.name}</h2>
			<h3>DEFENSE TEAM</h3>
			{playersByTeam !== null && (
				<PlayersFild
					team={playersByTeam}
					positions={positionsTeam.defensePositions}
				/>
			)}
			<h3>ATTACK TEAM</h3>
			{playersByTeam !== null && (
				<PlayersFild
					team={playersByTeam}
					positions={positionsTeam.attackPositions}
				/>
			)}
			<div className="team_info-container">
				<h3>Team Info</h3>
				<h4>Division</h4>
				<h5>{teamSelected?.division.name}</h5>
				<div>
					<h4>Games</h4>
					<h5>
						<b>Won:</b>
						{teamSelected?.games.won}
					</h5>
					<h5>
						<b>Lost:</b>
						{teamSelected?.games.lost}
					</h5>
					<h5>
						<b>Tied:</b>
						{teamSelected?.games.tied}
					</h5>
				</div>
				<h4>Head Coach</h4>
				<h5>{teamSelected?.headCoach.name}</h5>
				<h4>Established</h4>
				<h5>{teamSelected?.infoTeam.established}</h5>
				<h4>Stadium</h4>
				<h5>{teamSelected?.infoTeam.stadium}</h5>
				<h4>Owners</h4>
				<h5>{teamSelected?.owners.map((owner) => owner.name)}</h5>
			</div>
			{playersByTeam !== null && (
				<div>
					<table className="team_info-table">
						<thead>
							<tr>
								<th>Player</th>
								<th>No</th>
								<th>Position</th>
								<th>Status</th>
								<th>Experience</th>
								<th>Collage</th>
							</tr>
						</thead>
						<tbody>
							{playersByTeam?.map((player) => (
								<tr key={player.id}>
									<td>
										{player.images.photo !== "" ? (
											<img
												className="team_info-table-img"
												src={player.images.photo}
												alt="Photo Player"
											/>
										) : (
											<img
												className="team_info-table-img"
												src={emptyPlayer}
												alt="Photo Player"
											/>
										)}
										<Link to={`/player/${player.id}`}>
											{player.infoPlayer.name}
										</Link>
									</td>
									<td>{player.infoCurrentTeam.number}</td>
									<td>{player.infoCurrentTeam.position}</td>
									<td>{player.infoCurrentTeam.status}</td>
									<td>{player.infoPlayer.experience}</td>
									<td>{player.college.name}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	);
}
