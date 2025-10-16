import { openPackageDiff } from "../diff/openPackageDiff";
import { getPackageVersion } from "../filesystem/getPackageVersion";
import { promptTargetVersionIfNeeded } from "../promptTargetVersionIfNeeded";
import type { LocalContext } from "./context";

export interface CommandFlags {
	readonly target: string;
}

export default async function (
	this: LocalContext,
	{ target: _target }: CommandFlags,
	packageName: string,
): Promise<void> {
	const { wanted, used } = await getPackageVersion(packageName);

	const target = await promptTargetVersionIfNeeded({
		target: _target,
		packageName,
		used,
	});

	await openPackageDiff({ packageName, target, wanted, used });
}
