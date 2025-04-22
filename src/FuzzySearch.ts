import { search as fzSearch } from "fast-fuzzy";

export const fuzzySearch = (
	options: string[],
	search: string | undefined,
): string[] => {
	if (!search || search === "") return options;
	return fzSearch(search, options);
};
