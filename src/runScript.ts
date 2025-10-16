import { exec } from "node:child_process";
import util from "node:util";

const execPromise = util.promisify(exec);

export const runScript = async (script: string) => {
	const { stdout, stderr } = await execPromise(script);
	if (stdout) console.log("Output:", stdout);
	if (stderr) console.error("Stderr:", stderr);
	return stdout;
};
