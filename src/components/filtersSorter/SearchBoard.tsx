import React from "react";

type searchCardType = {
	placeholder: string;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBoard({
	placeholder,
	handleSearch,
}: searchCardType) {
	return (
		<div className="teams-input">
			<input placeholder={placeholder} onChange={handleSearch} />
		</div>
	);
}
