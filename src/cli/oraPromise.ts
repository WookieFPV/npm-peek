import { performance } from "node:perf_hooks";
import { oraPromise, type PromiseOptions } from "ora";
import { formatTime } from "../helper/formatTime";

export const getOraTexts = (
	label: string,
): PromiseOptions<TimedResponse<unknown>> => ({
	text: label,
	failText: (error: Error) => `${label} failed with error: ${error.message}`,
	successText: (data) => {
		if (data.duration > 1000)
			return `${label} [took ${formatTime(data.duration)}]`;
		return label;
	},
});

export const oraTimedPromise = async <T>(
	action: PromiseLike<T>,
	{ label, ...options }: { label: string } & PromiseOptions<TimedResponse<T>>,
): Promise<T> => {
	const myAction = timedPromise(action);
	const { result } = await oraPromise(myAction, {
		...getOraTexts(label),
		...options,
	});
	return result;
};

type TimedResponse<T> = { result: T; duration: number };

async function timedPromise<T>(
	promise: PromiseLike<T>,
	// @ts-expect-error TS1064: The return type of an async function or method must be the global Promise<T> type. Did you mean to write Promise<TimedResponse<T>>?
): PromiseLike<TimedResponse<T>> {
	const startTime = performance.now();

	const result = await promise;
	const duration = Math.round(performance.now() - startTime);

	return { result, duration };
}
