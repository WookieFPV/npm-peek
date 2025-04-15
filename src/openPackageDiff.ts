import { $ } from "zx";
import { getLatestPackageVersion } from "./getLatestPackageVersion";
import { npmDiffPackage } from "./npmDiffPackage";
import { getPackageVersion } from "./packageDeps";

export const openPackageDiff = async (packageName: string) => {
	const version = await getPackageVersion(packageName);
	const latest = await getLatestPackageVersion(packageName);
	console.log(`diff ${packageName} ${version} -> ${latest}`);

	const diffFile = await npmDiffPackage({ packageName, latest, version });

	const title = `${packageName} diff: ${version} -> ${latest}`;
	await $`npx -y diff2html-cli --cs light -s side -t ${title} -i file -- ${diffFile}`;
};
