import { search } from "@inquirer/prompts";
import { getPackageJsonDeps } from "./filesystem/getPackageJsonDeps";
import { fuzzySearch } from "./helper/FuzzySearch";
import { tryCatch } from "./helper/tryCatch";

export const PROMPT_EMPTY = "__PROMPT_EMPTY__";

export const parsePackageNameOrPrompt = async (_input: string) => {
	const input = String(_input);
	if (input !== PROMPT_EMPTY) return input;

	// If nothing was provided, prompt the user:
	const packageObject = await getPackageJsonDeps();
	const packageList = Object.keys(packageObject);
	const { data } = await tryCatch(
		search({
			message: "npm package to check",
			source: (term) =>
				fuzzySearch(packageList, term).map((pkg) => ({
					value: pkg,
					name: pkg,
				})),
		}),
	);
	if (data) return data;
	console.log("❌ No package name selected.");
	process.exit(0);
};
