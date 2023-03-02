export type filtersGenericPage = {
	searchInpit?: string | null;
	checkOptions?: { [key: string]: boolean } | null;
	sortSelected?: string;
	page?: number;
};
export type loguinData = {
	username: string;
	password: string;
};
