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
		<div className="table-players-container">
			<table className="table-players">
				<thead className="table-players-thead">
					<tr>
						<th />
						<th>Player</th>
						<th>#No</th>
						<th>Position</th>
						<th>Status</th>
						<th>Experience</th>
						<th>Collage</th>
					</tr>
				</thead>
				<tbody className="table-players-tbody">
					{players?.map((player) => (
						<Link className="button" to={`/player/${player.id}`}>
							<tr key={player.id}>
								<td className="td-with-padding">
									<img
										className="players-table-img"
										src={
											player.images.photo !== ""
												? player.images.photo
												: emptyPlayer
										}
										alt="Photo Player"
									/>
								</td>
								<td>{player.infoPlayer.name}</td>
								<td>{player.infoCurrentTeam.number}</td>
								<td>{player.infoCurrentTeam.position}</td>
								<td>{player.infoCurrentTeam.status}</td>
								<td>{player.infoPlayer.experience}</td>
								<td className="td-with-padding">{player.college.name}</td>
							</tr>
						</Link>
					))}
				</tbody>
			</table>
			{numPages && numPages !== 1 && handlePage && (
				<div className="table_pagination-container">
					<div>
						<Pagination
							count={numPages}
							page={currentPage}
							onChange={(e, page) => handlePage(page)}
							size="large"
						/>
					</div>
				</div>
			)}
		</div>
	);
}
