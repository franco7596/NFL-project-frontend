import React from "react";
import { useParams } from "react-router-dom";

export default function Player() {
	const { idPlayer } = useParams();
	return <div>Player{idPlayer}</div>;
}
