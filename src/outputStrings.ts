export const getUpToDateMessage = ({
	packageName,
	wanted,
	used,
}: { packageName: string; wanted: string; used: string }) =>
	`✅ ${packageName} is already up to date (${getVersionString({ used, wanted })})`;

export const getUpToCompareMessage = ({
	packageName,
	wanted,
	used,
	latest,
}: { packageName: string; wanted: string; used: string; latest: string }) =>
	`🔍 Comparing ${packageName}: ${getVersionString({ wanted, used })} → v${latest}`;

export const getVersionString = ({
	wanted,
	used,
}: { wanted: string; used: string }) => {
	if (wanted === used) return wanted;
	return `${wanted} (using ${used})`;
};
