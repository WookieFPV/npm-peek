import { readPackageJson } from "./filesystem/readPackageJson";
import { getPackageUrl } from "./getPackageUrl/getPackageUrl";
import { getRepoType } from "./getPackageUrl/getRepoType";
import type { UpdateInfo } from "./types/UpdateInfo";

export const printRepoLinks = async ({
	packageName,
	version,
	target,
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
		console.log(`GitHub diff link: ${url}/compare/v${version}...v${target}`);
		console.log(`GitHub Releases: ${url}/releases`);
	} else if (type === "bitbucket") {
		console.log(
			`Bitbucket diff link: ${url}/compare/diff?sourceBranch=refs%2Ftags%2Fv${target}&targetBranch=refs%2Ftags%2Fv${version}`,
		);
	} else if (type === "gitlab") {
		console.log(
			`Bitbucket diff link: ${url}/compare/diff?sourceBranch=refs%2Ftags%2Fv${target}&targetBranch=refs%2Ftags%2Fv${version}`,
		);
	}
};
