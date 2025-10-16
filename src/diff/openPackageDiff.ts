import type { CommandFlags } from "../cli/impl";
import {
	getUpToCompareMessage,
	getUpToDateMessage,
	getVersionString,
} from "../outputStrings";
import { printRepoLinks } from "../printRepoLinks";
import { runScript } from "../runScript";
import { npmDiffPackage } from "./npmDiffPackage";

export const openPackageDiff = async ({
	target,
	packageName,
	used,
	wanted,
}: CommandFlags & { packageName: string; wanted: string; used: string }) => {
	if (used === target)
		return console.log(
			getUpToDateMessage({ packageName: packageName, used, wanted }),
		);

	console.log(
		getUpToCompareMessage({ packageName: packageName, used, wanted, target }),
	);

	void printRepoLinks({ packageName: packageName, target, version: used });

	const diffFile = await npmDiffPackage({
		packageName: packageName,
		target,
		version: used,
	});

	const title = `npm-peek: ${packageName} ${getVersionString({ used, wanted })} → ${target}`;
	await runScript(
		`npx -y diff2html-cli --cs light -s side -t "${title}" -i file -- ${diffFile}`,
	);
};
