import { buildApplication, buildCommand, numberParser } from "@stricli/core";
import { name, version, description } from "../package.json";

const command = buildCommand({
    loader: async () => import("./impl"),
    parameters: {
        positional: {
            kind: "tuple",
            parameters: [
                {
                    brief: "Your name",
                    parse: String,
                },
            ],
        },
        flags: {
            count: {
                kind: "parsed",
                brief: "Number of times to say hello",
                parse: numberParser,
            },
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
