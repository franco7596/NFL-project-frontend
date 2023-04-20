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
			{playerSelected && (
				<div className="player-card-size">
					<Tilt scale={1.1}>
						<div
							className="card card-body player-card-container"
							style={{
								backgroundImage: `url(${currentTeam?.images.background_2}) `,
							}}
						>
							<div className="player-card-header">
								<div className="player-card-header-info">
									<div className="player-card-header-name">
										<h2 className="player-card-header-h2">
											{playerSelected.infoPlayer.name}
										</h2>
										<hr className="player-card-header-hr" />
									</div>
									<div className="player-card-header-number">
										<h2 className="player-card-header-h2">NUMBER</h2>
										<h3 className="player-card-header-h3">
											#{playerSelected.infoCurrentTeam.number}
										</h3>
									</div>
									<div className="player-card-header-position">
										<h2 className="player-card-header-h2">
											{playerSelected.infoCurrentTeam.position}
										</h2>
										<hr className="player-card-header-hr" />
									</div>
									<div className="player-card-header-status">
										<h2 className="player-card-header-h2">
											{playerSelected.infoCurrentTeam.status}
										</h2>
										<hr className="player-card-header-hr" />
									</div>
								</div>
								<div className="player-card-image-container">
									<img
										className="player-card-image-player"
										src={
											playerSelected.images.photo !== ""
												? playerSelected.images.photo
												: emptyPlayer
										}
									/>
									<div className="player-card-container-image-team">
										<img
											className="player-card-image-team"
											src={playerSelected.infoCurrentTeam.image}
										/>
									</div>
								</div>
							</div>
							<ul className="player-card-body">
								{playerSelected.infoPlayer.arms && (
									<li className="player-card-body-item">
										<h4>ARMS:</h4>
										<p>{playerSelected.infoPlayer.arms}</p>
									</li>
								)}
								{playerSelected.infoPlayer.hands && (
									<li className="player-card-body-item">
										<h4>HANDS:</h4>
										<p>{playerSelected.infoPlayer.hands}</p>
									</li>
								)}
								{playerSelected.infoPlayer.height && (
									<li className="player-card-body-item">
										<h4>HEIGTH:</h4>
										<p>{playerSelected.infoPlayer.height}</p>
									</li>
								)}
								{playerSelected.infoPlayer.weight && (
									<li className="player-card-body-item">
										<h4>WEIGHT:</h4>
										<p>{playerSelected.infoPlayer.weight}</p>
									</li>
								)}
							</ul>
							<div className="player-card-footer">
								<h4>HOMETOWN: {playerSelected.hometown.name}</h4>
								<h4>COLLEGE: {playerSelected.college.name}</h4>
							</div>
						</div>
					</Tilt>
				</div>
			)}
		</div>
	);
}
