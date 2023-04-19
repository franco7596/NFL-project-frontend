import React from "react";
import "./filters.css";

type filterCardType = {
	typeOfFilter: string;
	optionsCheck: {
		id: number;
		name: string;
	}[];
	handleCheck: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function FilterCard({
	typeOfFilter,
	optionsCheck,
	handleCheck,
}: filterCardType) {
	return (
		<div className="card-filters">
			<h5>filtered by {typeOfFilter}</h5>
			{optionsCheck?.map((optionCheck) => (
				<div className="form-check" key={optionCheck.id}>
					<input
						className="form-check-input button"
						type="checkbox"
						value={optionCheck.id}
						id={optionCheck.name}
						onChange={handleCheck}
					/>
					<label className="form-check-label button" htmlFor={optionCheck.name}>
						{optionCheck.name}
					</label>
				</div>
			))}
		</div>
	);
}
