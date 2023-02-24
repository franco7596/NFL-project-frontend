import React from "react";

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
		<div>
			<h4>Filters</h4>
			<div className="">
				<h6>filtered by {typeOfFilter}</h6>
				{optionsCheck?.map((optionCheck) => (
					<div className="form-check" key={optionCheck.id}>
						<input
							className="form-check-input check-button"
							type="checkbox"
							value={optionCheck.id}
							id={optionCheck.name}
							onChange={handleCheck}
						/>
						<label
							className="form-check-label check-button"
							htmlFor={optionCheck.name}
						>
							{optionCheck.name}
						</label>
					</div>
				))}
			</div>
		</div>
	);
}
