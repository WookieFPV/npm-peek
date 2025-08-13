import fs from "node:fs/promises";
import path from "node:path";
import { $ } from "zx";
import { createTempDir } from "./helper/tempDir";
import { tryCatch } from "./helper/tryCatch";
import type { UpdateInfo } from "./UpdateInfo";

export const npmDiffPackage = async ({
	packageName,
	latest,
	version,
}: UpdateInfo) => {
	const packageFileName = packageName.replace(/[/\\?%*:|"<>]/g, "_");

	const tmpFolder = await createTempDir("npm-peek", "-diff-cache");
	const diffFile = path.join(
		tmpFolder,
		`${packageFileName}_${version}->${latest}_diff.txt`,
	);

	const { error } = await tryCatch(fs.access(diffFile));
	if (!error) {
		return diffFile;
	}

	await $`npm diff --diff=${packageName}@${version} --diff=${packageName}@${latest}`.pipe(
		$`tee ${diffFile}`,
	);
	return diffFile;
};
