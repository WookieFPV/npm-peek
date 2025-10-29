/**
 * formats time in ms (sub 1s) or 0.1s precision (>1s)
 */
export const formatTime = (timeMs: number): string => {
	if (timeMs < 1000) return `${timeMs}ms`;
	return `${(timeMs / 1000).toFixed(1)}s`;
};
