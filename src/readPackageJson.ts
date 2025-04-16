import fs from "node:fs/promises";
import path from "node:path";
import { getNodeModulesFolders } from "./helper/getNodeModulesFolders";
import type { PackageJson } from "./packageDeps";

export const readPackageJson = async (
	packageName: string,
): Promise<PackageJson | undefined> => {
	const packageJsonPaths = getNodeModulesFolders.map((folder) =>
		path.join(folder, packageName, "package.json"),
	);
	// Try each path until we find a valid package.json
	for (const packagePath of packageJsonPaths) {
		try {
			const content = await fs.readFile(packagePath, "utf-8");
			return JSON.parse(content) as PackageJson;
		} catch (error) {
			// File doesn't exist or cannot be read, continue to the next path
		}
	}
	// If no package.json was found
	return undefined;
};
