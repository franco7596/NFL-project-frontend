import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
	startGetPlayersByTeam,
	startGetPlayerStatus,
} from "../../redux/actions/playersAction";
import { stateType } from "../../redux/store";
import "./team.css";
import { startGetTeamSelected } from "../../redux/actions/teamsAction";
import PlayersFild from "./PlayersFild";
import positionsTeam from "../../helpers/positionsTeam.json";
import { playerType } from "../../redux/types/players/playersTypeData";
import { v4 as uuidv4 } from "uuid";
import TablePlayers from "../players/TablePlayers";
import Loading from "../loading/Loading";

export default function Team() {
	const { idTeam } = useParams();
	const dispach = useDispatch();
	const [filterBy, setFilterBy] = useState("all");
	const [searchPlayer, setSearchPlayer] = useState("");
	const playersByTeam = useSelector(
		(state: stateType) => state.players.playersByTeam
	);
	const playersLoading = useSelector(
		(state: stateType) => state.players.loading
	);
	const playerStatus = useSelector(
		(state: stateType) => state.players.comboStatus
	);
	const teamSelected = useSelector(
		(state: stateType) => state.teams.teamSelected
	);
	const teamLoading = useSelector((state: stateType) => state.teams.loading);
	useEffect(() => {
		dispach(startGetPlayerStatus());
	}, []);

	useEffect(() => {
		if (idTeam) {
			dispach(startGetPlayersByTeam(parseInt(idTeam)));
			dispach(startGetTeamSelected(parseInt(idTeam)));
		}
	}, [idTeam]);

	const handleFilterStatus = (playerStatus: string) => {
		setFilterBy(playerStatus);
		handleFilters(playerStatus, searchPlayer);
	};

	const handleSearchPlayer = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchPlayer(e.target.value);
		const searchText = e.target.value;
		handleFilters(filterBy, searchText);
	};

	const handleFilters = (status: string, searchText: string) => {
		let playersFilted: playerType[] | null | undefined = playersByTeam;
		if (status !== "all") {
			playersFilted = playersByTeam?.filter(
				(player) => player.infoCurrentTeam.status === status
			);
			if (!playersFilted) playersFilted = null;
		}
		if (searchText !== "")
			playersFilted = playersFilted?.filter(
				(player) =>
					player.infoPlayer.name
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					player.college.name
						.toLowerCase()
						.includes(searchText.toLowerCase()) ||
					player.infoCurrentTeam.position
						.toLowerCase()
						.includes(searchText.toLowerCase())
			);
		if (!playersFilted) playersFilted = null;
	};

	return playersByTeam && teamSelected && !playersLoading && !teamLoading ? (
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
			<div>
				<h4>FILTER BY PLAYERS STATUS</h4>
				<div className="dropdown">
					<button
						className="btn btn-secondary dropdown-toggle"
						type="button"
						id="dropdownMenuButton1"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{filterBy.toUpperCase()}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
						<li key={uuidv4()}>
							<button onClick={() => handleFilterStatus("all")}>ALL</button>
						</li>
						{playerStatus?.map((status) => (
							<li key={status.id}>
								<button onClick={() => handleFilterStatus(status.name)}>
									{status.name.toUpperCase()}
								</button>
							</li>
						))}
					</ul>
				</div>
				<input
					value={searchPlayer}
					onChange={handleSearchPlayer}
					placeholder="search player..."
				/>
			</div>
			{playersByTeam !== null && <TablePlayers players={playersByTeam} />}
		</div>
	) : (
		<Loading />
	);
}
