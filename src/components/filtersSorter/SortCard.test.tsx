import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SortCard from "./SortCard";

const typeOfSortData = "test sort card";
const optionsToSortData = [
	{
		typeOption: "t1",
		textSort: "text1",
	},
	{
		typeOption: "t2",
		textSort: "text2",
	},
];

describe("SortCard component", () => {
	test("correct render", () => {
		let optionSelected = "";
		const handlerData = (e: React.ChangeEvent<HTMLInputElement>) => {
			optionSelected = e.target.value;
		};
		render(
			<SortCard
				typeOfSort={typeOfSortData}
				handleSort={handlerData}
				sortSelected={optionSelected}
				optionsToSort={optionsToSortData}
			/>
		);
		const optionsRadio = screen.getAllByRole("radio");
		expect(optionsRadio).toHaveLength(optionsToSortData.length);
		const title = screen.getByRole("heading", {
			name: `sort by ${typeOfSortData}`,
		});
		expect(title).toBeInTheDocument();
		optionsToSortData.forEach((option) => {
			const optionRadio = screen.getByText(option.textSort);
			expect(optionRadio).toBeInTheDocument();
		});
	});
	test("Correct functions works", () => {
		let optionSelected = "";
		const handlerData = (e: React.ChangeEvent<HTMLInputElement>) => {
			optionSelected = e.target.value;
		};
		render(
			<SortCard
				typeOfSort={typeOfSortData}
				handleSort={handlerData}
				sortSelected={optionSelected}
				optionsToSort={optionsToSortData}
			/>
		);
		const labelOptionRadio = screen.getByText(optionsToSortData[0].textSort);
		fireEvent.click(labelOptionRadio);
		expect(optionSelected).toBe(optionsToSortData[0].typeOption);
	});
});
