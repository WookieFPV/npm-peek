import fs from "node:fs/promises";
import path from "node:path";
import { $ } from "zx";
import { createTempDir } from "./helper/tempDir";
import { tryCatch } from "./helper/tryCatch";

export const npmDiffPackage = async ({
	packageName,
	latest,
	version,
}: {
	packageName: string;
	version: string;
	latest: string;
}) => {
	const tmpFolder = await createTempDir("npm-peek", "-diff-cache");
	const diffFile = path.join(
		tmpFolder,
		`${packageName}_${version}_${latest}_diff.txt`,
	);

	const { error } = await tryCatch(fs.access(diffFile));
	if (!error) {
		console.log(`[npmDiffPackage] already exists: ${diffFile}`);
		return diffFile;
	}

	await $`npm diff --diff=${packageName}@${version} --diff=${packageName}@${latest}`.pipe(
		$`tee ${diffFile}`,
	);
	return diffFile;
};
