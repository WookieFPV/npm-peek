import { $ } from "zx";
import { getLatestPackageVersion } from "./getLatestPackageVersion";
import { npmDiffPackage } from "./npmDiffPackage";
import {
	getUpToCompareMessage,
	getUpToDateMessage,
	getVersionString,
} from "./outputStrings";
import { getPackageVersion } from "./packageDeps";
import { printRepoLinks } from "./printRepoLinks";

export const openPackageDiff = async (packageName: string) => {
	const { wanted, used } = await getPackageVersion(packageName);
	const latest = await getLatestPackageVersion(packageName);
	if (used === latest)
		return console.log(getUpToDateMessage({ packageName, used, wanted }));

	console.log(getUpToCompareMessage({ packageName, used, wanted, latest }));

	void printRepoLinks({ packageName, latest, version: used });

	const diffFile = await npmDiffPackage({ packageName, latest, version: used });

	const title = `npm-peek: ${packageName} ${getVersionString({ used, wanted })} → ${latest}`;
	await $`npx -y diff2html-cli --cs light -s side -t ${title} -i file -- ${diffFile}`;
};
