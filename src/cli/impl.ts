import { openPackageDiff } from "../diff/openPackageDiff";
import { getPackageVersion } from "../filesystem/getPackageVersion";
import { promptNpmPackageName } from "../promptNpmPackageName";
import { promptTargetVersionIfNeeded } from "../promptTargetVersionIfNeeded";
import type { LocalContext } from "./context";

export interface CommandFlags {
	readonly target?: string;
}

export default async function (
	this: LocalContext,
	{ target: inputTarget }: CommandFlags,
	inputPackageName?: string,
): Promise<void> {
	const packageName = await promptNpmPackageName(inputPackageName);
	const { wanted, used } = await getPackageVersion(packageName);

	const target = await promptTargetVersionIfNeeded({
		inputTarget,
		packageName,
		used,
	});

	await openPackageDiff({ packageName, target, wanted, used });
}
