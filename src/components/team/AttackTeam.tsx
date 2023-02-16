import React from "react";
import "./attackTeam.css";
import { playerType } from "../../redux/types/players/playersTypeData";
type teamParam = {
	team: playerType[];
};

export default function AttackTeam({ team }: teamParam) {
	console.log(team);
	return (
		<div className="field-image">
			<div
				className="box box-attack-1"
				style={{ backgroundImage: `url(${team[0].images.photo})` }}
			>
				<h5>WR</h5>
			</div>
			<div className="box box-attack-2">
				<h5>OT</h5>
			</div>
			<div className="box box-attack-3">
				<h5>OG</h5>
			</div>
			<div className="box box-attack-4">
				<h5>C</h5>
			</div>
			<div className="box box-attack-5">
				<h5>OG</h5>
			</div>
			<div className="box box-attack-6">
				<h5>OT</h5>
			</div>
			<div className="box box-attack-7">
				<h5>TE</h5>
			</div>
			<div className="box box-attack-8">
				<h5>QB</h5>
			</div>
			<div className="box box-attack-9">
				<h5>WR</h5>
			</div>
			<div className="box box-attack-10">
				<h5>FB</h5>
			</div>
			<div className="box box-attack-11">
				<h5>TB</h5>
			</div>
		</div>
	);
}
