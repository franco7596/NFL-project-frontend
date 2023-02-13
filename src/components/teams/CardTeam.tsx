import React from "react";
import { Link } from "react-router-dom";
import { teamType } from "../../redux/types/teams/teamsTypeData";
import "./cardTeam.css";

type newTeamType = {
	team: teamType;
};
export default function CardTeam({ team }: newTeamType) {
	return (
		<li
			className="card card-body card-team"
			style={{ backgroundImage: `url(${team.images.background_1})` }}
		>
			<div className="card-team-header">
				<h3 className="card-team-title">{team.infoTeam.name}</h3>
				<img className="card-team-logo" src={team.images.logo} />
			</div>
			<h4>{team.division.name}</h4>
			<p>
				{team.games.won}-{team.games.lost}-{team.games.tied}
			</p>
			<div className="card-team-foot">
				<Link to={`/team/${team.id}`}>
					<button className="button-team">{`About ${team.infoTeam.name}`}</button>
				</Link>
				<a href={team.infoTeam.officialPage} target="_blank">
					<button className="button-team">Official Page</button>
				</a>
			</div>
		</li>
	);
}
