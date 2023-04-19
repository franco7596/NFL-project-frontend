import React from "react";
import "./filters.css";
import searchImage from "../../assets/icons/search.svg";
type searchCardType = {
	placeholder: string;
	handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBoard({
	placeholder,
	handleSearch,
}: searchCardType) {
	return (
		<div className="search-container">
			<div>
				<img src={searchImage} alt="search-image" />
				<input placeholder={placeholder} onChange={handleSearch} />
			</div>
		</div>
	);
}
