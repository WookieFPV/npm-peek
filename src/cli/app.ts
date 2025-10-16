import { buildApplication, buildCommand } from "@stricli/core";
import { description, name, version } from "../../package.json";

const command = buildCommand({
	loader: async () => import("./impl"),
	parameters: {
		positional: {
			kind: "tuple",
			parameters: [
				{
					brief: "any npm package name to diff",
					parse: String,
					optional: true,
					placeholder: "my-npm-package",
				},
			],
		},
		flags: {
			target: {
				kind: "parsed",
				brief:
					"Specify the target package version to compare against (e.g. 1.0.0). If omitted, you will be prompted interactively.",
				parse: String,
				optional: true,
			},
		},
		aliases: {
			t: "target",
		},
	},
	docs: {
		brief: description,
	},
});

export const app = buildApplication(command, {
	name,
	versionInfo: {
		currentVersion: version,
	},
});
