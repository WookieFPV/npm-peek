import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import type { PackageJson } from "./packageDeps";

export const getPackageJsonDeps = async (): Promise<Record<string, string>> => {
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

	return deps;
};
