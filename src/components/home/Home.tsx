import { Link } from "react-router-dom";
import "./home.css";
import bannerImage from "../../assets/banner/banner.png";
import nflWhite from "../../assets/heroeImages/logo_nfl_white.png";
import teamsImage from "../../assets/heroeImages/team_image.jpg";
import playersImage from "../../assets/heroeImages/player_image.jpg";

export default function Home() {
	return (
		<div className="home-container">
			<section className="banner">
				<h1 className="banner-title">national football league</h1>
				<img
					className="banner-logo-white"
					src={nflWhite}
					alt="banner-logo-nfl-white"
				/>
				<img className="banner-image" src={bannerImage} alt="banner-image" />
			</section>
			<section className="home-container-buttons">
				<Link to="/Teams" className="button button-teams" type="button">
					<span />
					<h4>TEAMS</h4>
					<img className="button-image" src={teamsImage} alt="teams-image" />
				</Link>
				<Link to="/Players" className="button button-players" type="button">
					<span />
					<h4>PLAYERS</h4>
					<img
						className="button-image"
						src={playersImage}
						alt="players-image"
					/>
				</Link>
			</section>
		</div>
	);
}
