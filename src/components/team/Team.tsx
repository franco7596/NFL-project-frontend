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
import SearchBoard from "../filters/SearchBoard";

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
		<div className="team-container">
			<div
				className="team-container-info"
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
				<h3>Team Info</h3>
				<div
					className="team_info-container"
					style={{
						backgroundImage: `url(${teamSelected?.images.background_2 || ""})`,
					}}
				>
					<h4>Division</h4>
					<span>{teamSelected?.division.name}</span>
					<h4>Games</h4>
					<span>
						<span>{teamSelected?.games.won} - </span>
						<span>{teamSelected?.games.lost} - </span>
						<span>{teamSelected?.games.tied}</span>
					</span>
					<h4>Head Coach</h4>
					<span>{teamSelected?.headCoach.name}</span>
					<h4>Established</h4>
					<span>{teamSelected?.infoTeam.established}</span>
					<h4>Stadium</h4>
					<span>{teamSelected?.infoTeam.stadium}</span>
					<h4>Owners</h4>
					<span>{teamSelected?.owners.map((owner) => owner.name)}</span>
				</div>
			</div>
			<div className="team_filters-container">
				<span>FILTER BY PLAYERS STATUS</span>
				<div className="dropdown">
					<button
						className="button dropdown-toggle"
						type="button"
						id="dropdownFilters"
						data-bs-toggle="dropdown"
						aria-expanded="false"
					>
						{filterBy.toUpperCase()}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownFilters">
						<li key={uuidv4()}>
							<button onClick={() => handleFilterStatus("all")}>ALL</button>
						</li>
						{playerStatus?.map((status) => (
							<li key={status.id}>
								<button
									type="button"
									className="button"
									onClick={() => handleFilterStatus(status.name)}
								>
									{status.name.toUpperCase()}
								</button>
							</li>
						))}
					</ul>
				</div>
				<SearchBoard
					placeholder="search player..."
					handleSearch={handleSearchPlayer}
				/>
			</div>
			{playersByTeam !== null && <TablePlayers players={playersByTeam} />}
		</div>
	) : (
		<Loading />
	);
}
