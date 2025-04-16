import {
	findWorkspacePackages,
	findWorkspacePackagesSync,
	findWorkspaceRoot,
	findWorkspaceRootSync,
} from "@rnx-kit/tools-workspaces";

export const getNodeModulesFoldersAsync = async () => {
	const [root, ...packages] = await Promise.all([
		findWorkspaceRoot(),
		findWorkspacePackages(),
	]);
	return [root, ...packages].map((path) => `${path}/node_modules`);
};

export const getNodeModulesFolders = [
	findWorkspaceRootSync(),
	...findWorkspacePackagesSync(),
]
	.filter(Boolean)
	.map((path) => `${path}/node_modules`);
