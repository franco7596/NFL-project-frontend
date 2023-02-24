import React from "react";
import { Link } from "react-router-dom";
import { playerType } from "../../redux/types/players/playersTypeData";
import emptyPlayer from "../../assets/players/EmptyPlayer.svg";

export default function TablePlayers({ players }: { players: playerType[] }) {
	return (
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
				{players?.map((player) => (
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
							<Link to={`/player/${player.id}`}>{player.infoPlayer.name}</Link>
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
	);
}
