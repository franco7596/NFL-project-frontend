import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
	startGetTeamDivisions,
	startGetTeams,
} from "../../redux/actions/teamsAction";
import { stateType } from "../../redux/store";
import CardTeam from "./CardTeam";
import "./teams.css";
import { v4 as uuidv4 } from "uuid";

type checkBoxType = {
	[key: string]: boolean;
};

export default function Teams() {
	const [searchTeam, setSearchTeam] = useState<null | string>(null);
	const [checkDivision, setCheckDivision] = useState<null | checkBoxType>(null);
	const [radioSort, setRadioSort] = useState<string>("won ASC");
	const dispach = useDispatch();
	const teams = useSelector((state: stateType) => state.teams.teams);
	const divisions = useSelector(
		(state: stateType) => state.teams.comboDivisions
	);
	useEffect(() => {
		dispach(startGetTeams());
		dispach(startGetTeamDivisions());
	}, []);

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setSearchTeam(e.target.value);
		} else {
			setSearchTeam(null);
		}
	};
	useEffect(() => {
		if (divisions) {
			const divisionCheck: checkBoxType = {};
			divisions.forEach((division) => {
				divisionCheck[division.id] = false;
			});
			setCheckDivision(divisionCheck);
		}
	}, [divisions]);

	useEffect(() => {
		if (checkDivision)
			dispach(startGetTeams({ checkDivision, radioSort, searchTeam }));
	}, [checkDivision, radioSort, searchTeam]);

	const handleCheckDivision = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (checkDivision)
			setCheckDivision({
				...checkDivision,
				[e.target.value]: !checkDivision[e.target.value],
			});
	};

	const handleRadioSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadioSort(e.target.value);
	};

	return (
		<section className="teams-section">
			<div className="teams-input">
				<input placeholder="Name of team" onChange={handleSearchInput} />
			</div>
			<div>
				<h4>Filters</h4>
				<div className="card card-body">
					<h6>filtered by division</h6>
					{divisions?.map((division) => (
						<div className="form-check" key={division.id}>
							<input
								className="form-check-input check-button"
								type="checkbox"
								value={division.id}
								id={division.name}
								onChange={handleCheckDivision}
							/>
							<label
								className="form-check-label check-button"
								htmlFor={division.name}
							>
								{division.name}
							</label>
						</div>
					))}
				</div>
				<h4>Order</h4>
				<div className="card card-body">
					<h5>sort by games won</h5>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="radioSort"
							id="byGamesWonDESC"
							value="won DESC"
							onChange={handleRadioSort}
							checked={radioSort === "won DESC"}
						/>
						<label className="form-check-label" htmlFor="byGamesWonDESC">
							most winner
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="radioSort"
							id="byGamesWonASC"
							value="won ASC"
							onChange={handleRadioSort}
							checked={radioSort === "won ASC"}
						/>
						<label className="form-check-label" htmlFor="byGamesWonASC">
							less winner
						</label>
					</div>

					<h5>sort by age</h5>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="radioSort"
							id="byAgeASC"
							value="established ASC"
							checked={radioSort === "established ASC"}
							onChange={handleRadioSort}
						/>
						<label className="form-check-label" htmlFor="byAgeASC">
							Older
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="radioSort"
							id="byAgeDESC"
							value="established DESC"
							checked={radioSort === "established DESC"}
							onChange={handleRadioSort}
						/>
						<label className="form-check-label" htmlFor="byAgeDESC">
							Younger
						</label>
					</div>
				</div>
			</div>
			{teams && (
				<ul className="teams-ul">
					{teams.map((team) => (
						<CardTeam key={uuidv4()} team={team} />
					))}
				</ul>
			)}
		</section>
	);
}
