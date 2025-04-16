import fs from "node:fs/promises";
import * as path from "node:path";
import process from "node:process";

export type PackageJson = {
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
): Promise<string> => {
	const packageJsonStr = await fs.readFile(
		path.join(process.cwd(), "package.json"),
		"utf-8",
	);
	const packageJson: PackageJson = JSON.parse(packageJsonStr);
	const {
		dependencies = {},
		devDependencies = {},
		peerDependencies = {},
	} = packageJson;

	const deps = {
		...dependencies,
		...devDependencies,
		...peerDependencies,
	} as Record<string, string>;

	const version = deps[packageName];
	if (!version) {
		console.log(`Unable to find "${packageName}" in package.json deps`);
		process.exit(1);
	}
	return version;
};
