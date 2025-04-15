import * as path from "node:path";
import process from "node:process";

type PackageJson = {
	dependencies?: Record<string, string>;
	devDependencies?: Record<string, string>;
	peerDependencies?: Record<string, string>;
};

export const getPackageVersion = (packageName: string): string => {
	const packageJson = require(
		path.join(process.cwd(), "package.json"),
	) as PackageJson;
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
