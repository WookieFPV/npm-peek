import { defineConfig } from "tsup";

export default defineConfig({
    entry: ["src/bin/cli.ts"],
    format: ["esm"],
    clean: true,
    "splitting": true,
});
