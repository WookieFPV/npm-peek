import { buildApplication, buildCommand } from "@stricli/core";
import { description, name, version } from "../../package.json";

const command = buildCommand({
	loader: async () => import("./impl"),
	parameters: {
		positional: {
			kind: "tuple",
			parameters: [
				{
					brief: "package name",
					parse: String,
				},
			],
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
