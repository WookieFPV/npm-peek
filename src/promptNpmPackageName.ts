import { search } from "@inquirer/prompts";
import { getPackageJsonDeps } from "./filesystem/getPackageJsonDeps";
import { fuzzySearch } from "./helper/FuzzySearch";
import { tryCatch } from "./helper/tryCatch";

export const promptNpmPackageName = async (input?: string | undefined) => {
	if (input) return input;

	// If nothing was provided, prompt the user:
	const packageObject = await getPackageJsonDeps();
	const packageList = Object.keys(packageObject);
	const { data } = await tryCatch(
		search({
			message: "Select a npm package to diff:",
			source: (term) =>
				fuzzySearch(packageList, term).map((pkg) => ({
					value: pkg,
					name: pkg,
				})),
		}),
	);
	if (data) return data;
	console.log(" ❌ No package name selected.");
	process.exit(0);
};
