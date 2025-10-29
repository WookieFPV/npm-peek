import { spawn } from "node:child_process";
import fs from "node:fs";
import { cachedFileOperation } from "../filesystem/cachedFileOperation";
import type { UpdateInfo } from "../types/UpdateInfo";

export const npmDiffPackage = async ({
	packageName,
	target,
	version,
	outputPath,
}: UpdateInfo) =>
	cachedFileOperation({
		outputPath,
		createFile: () =>
			npmDiffToFile({ outputPath, packageName, target, version }),
	});

const npmDiffToFile = async (info: UpdateInfo) => {
	const args = [
		"diff",
		`--diff=${info.packageName}@${info.version}`,
		`--diff=${info.packageName}@${info.target}`,
	];
	return new Promise<string>((resolve, reject) => {
		const child = spawn("npm", args, { stdio: ["ignore", "pipe", "pipe"] });
		const writeStream = fs.createWriteStream(info.outputPath, {
			encoding: "utf8",
		});
		let stderr = "";

		child.stderr.on("data", (data) => {
			stderr += data;
		});

		child.stdout.pipe(writeStream);

		child.on("close", (code) => {
			writeStream.end();
			if (code === 0 || code === 1) {
				resolve(info.outputPath);
			} else {
				reject(new Error(stderr || `npm diff exited with code ${code}`));
			}
		});

		child.on("error", (err) => {
			writeStream.end();
			reject(err);
		});
	});
};
