import type { UpdateInfo } from "./UpdateInfo";
import { getPackageUrl } from "./getPackageUrl/getPackageUrl";
import { readPackageJson } from "./readPackageJson";

export const printGithubLinks = async ({
	packageName,
	version,
	latest,
}: UpdateInfo): Promise<void> => {
	const packageJson = await readPackageJson(packageName);
	if (!packageJson) {
		console.error(`Package "${packageName}" not found on filesystem`);
		return;
	}

	const url = getPackageUrl(packageJson.repository);
	if (!url) return;

	console.log(`GitHub diff link: ${url}/compare/v${version}...v${latest}`);
	console.log(`GitHub Releases: ${url}/releases`);
};
