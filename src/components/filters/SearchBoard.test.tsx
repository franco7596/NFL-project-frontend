import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBoard from "./SearchBoard";

const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {};
const placeholderData = "input text";

describe("SearchBoard component", () => {
	test("correct render", () => {
		render(
			<SearchBoard placeholder={placeholderData} handleSearch={handleSearch} />
		);
		const searcher = screen.getByRole("textbox");
		expect(searcher).toBeInTheDocument();
		const placeholder = searcher.getAttribute("placeholder");
		expect(placeholder).toBe(placeholderData);
	});
	test("Correct functions works", () => {
		render(
			<SearchBoard placeholder={placeholderData} handleSearch={handleSearch} />
		);
		const searcher = screen.getByRole("textbox");
		fireEvent.change(searcher, { target: { value: "" } });
		expect(searcher.onchange).toBeCalled;
	});
});
