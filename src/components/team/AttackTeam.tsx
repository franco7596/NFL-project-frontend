import React, { useEffect, useState } from "react";
import "./attackTeam.css";
import { playerType } from "../../redux/types/players/playersTypeData";
type attackTeamParam = {
	team: playerType[] | null;
};
type attackTeamPositions = {
	wr: playerType[];
	ot: playerType[];
	og: playerType[];
	c: playerType[];
	te: playerType[];
	qb: playerType[];
	fb: playerType[];
	tb: playerType[];
};

export default function AttackTeam({ team }: attackTeamParam) {
	const [playersXPositions, setPlayersXPositions] =
		useState<attackTeamPositions>({
			wr: [],
			ot: [],
			og: [],
			c: [],
			te: [],
			qb: [],
			fb: [],
			tb: [],
		});

	useEffect(() => {
		if (team) {
			let wrPlayers: playerType[] = [];
			let otPlayers: playerType[] = [];
			let ogPlayers: playerType[] = [];
			let cPlayers: playerType[] = [];
			let tePlayers: playerType[] = [];
			let qbPlayers: playerType[] = [];
			let fbPlayers: playerType[] = [];
			let tbPlayers: playerType[] = [];
			team.forEach((player) => {
				if (player.images.photo !== "") {
					let positionPlayer = player.infoCurrentTeam.position;
					if (positionPlayer === "WR") wrPlayers.push(player);
					if (positionPlayer === "OT" || positionPlayer === "T")
						otPlayers.push(player);
					if (positionPlayer === "OG" || positionPlayer === "G")
						ogPlayers.push(player);
					if (positionPlayer === "C") cPlayers.push(player);
					if (positionPlayer === "TE") tePlayers.push(player);
					if (positionPlayer === "QB") qbPlayers.push(player);
					if (positionPlayer === "FB" || positionPlayer === "RB")
						fbPlayers.push(player);
					if (positionPlayer === "TB" || positionPlayer === "RB")
						tbPlayers.push(player);
				}
			});
			setPlayersXPositions({
				wr: wrPlayers,
				ot: otPlayers,
				og: ogPlayers,
				c: cPlayers,
				te: tePlayers,
				qb: qbPlayers,
				fb: fbPlayers,
				tb: tbPlayers,
			});
		}
	}, [team]);

	return playersXPositions.wr.length !== 0 ? (
		<div className="field-image">
			<div
				className="box box-attack-1"
				style={{
					backgroundImage: `url(${playersXPositions.wr[0].images.photo})`,
				}}
			>
				<h5>WR</h5>
			</div>
			<div
				className="box box-attack-2"
				style={{
					backgroundImage: `url(${playersXPositions.ot[0].images.photo})`,
				}}
			>
				<h5>OT</h5>
			</div>
			<div
				className="box box-attack-3"
				style={{
					backgroundImage: `url(${playersXPositions.og[0].images.photo})`,
				}}
			>
				<h5>OG</h5>
			</div>
			<div
				className="box box-attack-4"
				style={{
					backgroundImage: `url(${playersXPositions.c[0].images.photo})`,
				}}
			>
				<h5>C</h5>
			</div>
			<div
				className="box box-attack-5"
				style={{
					backgroundImage: `url(${playersXPositions.og[1].images.photo})`,
				}}
			>
				<h5>OG</h5>
			</div>
			<div
				className="box box-attack-6"
				style={{
					backgroundImage: `url(${playersXPositions.ot[1].images.photo})`,
				}}
			>
				<h5>OT</h5>
			</div>
			<div
				className="box box-attack-7"
				style={{
					backgroundImage: `url(${playersXPositions.te[0].images.photo})`,
				}}
			>
				<h5>TE</h5>
			</div>
			<div
				className="box box-attack-8"
				style={{
					backgroundImage: `url(${playersXPositions.qb[0].images.photo})`,
				}}
			>
				<h5>QB</h5>
			</div>
			<div
				className="box box-attack-9"
				style={{
					backgroundImage: `url(${playersXPositions.wr[1].images.photo})`,
				}}
			>
				<h5>WR</h5>
			</div>
			<div
				className="box box-attack-10"
				style={{
					backgroundImage: `url(${playersXPositions.fb[0].images.photo})`,
				}}
			>
				<h5>FB</h5>
			</div>
			<div
				className="box box-attack-11"
				style={{
					backgroundImage: `url(${playersXPositions.tb[2].images.photo})`,
				}}
			>
				<h5>TB</h5>
			</div>
		</div>
	) : (
		<></>
	);
}
