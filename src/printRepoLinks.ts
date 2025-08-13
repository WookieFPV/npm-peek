import { getPackageUrl } from "./getPackageUrl/getPackageUrl";
import { getRepoType } from "./getPackageUrl/getRepoType";
import { readPackageJson } from "./readPackageJson";
import type { UpdateInfo } from "./UpdateInfo";

export const printRepoLinks = async ({
	packageName,
	version,
	latest,
}: UpdateInfo): Promise<void> => {
	const packageJson = await readPackageJson(packageName);
	if (!packageJson) {
		console.error(
			`❌  "${packageName}" not found in node_modules. Please install packages first.`,
		);
		return;
	}

	const url = getPackageUrl(packageJson.repository);
	if (!url) return;

	const type = getRepoType(url);
	if (type === "github") {
		console.log(`GitHub diff link: ${url}/compare/v${version}...v${latest}`);
		console.log(`GitHub Releases: ${url}/releases`);
	} else if (type === "bitbucket") {
		console.log(
			`Bitbucket diff link: ${url}/compare/diff?sourceBranch=refs%2Ftags%2Fv${latest}&targetBranch=refs%2Ftags%2Fv${version}`,
		);
	} else if (type === "gitlab") {
		console.log(
			`Bitbucket diff link: ${url}/compare/diff?sourceBranch=refs%2Ftags%2Fv${latest}&targetBranch=refs%2Ftags%2Fv${version}`,
		);
	}
};
