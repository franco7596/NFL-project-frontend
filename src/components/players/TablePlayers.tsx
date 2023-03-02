import React from "react";
import { Link } from "react-router-dom";
import { playerType } from "../../redux/types/players/playersTypeData";
import emptyPlayer from "../../assets/players/EmptyPlayer.svg";
import "./table.css";
import Pagination from "@mui/material/Pagination";

type TablePlayers = {
	players: playerType[];
	numPages?: number;
	currentPage?: number;
	handlePage?: (page: number) => void;
};

export default function TablePlayers({
	players,
	numPages,
	currentPage,
	handlePage,
}: TablePlayers) {
	return (
		<div>
			<table className="info-table">
				<thead>
					<tr className="info-table-tr">
						<th className="info-table-th">Player</th>
						<th className="info-table-th">No</th>
						<th className="info-table-th">Position</th>
						<th className="info-table-th">Status</th>
						<th className="info-table-th">Experience</th>
						<th className="info-table-th">Collage</th>
					</tr>
				</thead>
				<tbody>
					{players?.map((player) => (
						<tr className="info-table-tr" key={player.id}>
							<td className="info-table-td-player_name">
								<img
									className="team_info-table-img"
									src={
										player.images.photo !== ""
											? player.images.photo
											: emptyPlayer
									}
									alt="Photo Player"
								/>
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
			{numPages && numPages !== 1 && handlePage && (
				<div>
					<Pagination
						count={numPages}
						page={currentPage}
						onChange={(e, page) => handlePage(page)}
						size="large"
					/>
				</div>
			)}
		</div>
	);
}
