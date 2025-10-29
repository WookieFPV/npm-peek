import { oraTimedPromise } from "../cli/oraPromise";
import {
	getUpToCompareMessage,
	getUpToDateMessage,
	getVersionString,
} from "../outputStrings";
import { printRepoLinks } from "../printRepoLinks";
import { getFileNames } from "./fileName";
import { htmlDiff } from "./getHtmlDiffPath";
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
	const files = getFileNames({ packageName, target, version: used });

	await printRepoLinks({
		packageName: packageName,
		target,
		version: used,
		outputPath: files.diffFile,
	});

	await oraTimedPromise(
		npmDiffPackage({
			packageName: packageName,
			target,
			version: used,
			outputPath: files.diffFile,
		}),
		{ label: "Generating Diff" },
	);

	const title = `npm-peek: ${packageName} ${getVersionString({ used, wanted })} → ${target}`;
	await oraTimedPromise(htmlDiff(files, title, exp), {
		label: "Generating HTML",
	});
};
