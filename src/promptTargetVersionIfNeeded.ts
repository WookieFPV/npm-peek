import { search } from "@inquirer/prompts";
import { fetchPackageVersions } from "./api/npmjs";
import { labelFuzzySearch } from "./helper/FuzzySearch";
import { tryCatch } from "./helper/tryCatch";

export const promptTargetVersionIfNeeded = async ({
	inputTarget,
	packageName,
	used,
}: {
	packageName: string;
	inputTarget: string | undefined;
	used: string;
}): Promise<string> => {
	const versions = await fetchPackageVersions(packageName);

	// lookup exact match first (match version or dist-tag)
	const result = versions.find(([, version]) => version === inputTarget);
	if (result) return result[1];

	const { data } = await tryCatch(
		search({
			message: `Select the target version to compare with (current: ${used}):`,
			source: (term) =>
				labelFuzzySearch(versions, term).map(([name, value]) => ({
					name: value === used ? `${name} <-- [used]` : name,
					value,
				})),
		}),
	);
	if (data) return data;
	console.log(" ❌ No target version selected.");
	process.exit(0);
};
