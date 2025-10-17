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
			exp: {
				kind: "boolean",
				brief:
					"use experimental HTML Diff generation (much faster but not fully stable)",
				optional: true,
			},
		},
		aliases: {
			t: "target",
			e: "exp",
		},
	},
	docs: {
		brief: description,
		customUsage: [
			{ input: "", brief: "interactive package and version selection" },
			{ input: "react -t 19.1.0", brief: "Diff to react@19.1.0" },
			{
				input: "react",
				brief: "interactive version selection for package react",
			},
		],
	},
});

export const app = buildApplication(command, {
	name,
	versionInfo: {
		currentVersion: version,
	},
});
