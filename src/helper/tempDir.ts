import fs from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

export const createTempDir = async (
	name: string,
	suffix = `${Date.now()}`,
): Promise<string> => {
	const tmpDir = path.join(tmpdir(), `${name}-${suffix}`);
	await fs.mkdir(tmpDir, { recursive: true });
	return tmpDir;
};
