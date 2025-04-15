import { openPackageDiff } from "../openPackageDiff";
import type { LocalContext } from "./context";

type CommandFlags = Record<string, never>;

export default async function (
	this: LocalContext,
	flags: CommandFlags,
	name: string,
): Promise<void> {
	await openPackageDiff(name);
}
