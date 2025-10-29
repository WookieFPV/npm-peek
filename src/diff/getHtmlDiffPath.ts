import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { getOutput } from "diff2html-cli/lib/cli.js";
import open from "open";
import { cachedFileOperation } from "../filesystem/cachedFileOperation";
import { runScript } from "../runScript";
import type { FileOutput } from "./fileName";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export const htmlDiff = async (
	files: FileOutput,
	title: string,
	exp?: boolean,
) => {
	if (exp) {
		await cachedFileOperation({
			outputPath: files.htmlFile,
			createFile: () => getHtmlDiffPathBare(files, title),
		});
		return open(files.htmlFile);
	}
	return getHtmlDiffPathCli(files.diffFile, title);
};

export const getHtmlDiffPathBare = async (files: FileOutput, title: string) => {
	const diffString = await fs.readFile(files.diffFile, "utf-8");
	const fullHtml = getOutput(
		{
			// @ts-expect-error I am not going to import their ts enums just for this
			colorScheme: "light",
			outputFormat: "side-by-side",
			drawFileList: true,
		},
		{
			diffyType: "browser",
			formatType: "html",
			fileContentToggle: true,
			synchronisedScroll: true,
			highlightCode: true,
			pageTitle: title,
			showFilesOpen: true,
			outputDestinationType: "preview",
			inputSource: "file",
			outputDestinationFile: "",
			htmlWrapperTemplate: path.resolve(__dirname, "..", "template.html"),
			pageHeader: "",
			ignore: [],
		},
		diffString,
	);
	await fs.writeFile(files.htmlFile, fullHtml, { encoding: "utf-8" });
	return files.htmlFile;
};

export const getHtmlDiffPathCli = async (
	diffTxtFilePath: string,
	title: string,
) =>
	runScript(
		`npx -y diff2html-cli --su open --cs light -s side -t "${title}" -i file -- ${diffTxtFilePath}`,
	);
