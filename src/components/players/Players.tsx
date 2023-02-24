import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	startGetPlayers,
	startGetPlayerStatus,
} from "../../redux/actions/playersAction";
import { stateType } from "../../redux/store";
import FilterCard from "../filtersSorter/FilterCard";
import SearchBoard from "../filtersSorter/SearchBoard";
import SortCard from "../filtersSorter/SortCard";
import TablePlayers from "./TablePlayers";

const optionsToSortByWeigth = [
	{
		id: "won1",
		typeOption: "won ASC",
		textSort: "less winner",
	},
	{
		id: "won2",
		typeOption: "won DESC",
		textSort: "most winner",
	},
];
const optionsToSortByAge = [
	{
		id: "established1",
		typeOption: "established ASC",
		textSort: "Older",
	},
	{
		id: "established2",
		typeOption: "established DESC",
		textSort: "Younger",
	},
];

export default function Players() {
	const dispach = useDispatch();
	const players = useSelector((state: stateType) => state.players.players);
	const currentPage = useSelector(
		(state: stateType) => state.players.currentPage
	);
	const numPages = useSelector((state: stateType) => state.players.numPages);
	const playerStatus = useSelector(
		(state: stateType) => state.players.comboStatus
	);
	const [radioSort, setRadioSort] = useState("won ASC");
	const [sortSelected, setSortSelected] = useState("");
	useEffect(() => {
		dispach(startGetPlayers());
		dispach(startGetPlayers());
		dispach(startGetPlayerStatus());
	}, []);

	const handleSearchInput = () => {};
	const handleCheckDivision = () => {};
	const handleRadioSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		setRadioSort(e.target.value);
	};

	return (
		<section className="">
			<SearchBoard
				handleSearch={handleSearchInput}
				placeholder={"PLAYER NAME..."}
			/>
			{playerStatus !== null && (
				<FilterCard
					typeOfFilter="Player Status"
					optionsCheck={playerStatus}
					handleCheck={handleCheckDivision}
				/>
			)}
			<SortCard
				typeOfSort="weigth"
				handleSort={handleRadioSort}
				sortSelected={sortSelected}
				optionsToSort={optionsToSortByWeigth}
			/>
			<SortCard
				typeOfSort="age"
				handleSort={handleRadioSort}
				sortSelected={sortSelected}
				optionsToSort={optionsToSortByAge}
			/>
			{players !== null && <TablePlayers players={players} />}
		</section>
	);
}
