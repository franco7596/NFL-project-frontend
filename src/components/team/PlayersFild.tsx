import React from "react";
import { playerType } from "../../redux/types/players/playersTypeData";
type teamParam = {
	team: playerType[];
	positions: {
		namePositionsEquivalent: string[];
		namePosition: string;
		positionX: number;
		positionY: number;
	}[];
};

export default function PlayersFild({ team, positions }: teamParam) {
	const getPlayers = () => {
		let players: number[] = [];
		positions.forEach((position) => {
			const playerIndex = team.findIndex((player, index) => {
				if (players.includes(index)) return false;
				let flagPositionEqual = false;
				position.namePositionsEquivalent.forEach((element) => {
					if (player.infoCurrentTeam.position === element)
						flagPositionEqual = true;
				});
				if (flagPositionEqual && player.images.photo !== "") return true;
			});
			if (playerIndex === -1) {
				players.push(getRandomInt(team.length - 1));
			}
			players.push(playerIndex);
		});
		return positions.map((position, index) => {
			return (
				<div
					key={index}
					className="box"
					style={{
						backgroundImage: `url(${team[players[index]].images.photo})`,
						top: `${position.positionY}px`,
						left: `${position.positionX}px`,
					}}
				>
					<h5>{position.namePosition}</h5>
				</div>
			);
		});
	};

	function getRandomInt(max: number) {
		return Math.floor(Math.random() * max);
	}

	return <div className="field-image">{getPlayers()}</div>;
}
