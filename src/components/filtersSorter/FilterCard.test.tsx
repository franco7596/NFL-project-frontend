import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import FilterCard from "./FilterCard";

const optionsToCheck = [
	{
		id: 1,
		name: "test1",
	},
	{
		id: 2,
		name: "test2",
	},
	{
		id: 3,
		name: "test3",
	},
];

const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {};

describe("FilterCard component", () => {
	test("correct render", () => {
		render(
			<FilterCard
				typeOfFilter="Test"
				optionsCheck={optionsToCheck}
				handleCheck={handleCheck}
			/>
		);
		const titleCard = screen.getByText("filtered by Test");
		expect(titleCard).toBeInTheDocument();
		const checkOptions = screen.getAllByRole("checkbox");
		expect(checkOptions).toHaveLength(optionsToCheck.length);
		optionsToCheck.forEach((checkOption) => {
			const containerCheckOption = screen.getByText(checkOption.name);
			expect(containerCheckOption).toBeInTheDocument();
			const idCheckOption = containerCheckOption.getAttribute("for");
			const inputWithId = screen.getByRole("checkbox", {
				name: idCheckOption || "",
			});
			expect(inputWithId).toBeInTheDocument();
			expect(idCheckOption).toBe(inputWithId.getAttribute("id"));
		});
	});
	test("Correct functions works", () => {
		render(
			<FilterCard
				typeOfFilter="Test"
				optionsCheck={optionsToCheck}
				handleCheck={handleCheck}
			/>
		);
		optionsToCheck.forEach((checkOption) => {
			const inputWithId = screen.getByRole("checkbox", {
				name: checkOption.name || "",
			});
			fireEvent.change(inputWithId, { target: { value: "" } });
			expect(inputWithId.onchange).toBeCalled;
		});
	});
});
