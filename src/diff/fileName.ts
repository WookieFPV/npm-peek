import { tmpdir } from "node:os";
import path from "node:path";
import type { UpdateInfo } from "../types/UpdateInfo";

const sanitizeFileName = (name: string) =>
	path.basename(name).replace(/[/\\?%*:|"<>]/g, "_");

export type FileOutput = {
	diffFile: string;
	htmlFile: string;
};

export const getFileNames = ({
	packageName,
	version,
	target,
}: Omit<UpdateInfo, "outputPath">): FileOutput => {
	const tmpDir = path.join(tmpdir(), `npm-peek-diff-cache`);
	const baseFileName = `${sanitizeFileName(packageName)}_${version}__${target}_diff`;

	return {
		diffFile: path.join(tmpDir, `${baseFileName}.txt`),
		htmlFile: path.join(tmpDir, `${baseFileName}.html`),
	};
};
