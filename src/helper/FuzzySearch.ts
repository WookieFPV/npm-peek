import { type FullOptions, search as fzSearch } from "fast-fuzzy";
import type { VersionItem } from "../api/npmjs";

export const fuzzySearch = (
	candidates: string[],
	search: string | undefined,
): string[] => {
	if (!search || search === "") return candidates;
	return fzSearch(search ?? "", candidates);
};

const labelFuzzyOptions: FullOptions<VersionItem> = {
	keySelector: ([label]) => label,
	threshold: 0.9,
};
export const labelFuzzySearch = (
	candidates: VersionItem[],
	search: string | undefined,
): VersionItem[] => {
	if (!search || search === "") return candidates;
	return fzSearch(search ?? "", candidates, labelFuzzyOptions);
};
