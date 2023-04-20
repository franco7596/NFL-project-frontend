import React from "react";
import "./loading.css";
import logoNFL from "../../assets/icons/logo-NFL.png";

export default function Loading() {
	return (
		<div className="loading-container">
			<span className="loader" />;
			<div className="loader-image">
				<img src={logoNFL} alt="nfl-logo" />
				<h3>Loading . . .</h3>
			</div>
		</div>
	);
}
