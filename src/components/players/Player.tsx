import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { startGetPlayerSelected } from "../../redux/actions/playersAction";
import { startGetTeamSelected } from "../../redux/actions/teamsAction";
import { stateType } from "../../redux/store";
import "./playerCard.css";
import Tilt from "react-parallax-tilt";
import emptyPlayer from "../../assets/players/EmptyPlayer.svg";

export default function Player() {
	const { idPlayer } = useParams();
	const dispach = useDispatch();
	const playerSelected = useSelector(
		(state: stateType) => state.players.playerSelected
	);
	const currentTeam = useSelector(
		(state: stateType) => state.teams.teamSelected
	);
	useEffect(() => {
		if (idPlayer) dispach(startGetPlayerSelected(parseInt(idPlayer)));
	}, []);
	useEffect(() => {
		if (playerSelected)
			dispach(startGetTeamSelected(playerSelected.infoCurrentTeam.id));
	}, [playerSelected]);

	return (
		<div
			className="player-card"
			style={{
				backgroundImage: `url(${currentTeam?.images.background_1}) `,
			}}
		>
			<h3>{currentTeam?.infoTeam.name}</h3>
			{playerSelected && (
				<Tilt scale={1.1}>
					<div
						className="player-card-container"
						style={{
							backgroundImage: `url(${currentTeam?.images.background_2}) `,
						}}
					>
						<div className="player-card-header">
							<span>{playerSelected.infoPlayer.name}</span>
							<span>{playerSelected.infoCurrentTeam.position}</span>
							<div>
								<span>NUMBER</span>
								<span>#{playerSelected.infoCurrentTeam.number}</span>
							</div>
							<span>{playerSelected.infoCurrentTeam.status}</span>
						</div>
						<div className="player-card-image-container">
							<img
								src={
									playerSelected.images.photo !== ""
										? playerSelected.images.photo
										: emptyPlayer
								}
							/>
							<div>
								<img src={playerSelected.infoCurrentTeam.image} />
							</div>
						</div>
						<ul className="player-card-body-container">
							{playerSelected.infoPlayer.age !== 0 && (
								<li>
									<span>age:</span>
									<span>{playerSelected.infoPlayer.age}</span>
								</li>
							)}
							{playerSelected.infoPlayer.experience !== 0 && (
								<li>
									<span>experience:</span>
									<span>{playerSelected.infoPlayer.experience}</span>
								</li>
							)}
							{playerSelected.infoPlayer.arms && (
								<li>
									<span>arms:</span>
									<span>{playerSelected.infoPlayer.arms}</span>
								</li>
							)}
							{playerSelected.infoPlayer.hands && (
								<li>
									<span>hands:</span>
									<span>{playerSelected.infoPlayer.hands}</span>
								</li>
							)}
							{playerSelected.infoPlayer.height && (
								<li>
									<span>height:</span>
									<span>{playerSelected.infoPlayer.height}</span>
								</li>
							)}
							{playerSelected.infoPlayer.weight && (
								<li>
									<span>weight:</span>
									<span>{playerSelected.infoPlayer.weight}</span>
								</li>
							)}
						</ul>
						<div className="player-card-footer">
							{playerSelected.hometown.name && (
								<span>
									<b>HOMETOWN:</b> {playerSelected.hometown.name}
								</span>
							)}
							{playerSelected.college.name && (
								<span>
									<b>COLLEGE:</b> {playerSelected.college.name}
								</span>
							)}
						</div>
					</div>
				</Tilt>
			)}
		</div>
	);
}
