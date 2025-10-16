import open from "open";
import {
	getUpToCompareMessage,
	getUpToDateMessage,
	getVersionString,
} from "../outputStrings";
import { printRepoLinks } from "../printRepoLinks";
import { getHtmlDiffPath } from "./getHtmlDiffPath";
import { npmDiffPackage } from "./npmDiffPackage";

export const openPackageDiff = async ({
	target,
	packageName,
	used,
	wanted,
}: {
	target: string;
	packageName: string;
	wanted: string;
	used: string;
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
	const htmlDiffFilePath = await getHtmlDiffPath(diffTxtFilePath, title);
	await open(htmlDiffFilePath);
};
