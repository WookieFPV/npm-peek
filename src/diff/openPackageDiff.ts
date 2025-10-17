import open from "open";
import {
	getUpToCompareMessage,
	getUpToDateMessage,
	getVersionString,
} from "../outputStrings";
import { printRepoLinks } from "../printRepoLinks";
import { runScript } from "../runScript";
import { getHtmlDiffPath } from "./getHtmlDiffPath";
import { npmDiffPackage } from "./npmDiffPackage";

export const openPackageDiff = async ({
	target,
	packageName,
	used,
	wanted,
	exp,
}: {
	target: string;
	packageName: string;
	wanted: string;
	used: string;
	exp?: boolean;
}) => {
	if (used === target)
		return console.log(
			getUpToDateMessage({ packageName: packageName, used, wanted }),
		);

	console.log(
		getUpToCompareMessage({ packageName: packageName, used, wanted, target }),
	);

	void printRepoLinks({ packageName: packageName, target, version: used });

	const diffTxtFilePath = await npmDiffPackage({
		packageName: packageName,
		target,
		version: used,
	});

	const title = `npm-peek: ${packageName} ${getVersionString({ used, wanted })} → ${target}`;
	if (exp) {
		const htmlDiffFilePath = await getHtmlDiffPath(diffTxtFilePath, title);
		await open(htmlDiffFilePath);
	} else {
		await runScript(
			`npx -y diff2html-cli --su open --cs light -s side -t "${title}" -i file -- ${diffTxtFilePath}`,
		);
	}
};
