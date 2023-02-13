import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
	return (
		<div>
			<article className="home-container-teams">
				<div className="home-div-button">
					<Link to="/Teams" className="home-button button grow" type="button">
						<h1 className="home-h1">TEAMS</h1>
					</Link>
				</div>
			</article>
			<article className="home-container-players">
				<div className="home-div-button">
					<Link to="/Players" className="home-button button grow" type="button">
						<h1 className="home-h1">PLAYERS</h1>
					</Link>
				</div>
			</article>
		</div>
	);
}
