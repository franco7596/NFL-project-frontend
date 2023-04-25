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
import SearchBoard from "../filters/SearchBoard";
import FilterCard from "../filters/FilterCard";
import SortCard from "../filters/SortCard";
import Loading from "../loading/Loading";

type checkBoxType = {
	[key: string]: boolean;
};
const optionsToSortByGamesWon = [
	{
		typeOption: "won DESC",
		textSort: "Most Winner",
	},
	{
		typeOption: "won ASC",
		textSort: "less winner",
	},
];
const optionsToSortByAge = [
	{
		typeOption: "established ASC",
		textSort: "Older",
	},
	{
		typeOption: "established DESC",
		textSort: "Younger",
	},
];

export default function Teams() {
	const [sortSelected, setSortSelected] = useState("");
	const [checkOptions, setCheckOptions] = useState<null | checkBoxType>(null);
	const [searchInpit, setSearchInpit] = useState<null | string>(null);

	const dispach = useDispatch();
	const teams = useSelector((state: stateType) => state.teams.teams);
	const divisions = useSelector(
		(state: stateType) => state.teams.comboDivisions
	);
	useEffect(() => {
		dispach(startGetTeams());
		dispach(startGetTeamDivisions());
	}, []);

	useEffect(() => {
		if (divisions) {
			const checkStatus: checkBoxType = {};
			divisions.forEach((division) => {
				checkStatus[division.id] = false;
			});
			setCheckOptions(checkStatus);
		}
	}, [divisions]);

	useEffect(() => {
		if (checkOptions)
			dispach(
				startGetTeams({
					checkOptions,
					sortSelected,
					searchInpit,
				})
			);
	}, [checkOptions, sortSelected, searchInpit]);

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setSearchInpit(e.target.value);
		} else {
			setSearchInpit(null);
		}
	};
	const handleCheckDivision = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (checkOptions)
			setCheckOptions({
				...checkOptions,
				[e.target.value]: !checkOptions[e.target.value],
			});
	};
	const handleRadioSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSortSelected(e.target.value);
	};

	return teams ? (
		<section className="teams-section">
			<SearchBoard
				handleSearch={handleSearchInput}
				placeholder={"TEAM NAME..."}
			/>
			<div className="filters-container">
				<div className="filters-section">
					{divisions !== null && (
						<FilterCard
							typeOfFilter="filtered by division"
							optionsCheck={divisions}
							handleCheck={handleCheckDivision}
						/>
					)}
					<SortCard
						typeOfSort="Games Won"
						handleSort={handleRadioSort}
						sortSelected={sortSelected}
						optionsToSort={optionsToSortByGamesWon}
					/>
					<SortCard
						typeOfSort="Age"
						handleSort={handleRadioSort}
						sortSelected={sortSelected}
						optionsToSort={optionsToSortByAge}
					/>
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
	) : (
		<Loading />
	);
}
