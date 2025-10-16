import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { tryCatch } from "../helper/tryCatch";
import type { PackageJson } from "./getPackageVersion";

export const getPackageJsonDeps = async (): Promise<Record<string, string>> => {
	const { data: packageJsonStr, error } = await tryCatch(
		fs.readFile(path.join(process.cwd(), "package.json"), "utf-8"),
	);
	if (error) {
		console.log("❌  Unable to find package.json in current directory");
		process.exit(1);
	}
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
