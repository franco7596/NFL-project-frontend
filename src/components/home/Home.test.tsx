import { render, screen, within } from "@testing-library/react";
import { HashRouter } from "react-router-dom";
import Home from "./Home";
import "@testing-library/jest-dom";

describe("Home component", () => {
	test("correct render", () => {
		render(<Home />, { wrapper: HashRouter });
		const titleTeam = screen.getByText("TEAMS");
		expect(titleTeam).toBeInTheDocument();
		const titlePlayers = screen.getByText("PLAYERS");
		expect(titlePlayers).toBeInTheDocument();
		const linkTeam = screen.getAllByRole("link");
		expect(linkTeam).toHaveLength(2);
		linkTeam.forEach((link) => {
			expect(link).toBeInTheDocument();
		});
	});
	test("correct path link", () => {
		render(<Home />, { wrapper: HashRouter });
		const linkTeam = screen.getAllByRole("link");
		expect(linkTeam).toHaveLength(2);
		linkTeam.forEach((link) => {
			const nameLink = link
				.getAttribute("href")
				?.replace(/^#/, "")
				.replace(/\//g, "");
			let heading = undefined;
			if (nameLink)
				heading = within(link).getByText(new RegExp(`${nameLink}`, "i"));
			expect(heading).toBeInTheDocument();
			expect(link).toBeInTheDocument();
		});
	});
});
