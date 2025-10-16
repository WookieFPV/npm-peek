import process from "node:process";
import { getPackageJsonDeps } from "./getPackageJsonDeps";
import { readDependencyPackageJson } from "./readDependencyPackageJson";

export type PackageJson = {
	version: string;
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
	repository?:
		| { url?: string; type?: string; directory?: string; baseUrl?: string }
		| string
		| undefined;
};

export const getPackageVersion = async (
	packageName: string,
): Promise<{ wanted: string; used: string }> => {
	const deps = await getPackageJsonDeps();

	const packageJson = await readDependencyPackageJson(packageName);
	if (!packageJson) {
		console.log(
			` ❌  "${packageName}" not found in node_modules. Please install packages first.`,
		);
		process.exit(1);
	}
	const versionRange = deps[packageName];
	if (!versionRange) {
		console.log(`Unable to find "${packageName}" in package.json deps`);
		process.exit(1);
	}
	const usedVersion = packageJson.version;

	return { wanted: versionRange, used: usedVersion };
};
