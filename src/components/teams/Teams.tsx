import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { startGetTeams } from "../../redux/actions/teamsAction";
import { stateType } from "../../redux/store";
import CardTeam from "./CardTeam";
import "./teams.css";

export default function Teams() {
	const [searchTeam, setSearchTeam] = useState<null | string>(null);
	const dispach = useDispatch();
	const teams = useSelector((state: stateType) => state.teams.teams);
	useEffect(() => {
		dispach(startGetTeams());
	}, []);

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setSearchTeam(e.target.value);
		} else {
			setSearchTeam(null);
		}
	};
	return (
		<section className="teams-section">
			<div className="teams-input">
				<input placeholder="Name of team" onChange={handleSearchInput} />
			</div>
			<div>
				<h4>Filters</h4>
				<div className="card card-body">
					<h6>per Division</h6>
				</div>
				<h4>Order</h4>
				<div className="card card-body">
					<h6>per Won Games</h6>
					<h6>per AGE</h6>
				</div>
			</div>
			{teams && (
				<ul className="teams-ul">
					{teams.map((team) => (
						<CardTeam key={team.id} team={team} />
					))}
				</ul>
			)}
		</section>
	);
}
