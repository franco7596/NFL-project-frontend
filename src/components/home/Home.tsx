import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
import NFLWhithe from "../../assets/heroeImages/logo_nfl_white.png"

export default function Home() {
	return (
		<div>
			<section className="banner">
				<h1 >national football league</h1>
				<div style={{backgroundImage: `url(${NFLWhithe})`}}/>
			</section>
			<section className="home-container-teams">
				<div className="home-div-button">
					<Link to="/Teams" className="home-button button grow" type="button">
						<h1 className="home-h1">TEAMS</h1>
					</Link>
				</div>
			</section>
			<section className="home-container-players">
				<div className="home-div-button">
					<Link to="/Players" className="home-button button grow" type="button">
						<h1 className="home-h1">PLAYERS</h1>
					</Link>
				</div>
			</section>
		</div>
	);
}
