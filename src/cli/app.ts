import { buildApplication, buildCommand } from "@stricli/core";
import { description, name, version } from "../../package.json";
import {
	PROMPT_EMPTY,
	parsePackageNameOrPrompt,
} from "../parsePackageNameOrPrompt";

const command = buildCommand({
	loader: async () => import("./impl"),
	parameters: {
		positional: {
			kind: "tuple",
			parameters: [
				{
					brief: "package name",
					parse: parsePackageNameOrPrompt,
					default: PROMPT_EMPTY,
					placeholder: "example-package",
				},
			],
		},
		flags: {
			target: {
				kind: "parsed",
				brief:
					"Target package version to open diff against (e.g. 1.0.0). If not provided, the latest version will be used.",
				parse: String,
				inferEmpty: true,
				default: "",
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
