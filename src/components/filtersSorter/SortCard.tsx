import React from "react";
import { v4 as uuidv4 } from "uuid";

type SortCardType = {
	typeOfSort: string;
	optionsToSort: {
		typeOption: string;
		textSort: string;
	}[];
	handleSort: (e: React.ChangeEvent<HTMLInputElement>) => void;
	sortSelected: string;
};

export default function SortCard({
	typeOfSort,
	optionsToSort,
	handleSort,
	sortSelected,
}: SortCardType) {
	return (
		<div>
			<div className="card card-body">
				<h5>sort by {typeOfSort}</h5>
				{optionsToSort.map((optionSort) => (
					<div className="form-check" key={uuidv4()}>
						<input
							className="form-check-input"
							type="radio"
							name="radioSort"
							id={optionSort.typeOption}
							value={optionSort.typeOption}
							onChange={handleSort}
							checked={sortSelected === optionSort.typeOption}
						/>
						<label className="form-check-label" htmlFor={optionSort.typeOption}>
							{optionSort.textSort}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
