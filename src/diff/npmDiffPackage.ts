import { spawn } from "node:child_process";
import fs from "node:fs/promises";
import path from "node:path";
import { createTempDir } from "../helper/tempDir";
import { tryCatch } from "../helper/tryCatch";
import type { UpdateInfo } from "../types/UpdateInfo";

export const npmDiffPackage = async ({
	packageName,
	target,
	version,
}: UpdateInfo) => {
	const packageFileName = packageName.replace(/[/\\?%*:|"<>]/g, "_");
	const tmpFolder = await createTempDir("npm-peek", "-diff-cache");
	const diffFile = path.join(
		tmpFolder,
		`${packageFileName}_${version}__${target}_diff.txt`,
	);
	const { error } = await tryCatch(fs.access(diffFile));
	if (!error) return diffFile;

	const args = [
		"diff",
		`--diff=${packageName}@${version}`,
		`--diff=${packageName}@${target}`,
	];

	const output = await new Promise<string>((resolve, reject) => {
		const child = spawn("npm", args, { stdio: ["ignore", "pipe", "pipe"] });
		let stdout = "";
		let stderr = "";
		child.stdout.on("data", (data) => {
			stdout += data;
		});
		child.stderr.on("data", (data) => {
			stderr += data;
		});
		child.on("close", (code) => {
			if (code === 0 || (code === 1 && stdout)) {
				resolve(stdout);
			} else {
				reject(new Error(stderr || `npm diff exited with code ${code}`));
			}
		});
	});

	await fs.writeFile(diffFile, output);
	return diffFile;
};
