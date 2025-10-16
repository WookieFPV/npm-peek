import fs from "node:fs/promises";
import path from "node:path";
import { ColorSchemeType } from "diff2html/lib/types";
import { getOutput } from "diff2html-cli/lib/cli";
import { tryCatch } from "../helper/tryCatch";

export const getHtmlDiffPath = async (
	diffTxtFilePath: string,
	title: string,
) => {
	const htmldiffFile = path.join(
		path.dirname(diffTxtFilePath),
		path.basename(diffTxtFilePath).replace(".txt", ".html"),
	);
	const { error } = await tryCatch(fs.access(htmldiffFile));
	if (!error) return htmldiffFile;

	const diffString = await fs.readFile(diffTxtFilePath, "utf-8");
	const fullHtml = getOutput(
		{
			colorScheme: ColorSchemeType.LIGHT,
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
	await fs.writeFile(htmldiffFile, fullHtml, { encoding: "utf-8" });

	return htmldiffFile;
};
