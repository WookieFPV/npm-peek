import fsP from "node:fs/promises";
import path from "node:path";
import { tryCatch } from "../helper/tryCatch";

/**
 * Check if outputPath exists
 * If not create it using createFile function
 */
export const cachedFileOperation = async ({
	outputPath,
	createFile,
}: {
	outputPath: string;
	createFile: () => Promise<unknown>;
}): Promise<string> => {
	const { error } = await tryCatch(fsP.access(outputPath));
	if (!error) return outputPath;
	await tryCatch(fsP.mkdir(path.dirname(outputPath), { recursive: true }));

	await createFile();
	return outputPath;
};
