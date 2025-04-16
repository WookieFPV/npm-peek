import { $ } from "zx";
import { getLatestPackageVersion } from "./getLatestPackageVersion";
import { npmDiffPackage } from "./npmDiffPackage";
import { getPackageVersion } from "./packageDeps";

export const openPackageDiff = async (packageName: string) => {
	const version = await getPackageVersion(packageName);
	const latest = await getLatestPackageVersion(packageName);
	if (version === latest)
		return console.log(
			`✅ Package ${packageName} is already up to date: ${version}`,
		);

	console.log(`🔍 Comparing ${packageName}: v${version} → v${latest}`);

	const diffFile = await npmDiffPackage({ packageName, latest, version });

	const title = `npm-peek: ${packageName} (v${version} → v${latest})`;
	await $`npx -y diff2html-cli --cs light -s side -t ${title} -i file -- ${diffFile}`;
};
