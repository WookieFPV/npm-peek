import { search } from "@inquirer/prompts";
import { search as fzSearch } from "fast-fuzzy";
import { getPackageJsonDeps } from "./getPackageJsonDeps";

export const PROMPT_EMPTY = "__PROMPT_EMPTY__";

export const parsePackageNameOrPrompt = async (_input: string) => {
	const input = String(_input);
	if (input !== PROMPT_EMPTY) return input;

	// If nothing was provided, prompt the user:
	const packageObject = await getPackageJsonDeps();
	const packageList = Object.keys(packageObject);

	return search({
		message: "npm package to check",
		source: (term = "") =>
			fzSearch(term, packageList).map((pkg) => ({
				value: pkg,
				name: pkg,
			})),
	});
};
