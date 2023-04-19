import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	startGetPlayers,
	startGetPlayerStatus,
} from "../../redux/actions/playersAction";
import { stateType } from "../../redux/store";
import FilterCard from "../filters/FilterCard";
import SearchBoard from "../filters/SearchBoard";
import SortCard from "../filters/SortCard";
import Loading from "../loading/Loading";
import TablePlayers from "./TablePlayers";

const optionsToSortByExperience = [
	{
		typeOption: "experience DESC",
		textSort: "Expert",
	},
	{
		typeOption: "experience ASC",
		textSort: "rookie",
	},
];
const optionsToSortByAge = [
	{
		typeOption: "age DESC",
		textSort: "Older",
	},
	{
		typeOption: "age ASC",
		textSort: "Younger",
	},
];

type checkBoxType = {
	[key: string]: boolean;
};

export default function Players() {
	const dispach = useDispatch();
	const players = useSelector((state: stateType) => state.players.players);
	const playersLoading = useSelector(
		(state: stateType) => state.players.loading
	);
	const numPages = useSelector((state: stateType) => state.players.numPages);
	const playerStatus = useSelector(
		(state: stateType) => state.players.comboStatus
	);

	const [sortSelected, setSortSelected] = useState("");
	const [checkOptions, setCheckOptions] = useState<null | checkBoxType>(null);
	const [searchInpit, setSearchInpit] = useState<null | string>(null);
	const [currentPage, setCurrentPage] = useState(1);
	useEffect(() => {
		dispach(startGetPlayers());
		dispach(startGetPlayerStatus());
	}, []);

	useEffect(() => {
		if (playerStatus) {
			const checkStatus: checkBoxType = {};
			playerStatus.forEach((status) => {
				checkStatus[status.id] = false;
			});
			setCheckOptions(checkStatus);
		}
	}, [playerStatus]);

	useEffect(() => {
		if (checkOptions) {
			dispach(
				startGetPlayers({
					checkOptions,
					sortSelected,
					searchInpit,
					page: currentPage,
				})
			);
		}
	}, [sortSelected, checkOptions, searchInpit, currentPage]);

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value !== "") {
			setSearchInpit(e.target.value);
		} else {
			setSearchInpit(null);
		}
		handlePage(1);
	};
	const handleCheckDivision = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (checkOptions)
			setCheckOptions({
				...checkOptions,
				[e.target.value]: !checkOptions[e.target.value],
			});
		handlePage(1);
	};
	const handleRadioSort = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSortSelected(e.target.value);
		handlePage(1);
	};
	const handlePage = (page: number) => {
		setCurrentPage(page);
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
				typeOfSort="Experience"
				handleSort={handleRadioSort}
				sortSelected={sortSelected}
				optionsToSort={optionsToSortByExperience}
			/>
			<SortCard
				typeOfSort="Age"
				handleSort={handleRadioSort}
				sortSelected={sortSelected}
				optionsToSort={optionsToSortByAge}
			/>
			{players !== null && !playersLoading ? (
				<TablePlayers
					players={players}
					numPages={numPages}
					currentPage={currentPage}
					handlePage={handlePage}
				/>
			) : (
				<Loading />
			)}
		</section>
	);
}
