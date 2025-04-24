import type { PackageJson } from "../packageDeps";
import type { RepoType } from "./getRepoType";

export type PackageTestData = [
	string,
	PackageJson["repository"] | undefined, // package.json repository block
	{ url: string; repoType: RepoType } | undefined, // expected data
];

export const invalidTestData: PackageTestData[] = [
	["@did-plc/server", undefined, undefined],
	["@expensify/react-native-background-task", undefined, undefined],
	["@perf-profiler/types", undefined, undefined],
	["@types/concurrently", undefined, undefined],
	["@types/pusher-js", undefined, undefined],
	["react-native-phrase-sdk", undefined, undefined],
	["react-native-plaid-link-sdk", undefined, undefined],
	["time-analytics-webpack-plugin", undefined, undefined],
];

export const validTestData: PackageTestData[] = [
	[
		"@gorhom/bottom-sheet",
		"https://github.com/gorhom/react-native-bottom-sheet",
		{
			url: "https://github.com/gorhom/react-native-bottom-sheet",
			repoType: "github",
		},
	],
	[
		"@notifee/react-native",
		{
			type: "git",
			url: "git+https://github.com/invertase/notifee.git",
		},
		{
			url: "https://github.com/invertase/notifee",
			repoType: "github",
		},
	],
	[
		"@react-native-community/netinfo",
		{
			type: "git",
			url: "https://github.com/react-native-netinfo/react-native-netinfo.git",
		},
		{
			url: "https://github.com/react-native-netinfo/react-native-netinfo",
			repoType: "github",
		},
	],
	[
		"@react-native-firebase/analytics",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/analytics",
		},
		{
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/analytics",
			repoType: "github",
		},
	],
	[
		"@react-native-firebase/app",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/app",
		},
		{
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/app",
			repoType: "github",
		},
	],
	[
		"@react-native-firebase/messaging",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/messaging",
		},
		{
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/messaging",
			repoType: "github",
		},
	],
	[
		"@react-native-menu/menu",
		"https://github.com/react-native-menu/menu",
		{
			url: "https://github.com/react-native-menu/menu",
			repoType: "github",
		},
	],
	[
		"@react-navigation/native",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/native",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@react-navigation/stack",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/stack",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@reduxjs/toolkit",
		{
			type: "git",
			url: "git+https://github.com/reduxjs/redux-toolkit.git",
		},
		{ url: "https://github.com/reduxjs/redux-toolkit", repoType: "github" },
	],
	[
		"@sendbird/chat",
		{
			type: "git",
			url: "https://github.com/sendbird/sendbird-chat-sdk-javascript",
		},
		{
			url: "https://github.com/sendbird/sendbird-chat-sdk-javascript",
			repoType: "github",
		},
	],
	[
		"@sentry/react-native",
		"https://github.com/getsentry/sentry-react-native",
		{
			url: "https://github.com/getsentry/sentry-react-native",
			repoType: "github",
		},
	],
	[
		"@tanstack/query-sync-storage-persister",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/query-sync-storage-persister",
		},
		{ url: "https://github.com/TanStack/query", repoType: "github" },
	],
	[
		"@tanstack/react-query",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/react-query",
		},
		{
			url: "https://github.com/TanStack/query",
			repoType: "github",
		},
	],
	[
		"@tanstack/react-query-persist-client",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/react-query-persist-client",
		},
		{ url: "https://github.com/TanStack/query", repoType: "github" },
	],
	[
		"axios",
		{
			type: "git",
			url: "https://github.com/axios/axios.git",
		},
		{ url: "https://github.com/axios/axios", repoType: "github" },
	],
	[
		"base-64",
		{
			type: "git",
			url: "https://github.com/mathiasbynens/base64.git",
		},
		{ url: "https://github.com/mathiasbynens/base64", repoType: "github" },
	],
	[
		"configcat-js",
		{
			type: "git",
			url: "https://github.com/configcat/js-sdk",
		},
		{ url: "https://github.com/configcat/js-sdk", repoType: "github" },
	],
	[
		"crypto-js",
		{
			type: "git",
			url: "http://github.com/brix/crypto-js.git",
		},
		{ url: "https://github.com/brix/crypto-js", repoType: "github" },
	],
	[
		"dayjs",
		{
			type: "git",
			url: "https://github.com/iamkun/dayjs.git",
		},
		{ url: "https://github.com/iamkun/dayjs", repoType: "github" },
	],
	[
		"expo",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-auth-session",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-auth-session",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-blur",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-blur",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-build-properties",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-build-properties",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-camera",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-camera",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-crypto",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-crypto",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-dev-client",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-dev-client",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-file-system",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-file-system",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-image",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-image-manipulator",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image-manipulator",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-image-picker",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image-picker",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-keep-awake",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-keep-awake",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-splash-screen",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-splash-screen",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-web-browser",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-web-browser",
		},
		{
			url: "https://github.com/expo/expo",
			repoType: "github",
		},
	],
	[
		"fast-text-encoding",
		"https://github.com/samthor/fast-text-encoding.git",
		{
			url: "https://github.com/samthor/fast-text-encoding",
			repoType: "github",
		},
	],
	[
		"i18next",
		{
			type: "git",
			url: "https://github.com/i18next/i18next.git",
		},
		{ url: "https://github.com/i18next/i18next", repoType: "github" },
	],
	[
		"immer",
		{
			type: "git",
			url: "https://github.com/immerjs/immer.git",
		},
		{
			url: "https://github.com/immerjs/immer",
			repoType: "github",
		},
	],
	[
		"intl-pluralrules",
		"eemeli/intl-pluralrules",
		{
			url: "https://github.com/eemeli/intl-pluralrules",
			repoType: "github",
		},
	],
	[
		"jsonpath-plus",
		{
			type: "git",
			url: "git://github.com/s3u/JSONPath.git",
		},
		{ url: "https://github.com/s3u/JSONPath", repoType: "github" },
	],
	[
		"jwt-decode",
		{
			type: "git",
			url: "git://github.com/auth0/jwt-decode",
		},
		{
			url: "https://github.com/auth0/jwt-decode",
			repoType: "github",
		},
	],
	[
		"lodash.clonedeep",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"lodash.throttle",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"moti",
		{
			type: "git",
			url: "https://github.com/nandorojo/moti.git",
			directory: "packages/moti",
		},
		{
			url: "https://github.com/nandorojo/moti",
			repoType: "github",
		},
	],
	[
		"p-queue",
		"sindresorhus/p-queue",
		{
			url: "https://github.com/sindresorhus/p-queue",
			repoType: "github",
		},
	],
	[
		"react",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"react-hook-form",
		{
			type: "git",
			url: "https://github.com/react-hook-form/react-hook-form",
		},
		{
			url: "https://github.com/react-hook-form/react-hook-form",
			repoType: "github",
		},
	],
	[
		"react-hot-toast",
		"timolins/react-hot-toast",
		{
			url: "https://github.com/timolins/react-hot-toast",
			repoType: "github",
		},
	],
	[
		"react-i18next",
		{
			type: "git",
			url: "https://github.com/i18next/react-i18next.git",
		},
		{ url: "https://github.com/i18next/react-i18next", repoType: "github" },
	],
	[
		"react-native",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/react-native",
		},
		{ url: "https://github.com/facebook/react-native", repoType: "github" },
	],
	[
		"react-native-autolink",
		{
			type: "git",
			url: "https://github.com/joshswan/react-native-autolink",
		},
		{
			url: "https://github.com/joshswan/react-native-autolink",
			repoType: "github",
		},
	],
	[
		"react-native-blob-util",
		{ url: "https://github.com/RonRadtke/react-native-blob-util" },
		{
			url: "https://github.com/RonRadtke/react-native-blob-util",
			repoType: "github",
		},
	],
	[
		"react-native-calendars",
		{
			type: "git",
			url: "git+https://github.com/wix/react-native-calendars",
		},
		{
			url: "https://github.com/wix/react-native-calendars",
			repoType: "github",
		},
	],
	[
		"react-native-device-info",
		{
			type: "git",
			url: "https://github.com/react-native-device-info/react-native-device-info",
		},
		{
			url: "https://github.com/react-native-device-info/react-native-device-info",
			repoType: "github",
		},
	],
	[
		"react-native-edge-to-edge",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-edge-to-edge.git",
		},
		{
			url: "https://github.com/zoontek/react-native-edge-to-edge",
			repoType: "github",
		},
	],
	[
		"react-native-error-boundary",
		{
			type: "git",
			url: "git+https://github.com/carloscuesta/react-native-error-boundary.git",
		},
		{
			url: "https://github.com/carloscuesta/react-native-error-boundary",
			repoType: "github",
		},
	],
	[
		"react-native-gesture-handler",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-gesture-handler.git",
		},
		{
			url: "https://github.com/software-mansion/react-native-gesture-handler",
			repoType: "github",
		},
	],
	[
		"react-native-ios-context-menu",
		"https://github.com/dominicstop/react-native-ios-context-menu",
		{
			url: "https://github.com/dominicstop/react-native-ios-context-menu",
			repoType: "github",
		},
	],
	[
		"react-native-ios-utilities",
		{
			type: "git",
			url: "git+https://github.com/dominicstop/react-native-ios-utilities.git",
		},
		{
			url: "https://github.com/dominicstop/react-native-ios-utilities",
			repoType: "github",
		},
	],
	[
		"react-native-is-maestro",
		"https://github.com/jpudysz/react-native-is-maestro",
		{
			url: "https://github.com/jpudysz/react-native-is-maestro",
			repoType: "github",
		},
	],
	[
		"react-native-keyboard-controller",
		"https://github.com/kirillzyusko/react-native-keyboard-controller",
		{
			url: "https://github.com/kirillzyusko/react-native-keyboard-controller",
			repoType: "github",
		},
	],
	[
		"react-native-keychain",
		{
			type: "git",
			url: "git://github.com/oblador/react-native-keychain.git",
		},
		{
			url: "https://github.com/oblador/react-native-keychain",
			repoType: "github",
		},
	],
	[
		"react-native-localize",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-localize.git",
		},
		{
			url: "https://github.com/zoontek/react-native-localize",
			repoType: "github",
		},
	],
	[
		"react-native-mmkv",
		{
			type: "git",
			url: "git+https://github.com/mrousavy/react-native-mmkv.git",
		},
		{
			url: "https://github.com/mrousavy/react-native-mmkv",
			repoType: "github",
		},
	],
	[
		"react-native-nfc-manager",
		{
			type: "git",
			url: "https://github.com/whitedogg13/react-native-nfc-manager.git",
		},
		{
			url: "https://github.com/whitedogg13/react-native-nfc-manager",
			repoType: "github",
		},
	],
	[
		"react-native-pdf",
		{
			type: "git",
			url: "git+https://github.com/wonday/react-native-pdf.git",
		},
		{
			url: "https://github.com/wonday/react-native-pdf",
			repoType: "github",
		},
	],
	[
		"react-native-permissions",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-permissions.git",
		},
		{
			url: "https://github.com/zoontek/react-native-permissions",
			repoType: "github",
		},
	],
	[
		"react-native-reanimated",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-reanimated.git",
			directory: "packages/react-native-reanimated",
		},
		{
			url: "https://github.com/software-mansion/react-native-reanimated",
			repoType: "github",
		},
	],
	[
		"react-native-reorderable-list",
		{
			type: "git",
			url: "git+https://github.com/omahili/react-native-reorderable-list.git",
		},
		{
			url: "https://github.com/omahili/react-native-reorderable-list",
			repoType: "github",
		},
	],
	[
		"react-native-safe-area-context",
		{
			type: "git",
			url: "https://github.com/th3rdwave/react-native-safe-area-context.git",
		},
		{
			url: "https://github.com/th3rdwave/react-native-safe-area-context",
			repoType: "github",
		},
	],
	[
		"react-native-screens",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-screens.git",
		},
		{
			url: "https://github.com/software-mansion/react-native-screens",
			repoType: "github",
		},
	],
	[
		"react-native-svg",
		{
			type: "git",
			url: "https://github.com/react-native-community/react-native-svg",
		},
		{
			url: "https://github.com/react-native-community/react-native-svg",
			repoType: "github",
		},
	],
	[
		"react-native-url-polyfill",
		{
			type: "git",
			url: "https://github.com/charpeni/react-native-url-polyfill.git",
		},
		{
			url: "https://github.com/charpeni/react-native-url-polyfill",
			repoType: "github",
		},
	],
	[
		"react-native-view-shot",
		{
			type: "git",
			url: "https://github.com/gre/react-native-view-shot.git",
		},
		{
			url: "https://github.com/gre/react-native-view-shot",
			repoType: "github",
		},
	],
	[
		"react-native-zoom-reanimated",
		{
			type: "git",
			url: "react-native-zoom-reanimated",
		},
		{
			url: "https://github.com/react-native-zoom-reanimated",
			repoType: "github",
		},
	],
	[
		"react-redux",
		"github:reduxjs/react-redux",
		{
			url: "https://github.com/github:reduxjs/react-redux",
			repoType: "github",
		},
	],
	[
		"uuid",
		{ type: "git", url: "https://github.com/uuidjs/uuid.git" },
		{
			url: "https://github.com/uuidjs/uuid",
			repoType: "github",
		},
	],
	[
		"zeego",
		"https://github.com/nandorojo/zeego",
		{
			url: "https://github.com/nandorojo/zeego",
			repoType: "github",
		},
	],
	[
		"zod",
		{
			type: "git",
			url: "git+https://github.com/colinhacks/zod.git",
		},
		{ url: "https://github.com/colinhacks/zod", repoType: "github" },
	],
	[
		"zustand",
		{
			type: "git",
			url: "git+https://github.com/pmndrs/zustand.git",
		},
		{ url: "https://github.com/pmndrs/zustand", repoType: "github" },
	],
	[
		"@babel/core",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-core",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/preset-env",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-env",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/runtime",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-runtime",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@openapitools/openapi-generator-cli",
		{
			type: "git",
			url: "https://github.com/OpenAPITools/openapi-generator-cli.git",
		},
		{
			url: "https://github.com/OpenAPITools/openapi-generator-cli",
			repoType: "github",
		},
	],
	[
		"@react-native/eslint-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/eslint-config-react-native",
		},
		{
			url: "https://github.com/facebook/react-native",
			repoType: "github",
		},
	],
	[
		"@tanstack/eslint-plugin-query",
		{
			type: "git",
			url: "git+https://github.com/TanStack/query.git",
			directory: "packages/eslint-plugin-query",
		},
		{ url: "https://github.com/TanStack/query", repoType: "github" },
	],
	[
		"@testing-library/jest-native",
		{
			type: "git",
			url: "git+https://github.com/testing-library/jest-native.git",
		},
		{
			url: "https://github.com/testing-library/jest-native",
			repoType: "github",
		},
	],
	[
		"@testing-library/react-native",
		{
			type: "git",
			url: "https://www.github.com/callstack/react-native-testing-library.git",
		},
		{
			url: "https://github.com/callstack/react-native-testing-library",
			repoType: "github",
		},
	],
	[
		"@total-typescript/ts-reset",
		"https://github.com/total-typescript/ts-reset",
		{
			url: "https://github.com/total-typescript/ts-reset",
			repoType: "github",
		},
	],
	[
		"@types/base-64",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/base-64",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/crypto-js",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/crypto-js",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/jest",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/jest",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/lodash.throttle",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.throttle",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-test-renderer",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-test-renderer",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/xdate",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/xdate",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@typescript-eslint/eslint-plugin",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/eslint-plugin",
		},
		{
			url: "https://github.com/typescript-eslint/typescript-eslint",
			repoType: "github",
		},
	],
	[
		"@typescript-eslint/parser",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/parser",
		},
		{
			url: "https://github.com/typescript-eslint/typescript-eslint",
			repoType: "github",
		},
	],
	[
		"babel-plugin-module-resolver",
		{
			type: "git",
			url: "https://github.com/tleunen/babel-plugin-module-resolver.git",
		},
		{
			url: "https://github.com/tleunen/babel-plugin-module-resolver",
			repoType: "github",
		},
	],
	[
		"eslint",
		"eslint/eslint",
		{
			url: "https://github.com/eslint/eslint",
			repoType: "github",
		},
	],
	[
		"eslint-config-prettier",
		"prettier/eslint-config-prettier",
		{
			url: "https://github.com/prettier/eslint-config-prettier",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-jest",
		{
			type: "git",
			url: "git+https://github.com/jest-community/eslint-plugin-jest.git",
		},
		{
			url: "https://github.com/jest-community/eslint-plugin-jest",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-prettier",
		"https://github.com/prettier/eslint-plugin-prettier.git",
		{
			url: "https://github.com/prettier/eslint-plugin-prettier",
			repoType: "github",
		},
	],
	[
		"husky",
		{
			type: "git",
			url: "git+https://github.com/typicode/husky.git",
		},
		{ url: "https://github.com/typicode/husky", repoType: "github" },
	],
	[
		"jest",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"jest-expo",
		{
			type: "git",
			url: "git://github.com/expo/expo.git",
			directory: "packages/jest-expo",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"license-checker-rseidelsohn",
		{
			type: "git",
			url: "https://github.com/RSeidelsohn/license-checker-rseidelsohn.git",
		},
		{
			url: "https://github.com/RSeidelsohn/license-checker-rseidelsohn",
			repoType: "github",
		},
	],
	[
		"lint-staged",
		{
			type: "git",
			url: "git+https://github.com/lint-staged/lint-staged.git",
		},
		{ url: "https://github.com/lint-staged/lint-staged", repoType: "github" },
	],
	[
		"msw",
		{
			type: "git",
			url: "https://github.com/mswjs/msw",
		},
		{
			url: "https://github.com/mswjs/msw",
			repoType: "github",
		},
	],
	[
		"patch-package",
		"github:ds300/patch-package",
		{
			url: "https://github.com/github:ds300/patch-package",
			repoType: "github",
		},
	],
	[
		"prettier",
		"prettier/prettier",
		{
			url: "https://github.com/prettier/prettier",
			repoType: "github",
		},
	],
	[
		"prettier-plugin-organize-imports",
		"simonhaenisch/prettier-plugin-organize-imports",
		{
			url: "https://github.com/simonhaenisch/prettier-plugin-organize-imports",
			repoType: "github",
		},
	],
	[
		"react-native-svg-transformer",
		"https://github.com/kristerkari/react-native-svg-transformer",
		{
			url: "https://github.com/kristerkari/react-native-svg-transformer",
			repoType: "github",
		},
	],
	[
		"react-test-renderer",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-test-renderer",
		},
		{
			url: "https://github.com/facebook/react",
			repoType: "github",
		},
	],
	[
		"reactotron-react-native",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-react-native",
		{
			url: "https://github.com/infinitered/reactotron/tree/master/lib/reactotron-react-native",
			repoType: "github",
		},
	],
	[
		"reactotron-redux",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-redux",
		{
			url: "https://github.com/infinitered/reactotron/tree/master/lib/reactotron-redux",
			repoType: "github",
		},
	],
	[
		"typescript",
		{
			type: "git",
			url: "https://github.com/microsoft/TypeScript.git",
		},
		{ url: "https://github.com/microsoft/TypeScript", repoType: "github" },
	],
	[
		"@atproto/api",
		{
			type: "git",
			url: "https://github.com/bluesky-social/atproto",
			directory: "packages/api",
		},
		{ url: "https://github.com/bluesky-social/atproto", repoType: "github" },
	],
	[
		"@bitdrift/react-native",
		{
			type: "git",
			url: "git+https://github.com/bitdriftlabs/capture-es.git",
		},
		{ url: "https://github.com/bitdriftlabs/capture-es", repoType: "github" },
	],
	[
		"@braintree/sanitize-url",
		{
			type: "git",
			url: "git+https://github.com/braintree/sanitize-url.git",
		},
		{
			url: "https://github.com/braintree/sanitize-url",
			repoType: "github",
		},
	],
	[
		"@discord/bottom-sheet",
		"https://github.com/discord/react-native-bottom-sheet",
		{
			url: "https://github.com/discord/react-native-bottom-sheet",
			repoType: "github",
		},
	],
	[
		"@emoji-mart/react",
		{
			type: "git",
			url: "https://github.com/missive/emoji-mart",
			directory: "packages/emoji-mart-react",
		},
		{ url: "https://github.com/missive/emoji-mart", repoType: "github" },
	],
	[
		"@expo/html-elements",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/html-elements",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"@expo/webpack-config",
		{
			type: "git",
			url: "https://github.com/expo/expo-cli.git",
			directory: "packages/webpack-config",
		},
		{ url: "https://github.com/expo/expo-cli", repoType: "github" },
	],
	[
		"@floating-ui/dom",
		{
			type: "git",
			url: "https://github.com/floating-ui/floating-ui.git",
			directory: "packages/dom",
		},
		{ url: "https://github.com/floating-ui/floating-ui", repoType: "github" },
	],
	[
		"@floating-ui/react-dom",
		{
			type: "git",
			url: "https://github.com/floating-ui/floating-ui.git",
			directory: "packages/react-dom",
		},
		{ url: "https://github.com/floating-ui/floating-ui", repoType: "github" },
	],
	[
		"@formatjs/intl-locale",
		{
			type: "git",
			url: "git+https://github.com/formatjs/formatjs.git",
		},
		{ url: "https://github.com/formatjs/formatjs", repoType: "github" },
	],
	[
		"@formatjs/intl-numberformat",
		{
			type: "git",
			url: "git+https://github.com/formatjs/formatjs.git",
		},
		{ url: "https://github.com/formatjs/formatjs", repoType: "github" },
	],
	[
		"@formatjs/intl-pluralrules",
		{
			type: "git",
			url: "git+https://github.com/formatjs/formatjs.git",
		},
		{
			url: "https://github.com/formatjs/formatjs",
			repoType: "github",
		},
	],
	[
		"@fortawesome/fontawesome-svg-core",
		{
			type: "git",
			url: "https://github.com/FortAwesome/Font-Awesome",
		},
		{
			url: "https://github.com/FortAwesome/Font-Awesome",
			repoType: "github",
		},
	],
	[
		"@fortawesome/free-regular-svg-icons",
		{
			type: "git",
			url: "https://github.com/FortAwesome/Font-Awesome",
		},
		{
			url: "https://github.com/FortAwesome/Font-Awesome",
			repoType: "github",
		},
	],
	[
		"@fortawesome/free-solid-svg-icons",
		{
			type: "git",
			url: "https://github.com/FortAwesome/Font-Awesome",
		},
		{
			url: "https://github.com/FortAwesome/Font-Awesome",
			repoType: "github",
		},
	],
	[
		"@fortawesome/react-native-fontawesome",
		{
			type: "git",
			url: "https://github.com/FortAwesome/react-native-fontawesome.git",
		},
		{
			url: "https://github.com/FortAwesome/react-native-fontawesome",
			repoType: "github",
		},
	],
	[
		"@haileyok/bluesky-video",
		"https://github.com/bluesky-social/bluesky-video",
		{
			url: "https://github.com/bluesky-social/bluesky-video",
			repoType: "github",
		},
	],
	[
		"@ipld/dag-cbor",
		{
			type: "git",
			url: "git+https://github.com/ipld/js-dag-cbor.git",
		},
		{ url: "https://github.com/ipld/js-dag-cbor", repoType: "github" },
	],
	[
		"@lingui/react",
		{
			type: "git",
			url: "https://github.com/lingui/js-lingui.git",
		},
		{
			url: "https://github.com/lingui/js-lingui",
			repoType: "github",
		},
	],
	[
		"@mattermost/react-native-paste-input",
		"https://github.com/mattermost/react-native-paste-input",
		{
			url: "https://github.com/mattermost/react-native-paste-input",
			repoType: "github",
		},
	],
	[
		"@miblanchard/react-native-slider",
		{
			type: "git",
			url: "git@github.com:miblanchard/react-native-slider.git",
		},
		{
			url: "https://github.com/miblanchard/react-native-slider",
			repoType: "github",
		},
	],
	[
		"@mozzius/expo-dynamic-app-icon",
		"https://github.com/mozzius/expo-dynamic-app-icon",
		{
			url: "https://github.com/mozzius/expo-dynamic-app-icon",
			repoType: "github",
		},
	],
	[
		"@radix-ui/react-dismissable-layer",
		{
			type: "git",
			url: "git+https://github.com/radix-ui/primitives.git",
		},
		{
			url: "https://github.com/radix-ui/primitives",
			repoType: "github",
		},
	],
	[
		"@radix-ui/react-dropdown-menu",
		{
			type: "git",
			url: "git+https://github.com/radix-ui/primitives.git",
		},
		{
			url: "https://github.com/radix-ui/primitives",
			repoType: "github",
		},
	],
	[
		"@radix-ui/react-focus-guards",
		{
			type: "git",
			url: "git+https://github.com/radix-ui/primitives.git",
		},
		{ url: "https://github.com/radix-ui/primitives", repoType: "github" },
	],
	[
		"@radix-ui/react-focus-scope",
		{
			type: "git",
			url: "git+https://github.com/radix-ui/primitives.git",
		},
		{
			url: "https://github.com/radix-ui/primitives",
			repoType: "github",
		},
	],
	[
		"@react-native-async-storage/async-storage",
		{
			type: "git",
			url: "https://github.com/react-native-async-storage/async-storage.git",
			directory: "packages/default-storage-backend",
		},
		{
			url: "https://github.com/react-native-async-storage/async-storage",
			repoType: "github",
		},
	],
	[
		"@react-native-picker/picker",
		{
			type: "git",
			url: "https://github.com/react-native-picker/picker.git",
		},
		{
			url: "https://github.com/react-native-picker/picker",
			repoType: "github",
		},
	],
	[
		"@react-navigation/bottom-tabs",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/bottom-tabs",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@react-navigation/drawer",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/drawer",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@react-navigation/native-stack",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/native-stack",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@tanstack/query-async-storage-persister",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/query-async-storage-persister",
		},
		{ url: "https://github.com/TanStack/query", repoType: "github" },
	],
	[
		"@tiptap/core",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/core",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-document",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-document",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-hard-break",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-hard-break",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-history",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-history",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-mention",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-mention",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-paragraph",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-paragraph",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-placeholder",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-placeholder",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/extension-text",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-text",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/html",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/html",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/pm",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/pm",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/react",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/react",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@tiptap/suggestion",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/suggestion",
		},
		{ url: "https://github.com/ueberdosis/tiptap", repoType: "github" },
	],
	[
		"@types/invariant",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/invariant",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/node",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/node",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@zxing/text-encoding",
		{
			type: "git",
			url: "https://github.com/zxing-js/text-encoding.git",
		},
		{ url: "https://github.com/zxing-js/text-encoding", repoType: "github" },
	],
	[
		"array.prototype.findlast",
		{
			type: "git",
			url: "git+https://github.com/es-shims/Array.prototype.findLast.git",
		},
		{
			url: "https://github.com/es-shims/Array.prototype.findLast",
			repoType: "github",
		},
	],
	[
		"await-lock",
		{
			type: "git",
			url: "https://github.com/ide/await-lock.git",
		},
		{
			url: "https://github.com/ide/await-lock",
			repoType: "github",
		},
	],
	[
		"babel-plugin-transform-remove-console",
		"https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console",
		{
			url: "https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console",
			repoType: "github",
		},
	],
	[
		"base64-js",
		{
			type: "git",
			url: "git://github.com/beatgammit/base64-js.git",
		},
		{
			url: "https://github.com/beatgammit/base64-js",
			repoType: "github",
		},
	],
	[
		"bcp-47",
		"wooorm/bcp-47",
		{
			url: "https://github.com/wooorm/bcp-47",
			repoType: "github",
		},
	],
	[
		"bcp-47-match",
		"wooorm/bcp-47-match",
		{
			url: "https://github.com/wooorm/bcp-47-match",
			repoType: "github",
		},
	],
	[
		"date-fns",
		"https://github.com/date-fns/date-fns",
		{
			url: "https://github.com/date-fns/date-fns",
			repoType: "github",
		},
	],
	[
		"deprecated-react-native-prop-types",
		"github:facebook/react-native-deprecated-modules",
		{
			url: "https://github.com/github:facebook/react-native-deprecated-modules",
			repoType: "github",
		},
	],
	[
		"email-validator",
		{
			type: "git",
			url: "http://github.com/manishsaraan/email-validator.git",
		},
		{
			url: "https://github.com/manishsaraan/email-validator",
			repoType: "github",
		},
	],
	[
		"emoji-mart",
		{
			type: "git",
			url: "https://github.com/missive/emoji-mart",
			directory: "packages/emoji-mart",
		},
		{ url: "https://github.com/missive/emoji-mart", repoType: "github" },
	],
	[
		"emoji-regex",
		{
			type: "git",
			url: "https://github.com/mathiasbynens/emoji-regex.git",
		},
		{ url: "https://github.com/mathiasbynens/emoji-regex", repoType: "github" },
	],
	[
		"eventemitter3",
		{
			type: "git",
			url: "git://github.com/primus/eventemitter3.git",
		},
		{ url: "https://github.com/primus/eventemitter3", repoType: "github" },
	],
	[
		"expo-application",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-application",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-clipboard",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-clipboard",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-device",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-device",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-font",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-font",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-haptics",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-haptics",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-linear-gradient",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-linear-gradient",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-linking",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-linking",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-localization",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-localization",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-media-library",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-media-library",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-navigation-bar",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-navigation-bar",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-notifications",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-notifications",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-screen-orientation",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-screen-orientation",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-sharing",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-sharing",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-status-bar",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-status-bar",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-system-ui",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-system-ui",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-task-manager",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-task-manager",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-updates",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-updates",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-video",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-video",
		},
		{
			url: "https://github.com/expo/expo",
			repoType: "github",
		},
	],
	[
		"history",
		"remix-run/history",
		{
			url: "https://github.com/remix-run/history",
			repoType: "github",
		},
	],
	[
		"hls.js",
		{
			type: "git",
			url: "https://github.com/video-dev/hls.js",
		},
		{ url: "https://github.com/video-dev/hls.js", repoType: "github" },
	],
	[
		"js-sha256",
		{
			type: "git",
			url: "https://github.com/emn178/js-sha256.git",
		},
		{
			url: "https://github.com/emn178/js-sha256",
			repoType: "github",
		},
	],
	[
		"lande",
		"github:fabiospampinato/lande",
		{
			url: "https://github.com/github:fabiospampinato/lande",
			repoType: "github",
		},
	],
	[
		"lodash.chunk",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"lodash.debounce",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"lodash.isequal",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"lodash.shuffle",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"multiformats",
		{
			type: "git",
			url: "git+https://github.com/multiformats/js-multiformats.git",
		},
		{
			url: "https://github.com/multiformats/js-multiformats",
			repoType: "github",
		},
	],
	[
		"nanoid",
		"ai/nanoid",
		{
			url: "https://github.com/ai/nanoid",
			repoType: "github",
		},
	],
	[
		"normalize-url",
		"sindresorhus/normalize-url",
		{
			url: "https://github.com/sindresorhus/normalize-url",
			repoType: "github",
		},
	],
	[
		"postinstall-postinstall",
		"https://github.com/ds300/postinstall-postinstall",
		{
			url: "https://github.com/ds300/postinstall-postinstall",
			repoType: "github",
		},
	],
	[
		"psl",
		{
			type: "git",
			url: "git@github.com:lupomontero/psl.git",
		},
		{
			url: "https://github.com/lupomontero/psl",
			repoType: "github",
		},
	],
	[
		"react-compiler-runtime",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/react-compiler-runtime",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"react-dom",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-dom",
		},
		{
			url: "https://github.com/facebook/react",
			repoType: "github",
		},
	],
	[
		"react-image-crop",
		"https://github.com/sekoyo/react-image-crop",
		{
			url: "https://github.com/sekoyo/react-image-crop",
			repoType: "github",
		},
	],
	[
		"react-keyed-flatten-children",
		{
			type: "git",
			url: "https://github.com/grrowl/react-keyed-flatten-children.git",
		},
		{
			url: "https://github.com/grrowl/react-keyed-flatten-children",
			repoType: "github",
		},
	],
	[
		"react-native-compressor",
		"https://github.com/numandev1/react-native-compressor",
		{
			url: "https://github.com/numandev1/react-native-compressor",
			repoType: "github",
		},
	],
	[
		"react-native-date-picker",
		{
			type: "git",
			url: "git@github.com:henninghall/react-native-date-picker.git",
		},
		{
			url: "https://github.com/henninghall/react-native-date-picker",
			repoType: "github",
		},
	],
	[
		"react-native-drawer-layout",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/react-native-drawer-layout",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"react-native-emoji-popup",
		{
			type: "git",
			url: "git+https://github.com/okwasniewski/react-native-emoji-popup.git",
		},
		{
			url: "https://github.com/okwasniewski/react-native-emoji-popup",
			repoType: "github",
		},
	],
	[
		"react-native-get-random-values",
		"LinusU/react-native-get-random-values",
		{
			url: "https://github.com/LinusU/react-native-get-random-values",
			repoType: "github",
		},
	],
	[
		"react-native-image-crop-picker",
		{
			type: "git",
			url: "git+https://github.com/ivpusic/react-native-image-crop-picker.git",
		},
		{
			url: "https://github.com/ivpusic/react-native-image-crop-picker",
			repoType: "github",
		},
	],
	[
		"react-native-pager-view",
		"https://github.com/callstack/react-native-pager-view",
		{
			url: "https://github.com/callstack/react-native-pager-view",
			repoType: "github",
		},
	],
	[
		"react-native-picker-select",
		{
			type: "git",
			url: "https://github.com/lawnstarter/react-native-picker-select.git",
		},
		{
			url: "https://github.com/lawnstarter/react-native-picker-select",
			repoType: "github",
		},
	],
	[
		"react-native-progress",
		{
			type: "git",
			url: "git://github.com/oblador/react-native-progress.git",
		},
		{
			url: "https://github.com/oblador/react-native-progress",
			repoType: "github",
		},
	],
	[
		"react-native-qrcode-styled",
		"https://github.com/tokkozhin/react-native-qrcode-styled",
		{
			url: "https://github.com/tokkozhin/react-native-qrcode-styled",
			repoType: "github",
		},
	],
	[
		"react-native-root-siblings",
		{
			type: "git",
			url: "git@github.com:magicismight/react-native-root-siblings.git",
		},
		{
			url: "https://github.com/magicismight/react-native-root-siblings",
			repoType: "github",
		},
	],
	[
		"react-native-uitextview",
		{
			type: "git",
			url: "git+https://github.com/bluesky-social/react-native-uitextview.git",
		},
		{
			url: "https://github.com/bluesky-social/react-native-uitextview",
			repoType: "github",
		},
	],
	[
		"react-native-uuid",
		{
			type: "git",
			url: "git+https://github.com/eugenehp/react-native-uuid.git",
		},
		{
			url: "https://github.com/eugenehp/react-native-uuid",
			repoType: "github",
		},
	],
	[
		"react-native-vision-camera",
		"https://github.com/mrousavy/react-native-vision-camera",
		{
			url: "https://github.com/mrousavy/react-native-vision-camera",
			repoType: "github",
		},
	],
	[
		"react-native-web",
		{
			type: "git",
			url: "git://github.com/necolas/react-native-web.git",
		},
		{
			url: "https://github.com/necolas/react-native-web",
			repoType: "github",
		},
	],
	[
		"react-native-web-webview",
		{
			type: "git",
			url: "git@github.com:react-native-web-community/react-native-web-webview.git",
		},
		{
			url: "https://github.com/react-native-web-community/react-native-web-webview",
			repoType: "github",
		},
	],
	[
		"react-native-webview",
		{
			type: "git",
			url: "https://github.com/react-native-webview/react-native-webview.git",
		},
		{
			url: "https://github.com/react-native-webview/react-native-webview",
			repoType: "github",
		},
	],
	[
		"react-remove-scroll-bar",
		"https://github.com/theKashey/react-remove-scroll-bar",
		{
			url: "https://github.com/theKashey/react-remove-scroll-bar",
			repoType: "github",
		},
	],
	[
		"react-responsive",
		{
			type: "git",
			url: "git://github.com/contra/react-responsive.git",
		},
		{ url: "https://github.com/contra/react-responsive", repoType: "github" },
	],
	[
		"react-textarea-autosize",
		{
			type: "git",
			url: "git+https://github.com/Andarist/react-textarea-autosize.git",
		},
		{
			url: "https://github.com/Andarist/react-textarea-autosize",
			repoType: "github",
		},
	],
	[
		"rn-fetch-blob",
		{ url: "https://github.com/joltup/rn-fetch-blob.git" },
		{
			url: "https://github.com/joltup/rn-fetch-blob",
			repoType: "github",
		},
	],
	[
		"statsig-react-native-expo",
		{
			type: "git",
			url: "git+https://github.com/statsig-io/react-native-expo.git",
		},
		{
			url: "https://github.com/statsig-io/react-native-expo",
			repoType: "github",
		},
	],
	[
		"tippy.js",
		{
			type: "git",
			url: "git+https://github.com/atomiks/tippyjs.git",
		},
		{
			url: "https://github.com/atomiks/tippyjs",
			repoType: "github",
		},
	],
	[
		"tlds",
		"https://github.com/stephenmathieson/node-tlds.git",
		{
			url: "https://github.com/stephenmathieson/node-tlds",
			repoType: "github",
		},
	],
	[
		"tldts",
		{
			type: "git",
			url: "git+ssh://git@github.com/remusao/tldts.git",
		},
		{ url: "https://github.com/remusao/tldts", repoType: "github" },
	],
	[
		"@atproto/dev-env",
		{
			type: "git",
			url: "https://github.com/bluesky-social/atproto",
			directory: "packages/dev-env",
		},
		{ url: "https://github.com/bluesky-social/atproto", repoType: "github" },
	],
	[
		"@expo/config-plugins",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/@expo/config-plugins",
		},
		{
			url: "https://github.com/expo/expo",
			repoType: "github",
		},
	],
	[
		"@lingui/cli",
		"lingui/js-lingui",
		{
			url: "https://github.com/lingui/js-lingui",
			repoType: "github",
		},
	],
	[
		"@lingui/macro",
		{
			type: "git",
			url: "https://github.com/lingui/js-lingui.git",
		},
		{
			url: "https://github.com/lingui/js-lingui",
			repoType: "github",
		},
	],
	[
		"@pmmmwh/react-refresh-webpack-plugin",
		{
			type: "git",
			url: "git+https://github.com/pmmmwh/react-refresh-webpack-plugin.git",
		},
		{
			url: "https://github.com/pmmmwh/react-refresh-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"@react-native/typescript-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/typescript-config",
		},
		{
			url: "https://github.com/facebook/react-native",
			repoType: "github",
		},
	],
	[
		"@sentry/webpack-plugin",
		"git://github.com/getsentry/sentry-javascript-bundler-plugins.git",
		{
			url: "https://github.com/getsentry/sentry-javascript-bundler-plugins",
			repoType: "github",
		},
	],
	[
		"@types/lodash.chunk",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.chunk",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/lodash.debounce",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.debounce",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/lodash.isequal",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.isequal",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/lodash.shuffle",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.shuffle",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/psl",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/psl",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-dom",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-dom",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-responsive",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-responsive",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"babel-jest",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/babel-jest",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"babel-plugin-macros",
		{
			type: "git",
			url: "https://github.com/kentcdodds/babel-plugin-macros",
		},
		{
			url: "https://github.com/kentcdodds/babel-plugin-macros",
			repoType: "github",
		},
	],
	[
		"babel-plugin-react-compiler",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/babel-plugin-react-compiler",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"babel-preset-expo",
		{
			type: "git",
			url: "git+https://github.com/expo/expo.git",
			directory: "packages/babel-preset-expo",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"eslint-plugin-ft-flow",
		{
			type: "git",
			url: "https://github.com/flow-typed/eslint-plugin-ft-flow",
		},
		{
			url: "https://github.com/flow-typed/eslint-plugin-ft-flow",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-import",
		{
			type: "git",
			url: "https://github.com/import-js/eslint-plugin-import",
		},
		{
			url: "https://github.com/import-js/eslint-plugin-import",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-lingui",
		"lingui/eslint-plugin",
		{
			url: "https://github.com/lingui/eslint-plugin",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-react",
		{
			type: "git",
			url: "https://github.com/jsx-eslint/eslint-plugin-react",
		},
		{
			url: "https://github.com/jsx-eslint/eslint-plugin-react",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-react-compiler",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/eslint-plugin-react-compiler",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"eslint-plugin-react-native-a11y",
		{
			type: "git",
			url: "https://github.com/FormidableLabs/eslint-plugin-react-native-a11y",
		},
		{
			url: "https://github.com/FormidableLabs/eslint-plugin-react-native-a11y",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-simple-import-sort",
		"lydell/eslint-plugin-simple-import-sort",
		{
			url: "https://github.com/lydell/eslint-plugin-simple-import-sort",
			repoType: "github",
		},
	],
	[
		"file-loader",
		"webpack-contrib/file-loader",
		{
			url: "https://github.com/webpack-contrib/file-loader",
			repoType: "github",
		},
	],
	[
		"is-ci",
		{ type: "git", url: "https://github.com/watson/is-ci.git" },
		{
			url: "https://github.com/watson/is-ci",
			repoType: "github",
		},
	],
	[
		"jest-junit",
		"https://github.com/jest-community/jest-junit",
		{
			url: "https://github.com/jest-community/jest-junit",
			repoType: "github",
		},
	],
	[
		"lockfile-lint",
		{
			type: "git",
			url: "https://github.com/lirantal/lockfile-lint.git",
			directory: "packages/lockfile-lint",
		},
		{
			url: "https://github.com/lirantal/lockfile-lint",
			repoType: "github",
		},
	],
	[
		"metro-react-native-babel-preset",
		{
			type: "git",
			url: "git@github.com:facebook/metro.git",
		},
		{
			url: "https://github.com/facebook/metro",
			repoType: "github",
		},
	],
	[
		"react-native-dotenv",
		"github:goatandsheep/react-native-dotenv",
		{
			url: "https://github.com/github:goatandsheep/react-native-dotenv",
			repoType: "github",
		},
	],
	[
		"react-refresh",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"svgo",
		{
			type: "git",
			url: "git://github.com/svg/svgo.git",
		},
		{ url: "https://github.com/svg/svgo", repoType: "github" },
	],
	[
		"ts-node",
		{
			type: "git",
			url: "git://github.com/TypeStrong/ts-node.git",
		},
		{ url: "https://github.com/TypeStrong/ts-node", repoType: "github" },
	],
	[
		"webpack-bundle-analyzer",
		{
			type: "git",
			url: "git+https://github.com/webpack-contrib/webpack-bundle-analyzer.git",
		},
		{
			url: "https://github.com/webpack-contrib/webpack-bundle-analyzer",
			repoType: "github",
		},
	],
	[
		"@dotlottie/react-player",
		"https://github.com/dotlottie/player-component.git",
		{
			url: "https://github.com/dotlottie/player-component",
			repoType: "github",
		},
	],
	[
		"@expensify/react-native-live-markdown",
		{
			type: "git",
			url: "git+https://github.com/Expensify/react-native-live-markdown.git",
		},
		{
			url: "https://github.com/Expensify/react-native-live-markdown",
			repoType: "github",
		},
	],
	[
		"@expo/metro-runtime",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"@firebase/app",
		{
			directory: "packages/app",
			type: "git",
			url: "git+https://github.com/firebase/firebase-js-sdk.git",
		},
		{
			url: "https://github.com/firebase/firebase-js-sdk",
			repoType: "github",
		},
	],
	[
		"@firebase/performance",
		{
			directory: "packages/performance",
			type: "git",
			url: "git+https://github.com/firebase/firebase-js-sdk.git",
		},
		{
			url: "https://github.com/firebase/firebase-js-sdk",
			repoType: "github",
		},
	],
	[
		"@formatjs/intl-datetimeformat",
		{
			type: "git",
			url: "git+https://github.com/formatjs/formatjs.git",
		},
		{ url: "https://github.com/formatjs/formatjs", repoType: "github" },
	],
	[
		"@formatjs/intl-listformat",
		{
			type: "git",
			url: "git@github.com:formatjs/formatjs.git",
		},
		{
			url: "https://github.com/formatjs/formatjs",
			repoType: "github",
		},
	],
	[
		"@fullstory/browser",
		"git://github.com/fullstorydev/fullstory-browser-sdk.git",
		{
			url: "https://github.com/fullstorydev/fullstory-browser-sdk",
			repoType: "github",
		},
	],
	[
		"@fullstory/react-native",
		"git://github.com/fullstorydev/fullstory-react-native.git",
		{
			url: "https://github.com/fullstorydev/fullstory-react-native",
			repoType: "github",
		},
	],
	[
		"@gorhom/portal",
		"https://github.com/gorhom/react-native-portal",
		{
			url: "https://github.com/gorhom/react-native-portal",
			repoType: "github",
		},
	],
	[
		"@invertase/react-native-apple-authentication",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-apple-authentication",
		},
		{
			url: "https://github.com/invertase/react-native-apple-authentication",
			repoType: "github",
		},
	],
	[
		"@onfido/react-native-sdk",
		{
			type: "git",
			url: "git+https://github.com/onfido/react-native-sdk.git",
			baseUrl: "https://github.com/onfido/react-native-sdk",
		},
		{
			url: "https://github.com/onfido/react-native-sdk",
			repoType: "github",
		},
	],
	[
		"@pusher/pusher-websocket-react-native",
		"https://github.com/pusher/pusher-websocket-react-native",
		{
			url: "https://github.com/pusher/pusher-websocket-react-native",
			repoType: "github",
		},
	],
	[
		"@react-native-camera-roll/camera-roll",
		{
			type: "git",
			url: "https://github.com/react-native-cameraroll/react-native-cameraroll.git",
		},
		{
			url: "https://github.com/react-native-cameraroll/react-native-cameraroll",
			repoType: "github",
		},
	],
	[
		"@react-native-clipboard/clipboard",
		{
			type: "git",
			url: "git+https://github.com/react-native-clipboard/clipboard.git",
		},
		{
			url: "https://github.com/react-native-clipboard/clipboard",
			repoType: "github",
		},
	],
	[
		"@react-native-community/geolocation",
		{
			type: "git",
			url: "https://github.com/michalchudziak/react-native-geolocation.git",
		},
		{
			url: "https://github.com/michalchudziak/react-native-geolocation",
			repoType: "github",
		},
	],
	[
		"@react-native-firebase/crashlytics",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/crashlytics",
		},
		{
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/crashlytics",
			repoType: "github",
		},
	],
	[
		"@react-native-firebase/perf",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/perf",
		},
		{
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/perf",
			repoType: "github",
		},
	],
	[
		"@react-native-google-signin/google-signin",
		"https://github.com/react-native-google-signin/google-signin",
		{
			url: "https://github.com/react-native-google-signin/google-signin",
			repoType: "github",
		},
	],
	[
		"@react-navigation/material-top-tabs",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/material-top-tabs",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@react-ng/bounds-observer",
		{
			type: "git",
			url: "https://github.com/react-ng/bounds-observer.git",
		},
		{ url: "https://github.com/react-ng/bounds-observer", repoType: "github" },
	],
	[
		"@rnmapbox/maps",
		{
			type: "git",
			url: "https://github.com/rnmapbox/maps",
		},
		{ url: "https://github.com/rnmapbox/maps", repoType: "github" },
	],
	[
		"@shopify/flash-list",
		{
			type: "git",
			url: "https://github.com/Shopify/flash-list",
		},
		{ url: "https://github.com/Shopify/flash-list", repoType: "github" },
	],
	[
		"@types/pako",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/pako",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@ua/react-native-airship",
		"https://github.com/urbanairship/react-native-module",
		{
			url: "https://github.com/urbanairship/react-native-module",
			repoType: "github",
		},
	],
	[
		"awesome-phonenumber",
		{
			type: "git",
			url: "https://github.com/grantila/awesome-phonenumber.git",
		},
		{
			url: "https://github.com/grantila/awesome-phonenumber",
			repoType: "github",
		},
	],
	[
		"babel-polyfill",
		"https://github.com/babel/babel/tree/master/packages/babel-polyfill",
		{
			url: "https://github.com/babel/babel/tree/master/packages/babel-polyfill",
			repoType: "github",
		},
	],
	[
		"canvas-size",
		{
			type: "git",
			url: "git+https://jhildenbiddle@github.com/jhildenbiddle/canvas-size.git",
		},
		{
			url: "https://jhildenbiddle@github.com/jhildenbiddle/canvas-size",
			repoType: "github",
		},
	],
	[
		"core-js",
		{
			type: "git",
			url: "https://github.com/zloirock/core-js.git",
			directory: "packages/core-js",
		},
		{
			url: "https://github.com/zloirock/core-js",
			repoType: "github",
		},
	],
	[
		"date-fns-tz",
		"https://github.com/marnusw/date-fns-tz",
		{
			url: "https://github.com/marnusw/date-fns-tz",
			repoType: "github",
		},
	],
	[
		"dom-serializer",
		{
			type: "git",
			url: "git://github.com/cheeriojs/dom-renderer.git",
		},
		{ url: "https://github.com/cheeriojs/dom-renderer", repoType: "github" },
	],
	[
		"domhandler",
		{
			type: "git",
			url: "git://github.com/fb55/domhandler.git",
		},
		{ url: "https://github.com/fb55/domhandler", repoType: "github" },
	],
	[
		"expensify-common",
		{
			type: "git",
			url: "git+ssh://git@github.com/Expensify/JS-Libs.git",
		},
		{ url: "https://github.com/Expensify/JS-Libs", repoType: "github" },
	],
	[
		"expo-asset",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-asset",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"expo-av",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-av",
		},
		{ url: "https://github.com/expo/expo", repoType: "github" },
	],
	[
		"fast-equals",
		{
			type: "git",
			url: "git+https://github.com/planttheidea/fast-equals.git",
		},
		{ url: "https://github.com/planttheidea/fast-equals", repoType: "github" },
	],
	[
		"focus-trap-react",
		{
			type: "git",
			url: "git+https://github.com/focus-trap/focus-trap-react.git",
		},
		{
			url: "https://github.com/focus-trap/focus-trap-react",
			repoType: "github",
		},
	],
	[
		"howler",
		{
			type: "git",
			url: "git://github.com/goldfire/howler.js.git",
		},
		{ url: "https://github.com/goldfire/howler.js", repoType: "github" },
	],
	[
		"htmlparser2",
		{
			type: "git",
			url: "git://github.com/fb55/htmlparser2.git",
		},
		{ url: "https://github.com/fb55/htmlparser2", repoType: "github" },
	],
	[
		"idb-keyval",
		{
			type: "git",
			url: "git+https://github.com/jakearchibald/idb-keyval.git",
		},
		{
			url: "https://github.com/jakearchibald/idb-keyval",
			repoType: "github",
		},
	],
	[
		"lodash-es",
		"lodash/lodash",
		{
			url: "https://github.com/lodash/lodash",
			repoType: "github",
		},
	],
	[
		"lottie-react-native",
		"https://github.com/react-native-community/lottie-react-native",
		{
			url: "https://github.com/react-native-community/lottie-react-native",
			repoType: "github",
		},
	],
	[
		"mapbox-gl",
		{
			type: "git",
			url: "git://github.com/mapbox/mapbox-gl-js.git",
		},
		{ url: "https://github.com/mapbox/mapbox-gl-js", repoType: "github" },
	],
	[
		"onfido-sdk-ui",
		{
			type: "git",
			url: "https://github.com/onfido/onfido-sdk-ui.git",
		},
		{
			url: "https://github.com/onfido/onfido-sdk-ui",
			repoType: "github",
		},
	],
	[
		"pako",
		"nodeca/pako",
		{ url: "https://github.com/nodeca/pako", repoType: "github" },
	],
	[
		"process",
		{
			type: "git",
			url: "git://github.com/shtylman/node-process.git",
		},
		{ url: "https://github.com/shtylman/node-process", repoType: "github" },
	],
	[
		"pusher-js",
		{
			type: "git",
			url: "https://github.com/pusher/pusher-js.git",
		},
		{ url: "https://github.com/pusher/pusher-js", repoType: "github" },
	],
	[
		"react-beautiful-dnd",
		{
			type: "git",
			url: "https://github.com/atlassian/react-beautiful-dnd.git",
		},
		{
			url: "https://github.com/atlassian/react-beautiful-dnd",
			repoType: "github",
		},
	],
	[
		"react-collapse",
		{
			type: "git",
			url: "https://github.com/nkbt/react-collapse.git",
		},
		{ url: "https://github.com/nkbt/react-collapse", repoType: "github" },
	],
	[
		"react-content-loader",
		{
			type: "git",
			url: "https://github.com/danilowoz/react-content-loader",
		},
		{
			url: "https://github.com/danilowoz/react-content-loader",
			repoType: "github",
		},
	],
	[
		"react-error-boundary",
		{
			type: "git",
			url: "https://github.com/bvaughn/react-error-boundary",
		},
		{
			url: "https://github.com/bvaughn/react-error-boundary",
			repoType: "github",
		},
	],
	[
		"react-fast-pdf",
		{
			type: "git",
			url: "git+https://github.com/Expensify/react-fast-pdf.git",
		},
		{ url: "https://github.com/Expensify/react-fast-pdf", repoType: "github" },
	],
	[
		"react-map-gl",
		{
			type: "git",
			url: "https://github.com/visgl/react-map-gl.git",
		},
		{
			url: "https://github.com/visgl/react-map-gl",
			repoType: "github",
		},
	],
	[
		"react-native-advanced-input-mask",
		{
			type: "git",
			url: "git+https://github.com/IvanIhnatsiuk/react-native-advanced-input-mask.git",
		},
		{
			url: "https://github.com/IvanIhnatsiuk/react-native-advanced-input-mask",
			repoType: "github",
		},
	],
	[
		"react-native-android-location-enabler",
		"https://github.com/Richou/react-native-android-location-enabler",
		{
			url: "https://github.com/Richou/react-native-android-location-enabler",
			repoType: "github",
		},
	],
	[
		"react-native-app-logs",
		{
			type: "git",
			url: "git+https://github.com/kirillzyusko/react-native-app-logs.git",
		},
		{
			url: "https://github.com/kirillzyusko/react-native-app-logs",
			repoType: "github",
		},
	],
	[
		"react-native-collapsible",
		{
			type: "git",
			url: "https://oblador@github.com/oblador/react-native-collapsible.git",
		},
		{
			url: "https://oblador@github.com/oblador/react-native-collapsible",
			repoType: "github",
		},
	],
	[
		"react-native-config",
		{
			type: "git",
			url: "https://github.com/luggit/react-native-config",
		},
		{
			url: "https://github.com/luggit/react-native-config",
			repoType: "github",
		},
	],
	[
		"react-native-document-picker",
		"https://github.com/react-native-documents/document-picker",
		{
			url: "https://github.com/react-native-documents/document-picker",
			repoType: "github",
		},
	],
	[
		"react-native-draggable-flatlist",
		{
			type: "git",
			url: "git+https://github.com/computerjazz/react-native-draggable-flatlist.git",
		},
		{
			url: "https://github.com/computerjazz/react-native-draggable-flatlist",
			repoType: "github",
		},
	],
	[
		"react-native-fs",
		{
			type: "git",
			url: "git@github.com:itinance/react-native-fs.git",
		},
		{
			url: "https://github.com/itinance/react-native-fs",
			repoType: "github",
		},
	],
	[
		"react-native-google-places-autocomplete",
		{
			type: "git",
			url: "git+https://github.com/FaridSafi/react-native-google-places-autocomplete.git",
		},
		{
			url: "https://github.com/FaridSafi/react-native-google-places-autocomplete",
			repoType: "github",
		},
	],
	[
		"react-native-haptic-feedback",
		{
			type: "git",
			url: "https://github.com/mkuczera/react-native-haptic-feedback.git",
		},
		{
			url: "https://github.com/mkuczera/react-native-haptic-feedback",
			repoType: "github",
		},
	],
	[
		"react-native-image-picker",
		{
			type: "git",
			url: "https://github.com/react-native-image-picker/react-native-image-picker.git",
		},
		{
			url: "https://github.com/react-native-image-picker/react-native-image-picker",
			repoType: "github",
		},
	],
	[
		"react-native-image-size",
		{
			type: "git",
			url: "git+https://github.com/eXist-FraGGer/react-native-image-size.git",
		},
		{
			url: "https://github.com/eXist-FraGGer/react-native-image-size",
			repoType: "github",
		},
	],
	[
		"react-native-key-command",
		"http://github.com/expensify/react-native-key-command",
		{
			url: "https://github.com/expensify/react-native-key-command",
			repoType: "github",
		},
	],
	[
		"react-native-launch-arguments",
		{
			type: "git",
			url: "git+https://github.com/iamolegga/react-native-launch-arguments.git",
			baseUrl: "https://github.com/iamolegga/react-native-launch-arguments",
		},
		{
			url: "https://github.com/iamolegga/react-native-launch-arguments",
			repoType: "github",
		},
	],
	[
		"react-native-modal",
		{
			type: "git",
			url: "https://github.com/react-native-community/react-native-modal",
		},
		{
			url: "https://github.com/react-native-community/react-native-modal",
			repoType: "github",
		},
	],
	[
		"react-native-onyx",
		{
			type: "git",
			url: "https://github.com/Expensify/react-native-onyx.git",
		},
		{
			url: "https://github.com/Expensify/react-native-onyx",
			repoType: "github",
		},
	],
	[
		"react-native-performance",
		{
			type: "git",
			url: "https://github.com/oblador/react-native-performance.git",
			directory: "packages/react-native-performance",
		},
		{
			url: "https://github.com/oblador/react-native-performance",
			repoType: "github",
		},
	],
	[
		"react-native-qrcode-svg",
		{
			type: "git",
			url: "git+ssh://git@github.com/awesomejerry/react-native-qrcode-svg.git",
		},
		{
			url: "https://github.com/awesomejerry/react-native-qrcode-svg",
			repoType: "github",
		},
	],
	[
		"react-native-quick-sqlite",
		"https://github.com/margelo/react-native-quick-sqlite",
		{
			url: "https://github.com/margelo/react-native-quick-sqlite",
			repoType: "github",
		},
	],
	[
		"react-native-release-profiler",
		"https://github.com/margelo/react-native-release-profiler",
		{
			url: "https://github.com/margelo/react-native-release-profiler",
			repoType: "github",
		},
	],
	[
		"react-native-render-html",
		{
			type: "git",
			url: "https://github.com/meliorence/react-native-render-html.git",
			directory: "packages/render-html",
		},
		{
			url: "https://github.com/meliorence/react-native-render-html",
			repoType: "github",
		},
	],
	[
		"react-native-share",
		{
			type: "git",
			url: "git+https://github.com/react-native-community/react-native-share.git",
		},
		{
			url: "https://github.com/react-native-community/react-native-share",
			repoType: "github",
		},
	],
	[
		"react-native-sound",
		"zmxv/react-native-sound",
		{
			url: "https://github.com/zmxv/react-native-sound",
			repoType: "github",
		},
	],
	[
		"react-native-tab-view",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/react-native-tab-view",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"react-plaid-link",
		{
			type: "git",
			url: "https://github.com/plaid/react-plaid-link.git",
		},
		{ url: "https://github.com/plaid/react-plaid-link", repoType: "github" },
	],
	[
		"react-web-config",
		{
			type: "git",
			url: "git+https://github.com/tanhauhau/react-web-config.git",
		},
		{
			url: "https://github.com/tanhauhau/react-web-config",
			repoType: "github",
		},
	],
	[
		"react-webcam",
		{
			type: "git",
			url: "https://github.com/mozmorris/react-webcam.git",
		},
		{ url: "https://github.com/mozmorris/react-webcam", repoType: "github" },
	],
	[
		"react-window",
		{
			type: "git",
			url: "https://github.com/bvaughn/react-window.git",
		},
		{ url: "https://github.com/bvaughn/react-window", repoType: "github" },
	],
	[
		"@actions/core",
		{
			type: "git",
			url: "git+https://github.com/actions/toolkit.git",
			directory: "packages/core",
		},
		{ url: "https://github.com/actions/toolkit", repoType: "github" },
	],
	[
		"@actions/github",
		{
			type: "git",
			url: "git+https://github.com/actions/toolkit.git",
			directory: "packages/github",
		},
		{ url: "https://github.com/actions/toolkit", repoType: "github" },
	],
	[
		"@babel/parser",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-parser",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-class-properties",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-export-namespace-from",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-export-namespace-from",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-private-methods",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-private-methods",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-private-property-in-object",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-private-property-in-object",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-transform-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-class-properties",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/preset-flow",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-flow",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/preset-react",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-react",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/preset-typescript",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-typescript",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/traverse",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-traverse",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/types",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-types",
		},
		{
			url: "https://github.com/babel/babel",
			repoType: "github",
		},
	],
	[
		"@callstack/reassure-compare",
		"https://github.com/callstack/reassure",
		{
			url: "https://github.com/callstack/reassure",
			repoType: "github",
		},
	],
	[
		"@dword-design/eslint-plugin-import-alias",
		"dword-design/eslint-plugin-import-alias",
		{
			url: "https://github.com/dword-design/eslint-plugin-import-alias",
			repoType: "github",
		},
	],
	[
		"@electron/notarize",
		{
			type: "git",
			url: "https://github.com/electron/notarize.git",
		},
		{
			url: "https://github.com/electron/notarize",
			repoType: "github",
		},
	],
	[
		"@fullstory/babel-plugin-annotate-react",
		{
			type: "git",
			url: "git+https://github.com/fullstory-babel-plugin-annotate-react.git",
		},
		{
			url: "https://github.com/fullstory-babel-plugin-annotate-react",
			repoType: "github",
		},
	],
	[
		"@fullstory/babel-plugin-react-native",
		"git://github.com/fullstorydev/fullstory-babel-plugin-react-native.git",
		{
			url: "https://github.com/fullstorydev/fullstory-babel-plugin-react-native",
			repoType: "github",
		},
	],
	[
		"@jest/globals",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-globals",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"@kie/act-js",
		{
			type: "git",
			url: "https://github.com/kiegroup/act-js.git",
		},
		{ url: "https://github.com/kiegroup/act-js", repoType: "github" },
	],
	[
		"@kie/mock-github",
		{
			type: "git",
			url: "https://github.com/kiegroup/mock-github.git",
		},
		{ url: "https://github.com/kiegroup/mock-github", repoType: "github" },
	],
	[
		"@ngneat/falso",
		{
			type: "git",
			url: "https://github.com/ngneat/falso",
		},
		{
			url: "https://github.com/ngneat/falso",
			repoType: "github",
		},
	],
	[
		"@octokit/core",
		"github:octokit/core.js",
		{
			url: "https://github.com/github:octokit/core.js",
			repoType: "github",
		},
	],
	[
		"@octokit/plugin-paginate-rest",
		"github:octokit/plugin-paginate-rest.js",
		{
			url: "https://github.com/github:octokit/plugin-paginate-rest.js",
			repoType: "github",
		},
	],
	[
		"@octokit/plugin-throttling",
		"github:octokit/plugin-throttling.js",
		{
			url: "https://github.com/github:octokit/plugin-throttling.js",
			repoType: "github",
		},
	],
	[
		"@octokit/webhooks-types",
		"github:octokit/webhooks",
		{
			url: "https://github.com/github:octokit/webhooks",
			repoType: "github",
		},
	],
	[
		"@perf-profiler/profiler",
		{
			type: "git",
			url: "https://github.com/bamlab/android-performance-profiler.git",
			directory: "very-secret-profiler",
		},
		{
			url: "https://github.com/bamlab/android-performance-profiler",
			repoType: "github",
		},
	],
	[
		"@perf-profiler/reporter",
		{
			type: "git",
			url: "https://github.com/bamlab/android-performance-profiler.git",
		},
		{
			url: "https://github.com/bamlab/android-performance-profiler",
			repoType: "github",
		},
	],
	[
		"@react-native-community/cli",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/cli",
		},
		{
			url: "https://github.com/react-native-community/cli",
			repoType: "github",
		},
	],
	[
		"@react-native-community/cli-platform-android",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/platform-android",
		},
		{
			url: "https://github.com/react-native-community/cli",
			repoType: "github",
		},
	],
	[
		"@react-native-community/cli-platform-ios",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/cli-platform-ios",
		},
		{
			url: "https://github.com/react-native-community/cli",
			repoType: "github",
		},
	],
	[
		"@react-native-community/eslint-config",
		{
			type: "git",
			url: "git@github.com:facebook/react-native.git",
			directory: "packages/eslint-config-react-native-community",
		},
		{
			url: "https://github.com/facebook/react-native",
			repoType: "github",
		},
	],
	[
		"@react-native/babel-preset",
		{
			type: "git",
			url: "git+ssh://git@github.com/facebook/react-native.git",
		},
		{
			url: "https://github.com/facebook/react-native",
			repoType: "github",
		},
	],
	[
		"@react-native/metro-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/metro-config",
		},
		{
			url: "https://github.com/facebook/react-native",
			repoType: "github",
		},
	],
	[
		"@react-navigation/devtools",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/devtools",
		},
		{
			url: "https://github.com/react-navigation/react-navigation",
			repoType: "github",
		},
	],
	[
		"@storybook/addon-a11y",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/addons/a11y",
		},
		{
			url: "https://github.com/storybookjs/storybook",
			repoType: "github",
		},
	],
	[
		"@storybook/addon-essentials",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/addons/essentials",
		},
		{
			url: "https://github.com/storybookjs/storybook",
			repoType: "github",
		},
	],
	[
		"@storybook/addon-webpack5-compiler-babel",
		{
			type: "git",
			url: "git+https://github.com/storybookjs/addon-webpack5-compiler-babel.git",
		},
		{
			url: "https://github.com/storybookjs/addon-webpack5-compiler-babel",
			repoType: "github",
		},
	],
	[
		"@storybook/cli",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/cli",
		},
		{ url: "https://github.com/storybookjs/storybook", repoType: "github" },
	],
	[
		"@storybook/manager-api",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/manager-api",
		},
		{ url: "https://github.com/storybookjs/storybook", repoType: "github" },
	],
	[
		"@storybook/react",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/renderers/react",
		},
		{ url: "https://github.com/storybookjs/storybook", repoType: "github" },
	],
	[
		"@storybook/react-webpack5",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/frameworks/react-webpack5",
		},
		{ url: "https://github.com/storybookjs/storybook", repoType: "github" },
	],
	[
		"@storybook/theming",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/theming",
		},
		{
			url: "https://github.com/storybookjs/storybook",
			repoType: "github",
		},
	],
	[
		"@svgr/webpack",
		"https://github.com/gregberge/svgr/tree/main/packages/webpack",
		{
			url: "https://github.com/gregberge/svgr/tree/main/packages/webpack",
			repoType: "github",
		},
	],
	[
		"@trivago/prettier-plugin-sort-imports",
		{
			url: "https://github.com/trivago/prettier-plugin-sort-imports",
			type: "git",
		},
		{
			url: "https://github.com/trivago/prettier-plugin-sort-imports",
			repoType: "github",
		},
	],
	[
		"@types/canvas-size",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/canvas-size",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/howler",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/howler",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/jest-when",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/jest-when",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/js-yaml",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/js-yaml",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/lodash-es",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash-es",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/mapbox-gl",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/mapbox-gl",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/mime-db",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/mime-db",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-beautiful-dnd",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-beautiful-dnd",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-collapse",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-collapse",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-is",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-is",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/react-native-web",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-native-web",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/semver",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/semver",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/setimmediate",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/setimmediate",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/webpack",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/webpack",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@types/webpack-bundle-analyzer",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/webpack-bundle-analyzer",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@vercel/ncc",
		"vercel/ncc",
		{
			url: "https://github.com/vercel/ncc",
			repoType: "github",
		},
	],
	[
		"@vue/preload-webpack-plugin",
		{
			type: "git",
			url: "https://github.com/vuejs/preload-webpack-plugin.git",
		},
		{
			url: "https://github.com/vuejs/preload-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"@welldone-software/why-did-you-render",
		"https://github.com/welldone-software/why-did-you-render",
		{
			url: "https://github.com/welldone-software/why-did-you-render",
			repoType: "github",
		},
	],
	[
		"ajv-cli",
		{
			type: "git",
			url: "https://github.com/ajv-validator/ajv-cli",
		},
		{ url: "https://github.com/ajv-validator/ajv-cli", repoType: "github" },
	],
	[
		"babel-loader",
		{
			type: "git",
			url: "https://github.com/babel/babel-loader.git",
		},
		{
			url: "https://github.com/babel/babel-loader",
			repoType: "github",
		},
	],
	[
		"babel-plugin-react-native-web",
		{
			type: "git",
			url: "git://github.com/necolas/react-native-web.git",
		},
		{ url: "https://github.com/necolas/react-native-web", repoType: "github" },
	],
	[
		"clean-webpack-plugin",
		{
			type: "git",
			url: "https://github.com/johnagan/clean-webpack-plugin.git",
		},
		{
			url: "https://github.com/johnagan/clean-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"concurrently",
		{
			type: "git",
			url: "https://github.com/open-cli-tools/concurrently.git",
		},
		{
			url: "https://github.com/open-cli-tools/concurrently",
			repoType: "github",
		},
	],
	[
		"copy-webpack-plugin",
		"webpack-contrib/copy-webpack-plugin",
		{
			url: "https://github.com/webpack-contrib/copy-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"css-loader",
		"webpack-contrib/css-loader",
		{
			url: "https://github.com/webpack-contrib/css-loader",
			repoType: "github",
		},
	],
	[
		"csv-parse",
		{
			type: "git",
			url: "https://github.com/adaltas/node-csv.git",
			directory: "packages/csv-parse",
		},
		{ url: "https://github.com/adaltas/node-csv", repoType: "github" },
	],
	[
		"csv-writer",
		{
			type: "git",
			url: "git+https://github.com/ryu1kn/csv-writer.git",
		},
		{ url: "https://github.com/ryu1kn/csv-writer", repoType: "github" },
	],
	[
		"diff-so-fancy",
		{
			type: "git",
			url: "git+https://github.com/so-fancy/diff-so-fancy.git",
		},
		{ url: "https://github.com/so-fancy/diff-so-fancy", repoType: "github" },
	],
	[
		"dotenv",
		{
			type: "git",
			url: "git://github.com/motdotla/dotenv.git",
		},
		{
			url: "https://github.com/motdotla/dotenv",
			repoType: "github",
		},
	],
	[
		"electron",
		"https://github.com/electron/electron",
		{
			url: "https://github.com/electron/electron",
			repoType: "github",
		},
	],
	[
		"electron-builder",
		{
			type: "git",
			url: "git+https://github.com/electron-userland/electron-builder.git",
			directory: "packages/electron-builder",
		},
		{
			url: "https://github.com/electron-userland/electron-builder",
			repoType: "github",
		},
	],
	[
		"eslint-config-airbnb-typescript",
		{
			type: "git",
			url: "https://github.com/iamturns/eslint-config-airbnb-typescript.git",
		},
		{
			url: "https://github.com/iamturns/eslint-config-airbnb-typescript",
			repoType: "github",
		},
	],
	[
		"eslint-config-expensify",
		{
			type: "git",
			url: "git+https://github.com/Expensify/eslint-config-expensify.git",
		},
		{
			url: "https://github.com/Expensify/eslint-config-expensify",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-deprecation",
		{
			type: "git",
			url: "https://github.com/gund/eslint-plugin-deprecation.git",
		},
		{
			url: "https://github.com/gund/eslint-plugin-deprecation",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-jsdoc",
		{
			type: "git",
			url: "https://github.com/gajus/eslint-plugin-jsdoc",
		},
		{ url: "https://github.com/gajus/eslint-plugin-jsdoc", repoType: "github" },
	],
	[
		"eslint-plugin-lodash",
		{
			type: "git",
			url: "https://github.com/wix/eslint-plugin-lodash",
		},
		{
			url: "https://github.com/wix/eslint-plugin-lodash",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-storybook",
		{
			type: "git",
			url: "https://github.com/storybookjs/eslint-plugin-storybook",
		},
		{
			url: "https://github.com/storybookjs/eslint-plugin-storybook",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-testing-library",
		{
			type: "git",
			url: "https://github.com/testing-library/eslint-plugin-testing-library",
		},
		{
			url: "https://github.com/testing-library/eslint-plugin-testing-library",
			repoType: "github",
		},
	],
	[
		"eslint-plugin-you-dont-need-lodash-underscore",
		{
			type: "git",
			url: "https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git",
		},
		{
			url: "https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore",
			repoType: "github",
		},
	],
	[
		"googleapis",
		"googleapis/google-api-nodejs-client",
		{
			url: "https://github.com/googleapis/google-api-nodejs-client",
			repoType: "github",
		},
	],
	[
		"html-webpack-plugin",
		"https://github.com/jantimon/html-webpack-plugin.git",
		{
			url: "https://github.com/jantimon/html-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"http-server",
		{
			type: "git",
			url: "git://github.com/http-party/http-server.git",
		},
		{ url: "https://github.com/http-party/http-server", repoType: "github" },
	],
	[
		"jest-circus",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-circus",
		},
		{ url: "https://github.com/facebook/jest", repoType: "github" },
	],
	[
		"jest-cli",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-cli",
		},
		{ url: "https://github.com/facebook/jest", repoType: "github" },
	],
	[
		"jest-environment-jsdom",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-environment-jsdom",
		},
		{ url: "https://github.com/facebook/jest", repoType: "github" },
	],
	[
		"jest-transformer-svg",
		{
			type: "git",
			url: "git+ssh://git@github.com:Em-Ant/jest-transformer-svg.git",
		},
		{
			url: "https://github.com/Em-Ant/jest-transformer-svg",
			repoType: "github",
		},
	],
	[
		"jest-when",
		{
			type: "git",
			url: "https://github.com/timkindberg/jest-when/",
		},
		{
			url: "https://github.com/timkindberg/jest-when",
			repoType: "github",
		},
	],
	[
		"link",
		"privatenumber/link",
		{
			url: "https://github.com/privatenumber/link",
			repoType: "github",
		},
	],
	[
		"memfs",
		{
			type: "git",
			url: "https://github.com/streamich/memfs.git",
		},
		{ url: "https://github.com/streamich/memfs", repoType: "github" },
	],
	[
		"onchange",
		{
			type: "git",
			url: "https://github.com/Qard/onchange.git",
		},
		{
			url: "https://github.com/Qard/onchange",
			repoType: "github",
		},
	],
	[
		"openai",
		"github:openai/openai-node",
		{
			url: "https://github.com/github:openai/openai-node",
			repoType: "github",
		},
	],
	[
		"peggy",
		"peggyjs/peggy",
		{
			url: "https://github.com/peggyjs/peggy",
			repoType: "github",
		},
	],
	[
		"portfinder",
		{
			type: "git",
			url: "git@github.com:http-party/node-portfinder.git",
		},
		{
			url: "https://github.com/http-party/node-portfinder",
			repoType: "github",
		},
	],
	[
		"react-compiler-healthcheck",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/react-compiler-healthcheck",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"react-is",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-is",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"react-native-clean-project",
		{
			type: "git",
			url: "git+https://github.com/pmadruga/react-native-clean-project.git",
		},
		{
			url: "https://github.com/pmadruga/react-native-clean-project",
			repoType: "github",
		},
	],
	[
		"reassure",
		"https://github.com/callstack/reassure",
		{
			url: "https://github.com/callstack/reassure",
			repoType: "github",
		},
	],
	[
		"semver",
		{
			type: "git",
			url: "https://github.com/npm/node-semver.git",
		},
		{
			url: "https://github.com/npm/node-semver",
			repoType: "github",
		},
	],
	[
		"setimmediate",
		"YuzuJS/setImmediate",
		{
			url: "https://github.com/YuzuJS/setImmediate",
			repoType: "github",
		},
	],
	[
		"shellcheck",
		{
			type: "git",
			url: "git+https://github.com/gunar/shellcheck.git",
		},
		{ url: "https://github.com/gunar/shellcheck", repoType: "github" },
	],
	[
		"source-map",
		{
			type: "git",
			url: "http://github.com/mozilla/source-map.git",
		},
		{ url: "https://github.com/mozilla/source-map", repoType: "github" },
	],
	[
		"storybook",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/cli",
		},
		{
			url: "https://github.com/storybookjs/storybook",
			repoType: "github",
		},
	],
	[
		"style-loader",
		"webpack-contrib/style-loader",
		{
			url: "https://github.com/webpack-contrib/style-loader",
			repoType: "github",
		},
	],
	[
		"ts-jest",
		{
			type: "git",
			url: "git+https://github.com/kulshekhar/ts-jest.git",
		},
		{
			url: "https://github.com/kulshekhar/ts-jest",
			repoType: "github",
		},
	],
	[
		"tsconfig-paths",
		"https://github.com/dividab/tsconfig-paths",
		{
			url: "https://github.com/dividab/tsconfig-paths",
			repoType: "github",
		},
	],
	[
		"type-fest",
		"sindresorhus/type-fest",
		{
			url: "https://github.com/sindresorhus/type-fest",
			repoType: "github",
		},
	],
	[
		"wait-port",
		{
			type: "git",
			url: "git+https://github.com/dwmkerr/wait-port.git",
		},
		{ url: "https://github.com/dwmkerr/wait-port", repoType: "github" },
	],
	[
		"webpack",
		{
			type: "git",
			url: "https://github.com/webpack/webpack.git",
		},
		{ url: "https://github.com/webpack/webpack", repoType: "github" },
	],
	[
		"webpack-cli",
		{
			type: "git",
			url: "https://github.com/webpack/webpack-cli.git",
		},
		{
			url: "https://github.com/webpack/webpack-cli",
			repoType: "github",
		},
	],
	[
		"webpack-dev-server",
		"https://github.com/webpack/webpack-dev-server",
		{
			url: "https://github.com/webpack/webpack-dev-server",
			repoType: "github",
		},
	],
	[
		"webpack-merge",
		{
			type: "git",
			url: "https://github.com/survivejs/webpack-merge.git",
		},
		{ url: "https://github.com/survivejs/webpack-merge", repoType: "github" },
	],
	[
		"xlsx",
		{
			type: "git",
			url: "https://git.sheetjs.com/SheetJS/sheetjs",
		},
		{ url: "https://git.sheetjs.com/SheetJS/sheetjs", repoType: "unknown" },
	],
	[
		"cdk-v2-constructs",
		{
			type: "git",
			url: "https://bitbucket.collaboration-man.com/projects/RIODEV/repos/cdk-v2-constructs/",
		},
		{
			url: "https://bitbucket.collaboration-man.com/projects/RIODEV/repos/cdk-v2-constructs",
			repoType: "bitbucket",
		},
	],
];

// List of the ~300 most downloaded npm packages (not up to date, still good for tests)
export const validTestData2: PackageTestData[] = [
	[
		"supports-color",
		"chalk/supports-color",
		{ url: "https://github.com/chalk/supports-color", repoType: "github" },
	],
	[
		"debug",
		{ type: "git", url: "git://github.com/debug-js/debug.git" },
		{ url: "https://github.com/debug-js/debug", repoType: "github" },
	],
	[
		"chalk",
		"chalk/chalk",
		{ url: "https://github.com/chalk/chalk", repoType: "github" },
	],
	[
		"ansi-styles",
		"chalk/ansi-styles",
		{ url: "https://github.com/chalk/ansi-styles", repoType: "github" },
	],
	[
		"kind-of",
		"jonschlinkert/kind-of",
		{ url: "https://github.com/jonschlinkert/kind-of", repoType: "github" },
	],
	[
		"ansi-regex",
		"chalk/ansi-regex",
		{ url: "https://github.com/chalk/ansi-regex", repoType: "github" },
	],
	[
		"has-flag",
		"sindresorhus/has-flag",
		{ url: "https://github.com/sindresorhus/has-flag", repoType: "github" },
	],
	[
		"tslib",
		{ type: "git", url: "https://github.com/Microsoft/tslib.git" },
		{ url: "https://github.com/Microsoft/tslib", repoType: "github" },
	],
	[
		"color-convert",
		"Qix-/color-convert",
		{ url: "https://github.com/Qix-/color-convert", repoType: "github" },
	],
	[
		"color-name",
		{ type: "git", url: "git@github.com:colorjs/color-name.git" },
		{
			url: "https://github.com/colorjs/color-name",
			repoType: "github",
		},
	],
	[
		"readable-stream",
		{ type: "git", url: "git://github.com/nodejs/readable-stream" },
		{ url: "https://github.com/nodejs/readable-stream", repoType: "github" },
	],
	[
		"string-width",
		"sindresorhus/string-width",
		{ url: "https://github.com/sindresorhus/string-width", repoType: "github" },
	],
	[
		"type-fest",
		"sindresorhus/type-fest",
		{ url: "https://github.com/sindresorhus/type-fest", repoType: "github" },
	],
	[
		"find-up",
		"sindresorhus/find-up",
		{ url: "https://github.com/sindresorhus/find-up", repoType: "github" },
	],
	[
		"is-fullwidth-code-point",
		"sindresorhus/is-fullwidth-code-point",
		{
			url: "https://github.com/sindresorhus/is-fullwidth-code-point",
			repoType: "github",
		},
	],
	[
		"safe-buffer",
		{ type: "git", url: "git://github.com/feross/safe-buffer.git" },
		{ url: "https://github.com/feross/safe-buffer", repoType: "github" },
	],
	[
		"string_decoder",
		{ type: "git", url: "git://github.com/nodejs/string_decoder.git" },
		{ url: "https://github.com/nodejs/string_decoder", repoType: "github" },
	],
	[
		"yargs",
		{ type: "git", url: "https://github.com/yargs/yargs.git" },
		{ url: "https://github.com/yargs/yargs", repoType: "github" },
	],
	[
		"inherits",
		"git://github.com/isaacs/inherits",
		{ url: "https://github.com/isaacs/inherits", repoType: "github" },
	],
	[
		"yargs-parser",
		{ type: "git", url: "https://github.com/yargs/yargs-parser.git" },
		{ url: "https://github.com/yargs/yargs-parser", repoType: "github" },
	],
	[
		"get-stream",
		"sindresorhus/get-stream",
		{ url: "https://github.com/sindresorhus/get-stream", repoType: "github" },
	],
	[
		"camelcase",
		"sindresorhus/camelcase",
		{ url: "https://github.com/sindresorhus/camelcase", repoType: "github" },
	],
	[
		"postcss",
		"postcss/postcss",
		{ url: "https://github.com/postcss/postcss", repoType: "github" },
	],
	[
		"wrap-ansi",
		"chalk/wrap-ansi",
		{ url: "https://github.com/chalk/wrap-ansi", repoType: "github" },
	],
	[
		"punycode",
		{ type: "git", url: "https://github.com/mathiasbynens/punycode.js.git" },
		{ url: "https://github.com/mathiasbynens/punycode.js", repoType: "github" },
	],
	[
		"escape-string-regexp",
		"sindresorhus/escape-string-regexp",
		{
			url: "https://github.com/sindresorhus/escape-string-regexp",
			repoType: "github",
		},
	],
	[
		"lru-cache",
		{ type: "git", url: "git://github.com/isaacs/node-lru-cache.git" },
		{ url: "https://github.com/isaacs/node-lru-cache", repoType: "github" },
	],
	[
		"schema-utils",
		"webpack/schema-utils",
		{ url: "https://github.com/webpack/schema-utils", repoType: "github" },
	],
	[
		"yallist",
		{ type: "git", url: "git+https://github.com/isaacs/yallist.git" },
		{ url: "https://github.com/isaacs/yallist", repoType: "github" },
	],
	[
		"@types/node",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/node",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"fs-extra",
		{ type: "git", url: "https://github.com/jprichardson/node-fs-extra" },
		{
			url: "https://github.com/jprichardson/node-fs-extra",
			repoType: "github",
		},
	],
	[
		"postcss-value-parser",
		{
			type: "git",
			url: "https://github.com/TrySound/postcss-value-parser.git",
		},
		{
			url: "https://github.com/TrySound/postcss-value-parser",
			repoType: "github",
		},
	],
	[
		"resolve-from",
		"sindresorhus/resolve-from",
		{ url: "https://github.com/sindresorhus/resolve-from", repoType: "github" },
	],
	[
		"glob",
		{ type: "git", url: "git://github.com/isaacs/node-glob.git" },
		{ url: "https://github.com/isaacs/node-glob", repoType: "github" },
	],
	[
		"isarray",
		{ type: "git", url: "git://github.com/juliangruber/isarray.git" },
		{ url: "https://github.com/juliangruber/isarray", repoType: "github" },
	],
	[
		"cliui",
		"yargs/cliui",
		{ url: "https://github.com/yargs/cliui", repoType: "github" },
	],
	[
		"cross-spawn",
		{ type: "git", url: "git@github.com:moxystudio/node-cross-spawn.git" },
		{
			url: "https://github.com/moxystudio/node-cross-spawn",
			repoType: "github",
		},
	],
	[
		"@babel/code-frame",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-code-frame",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"emoji-regex",
		{ type: "git", url: "https://github.com/mathiasbynens/emoji-regex.git" },
		{ url: "https://github.com/mathiasbynens/emoji-regex", repoType: "github" },
	],
	[
		"@babel/types",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-types",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"estraverse",
		{ type: "git", url: "http://github.com/estools/estraverse.git" },
		{ url: "https://github.com/estools/estraverse", repoType: "github" },
	],
	[
		"glob-parent",
		"gulpjs/glob-parent",
		{ url: "https://github.com/gulpjs/glob-parent", repoType: "github" },
	],
	[
		"micromatch",
		"micromatch/micromatch",
		{ url: "https://github.com/micromatch/micromatch", repoType: "github" },
	],
	[
		"is-glob",
		"micromatch/is-glob",
		{ url: "https://github.com/micromatch/is-glob", repoType: "github" },
	],
	[
		"braces",
		"micromatch/braces",
		{ url: "https://github.com/micromatch/braces", repoType: "github" },
	],
	[
		"fill-range",
		"jonschlinkert/fill-range",
		{ url: "https://github.com/jonschlinkert/fill-range", repoType: "github" },
	],
	[
		"ws",
		{ type: "git", url: "git+https://github.com/websockets/ws.git" },
		{ url: "https://github.com/websockets/ws", repoType: "github" },
	],
	[
		"http-errors",
		"jshttp/http-errors",
		{ url: "https://github.com/jshttp/http-errors", repoType: "github" },
	],
	[
		"globby",
		"sindresorhus/globby",
		{ url: "https://github.com/sindresorhus/globby", repoType: "github" },
	],
	[
		"to-regex-range",
		"micromatch/to-regex-range",
		{ url: "https://github.com/micromatch/to-regex-range", repoType: "github" },
	],
	[
		"which",
		{ type: "git", url: "git+https://github.com/npm/node-which.git" },
		{ url: "https://github.com/npm/node-which", repoType: "github" },
	],
	[
		"parse-json",
		"sindresorhus/parse-json",
		{ url: "https://github.com/sindresorhus/parse-json", repoType: "github" },
	],
	[
		"is-data-descriptor",
		{
			type: "git",
			url: "git+https://github.com/inspect-js/is-data-descriptor.git",
		},
		{
			url: "https://github.com/inspect-js/is-data-descriptor",
			repoType: "github",
		},
	],
	[
		"is-descriptor",
		{ type: "git", url: "git+https://github.com/inspect-js/is-descriptor.git" },
		{ url: "https://github.com/inspect-js/is-descriptor", repoType: "github" },
	],
	[
		"make-dir",
		"sindresorhus/make-dir",
		{ url: "https://github.com/sindresorhus/make-dir", repoType: "github" },
	],
	[
		"globals",
		"sindresorhus/globals",
		{ url: "https://github.com/sindresorhus/globals", repoType: "github" },
	],
	[
		"mime",
		{ url: "https://github.com/broofa/mime", type: "git" },
		{ url: "https://github.com/broofa/mime", repoType: "github" },
	],
	[
		"async",
		{ type: "git", url: "https://github.com/caolan/async.git" },
		{ url: "https://github.com/caolan/async", repoType: "github" },
	],
	[
		"ignore",
		{ type: "git", url: "git@github.com:kaelzhang/node-ignore.git" },
		{
			url: "https://github.com/kaelzhang/node-ignore",
			repoType: "github",
		},
	],
	[
		"loader-utils",
		{ type: "git", url: "https://github.com/webpack/loader-utils.git" },
		{ url: "https://github.com/webpack/loader-utils", repoType: "github" },
	],
	[
		"path-type",
		"sindresorhus/path-type",
		{ url: "https://github.com/sindresorhus/path-type", repoType: "github" },
	],
	[
		"y18n",
		"yargs/y18n",
		{ url: "https://github.com/yargs/y18n", repoType: "github" },
	],
	[
		"anymatch",
		{ type: "git", url: "https://github.com/micromatch/anymatch" },
		{ url: "https://github.com/micromatch/anymatch", repoType: "github" },
	],
	[
		"json-schema-traverse",
		{
			type: "git",
			url: "git+https://github.com/epoberezkin/json-schema-traverse.git",
		},
		{
			url: "https://github.com/epoberezkin/json-schema-traverse",
			repoType: "github",
		},
	],
	[
		"lodash",
		"lodash/lodash",
		{ url: "https://github.com/lodash/lodash", repoType: "github" },
	],
	[
		"p-try",
		"sindresorhus/p-try",
		{ url: "https://github.com/sindresorhus/p-try", repoType: "github" },
	],
	[
		"path-key",
		"sindresorhus/path-key",
		{ url: "https://github.com/sindresorhus/path-key", repoType: "github" },
	],
	[
		"is-stream",
		"sindresorhus/is-stream",
		{ url: "https://github.com/sindresorhus/is-stream", repoType: "github" },
	],
	[
		"iconv-lite",
		{ type: "git", url: "git://github.com/ashtuchkin/iconv-lite.git" },
		{ url: "https://github.com/ashtuchkin/iconv-lite", repoType: "github" },
	],
	[
		"@jest/types",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-types",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"shebang-command",
		"kevva/shebang-command",
		{ url: "https://github.com/kevva/shebang-command", repoType: "github" },
	],
	[
		"minimist",
		{ type: "git", url: "git://github.com/minimistjs/minimist.git" },
		{ url: "https://github.com/minimistjs/minimist", repoType: "github" },
	],
	[
		"webidl-conversions",
		"jsdom/webidl-conversions",
		{ url: "https://github.com/jsdom/webidl-conversions", repoType: "github" },
	],
	[
		"universalify",
		{ type: "git", url: "git+https://github.com/RyanZim/universalify.git" },
		{ url: "https://github.com/RyanZim/universalify", repoType: "github" },
	],
	[
		"jsonfile",
		{ type: "git", url: "git@github.com:jprichardson/node-jsonfile.git" },
		{
			url: "https://github.com/jprichardson/node-jsonfile",
			repoType: "github",
		},
	],
	[
		"eslint-visitor-keys",
		"eslint/js",
		{ url: "https://github.com/eslint/js", repoType: "github" },
	],
	[
		"read-pkg",
		"sindresorhus/read-pkg",
		{ url: "https://github.com/sindresorhus/read-pkg", repoType: "github" },
	],
	[
		"core-js",
		{
			type: "git",
			url: "git+https://github.com/zloirock/core-js.git",
			directory: "packages/core-js",
		},
		{ url: "https://github.com/zloirock/core-js", repoType: "github" },
	],
	[
		"mime-types",
		"jshttp/mime-types",
		{ url: "https://github.com/jshttp/mime-types", repoType: "github" },
	],
	[
		"@babel/parser",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-parser",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"tough-cookie",
		{ type: "git", url: "git://github.com/salesforce/tough-cookie.git" },
		{ url: "https://github.com/salesforce/tough-cookie", repoType: "github" },
	],
	[
		"bytes",
		"visionmedia/bytes.js",
		{ url: "https://github.com/visionmedia/bytes.js", repoType: "github" },
	],
	[
		"setprototypeof",
		{ type: "git", url: "https://github.com/wesleytodd/setprototypeof.git" },
		{ url: "https://github.com/wesleytodd/setprototypeof", repoType: "github" },
	],
	[
		"js-yaml",
		"nodeca/js-yaml",
		{ url: "https://github.com/nodeca/js-yaml", repoType: "github" },
	],
	[
		"strip-bom",
		"sindresorhus/strip-bom",
		{ url: "https://github.com/sindresorhus/strip-bom", repoType: "github" },
	],
	[
		"jsesc",
		{ type: "git", url: "https://github.com/mathiasbynens/jsesc.git" },
		{ url: "https://github.com/mathiasbynens/jsesc", repoType: "github" },
	],
	[
		"regenerator-runtime",
		{
			type: "git",
			url: "https://github.com/facebook/regenerator/tree/main/packages/runtime",
		},
		{
			url: "https://github.com/facebook/regenerator/tree/main/packages/runtime",
			repoType: "github",
		},
	],
	[
		"slash",
		"sindresorhus/slash",
		{ url: "https://github.com/sindresorhus/slash", repoType: "github" },
	],
	[
		"read-pkg-up",
		"sindresorhus/read-pkg-up",
		{ url: "https://github.com/sindresorhus/read-pkg-up", repoType: "github" },
	],
	[
		"@babel/helper-validator-identifier",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-validator-identifier",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/highlight",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-highlight",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@types/yargs",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/yargs",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"@babel/runtime",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-runtime",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/generator",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-generator",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"binary-extensions",
		"sindresorhus/binary-extensions",
		{
			url: "https://github.com/sindresorhus/binary-extensions",
			repoType: "github",
		},
	],
	[
		"@babel/helper-plugin-utils",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-plugin-utils",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"cosmiconfig",
		{ type: "git", url: "git+https://github.com/cosmiconfig/cosmiconfig.git" },
		{ url: "https://github.com/cosmiconfig/cosmiconfig", repoType: "github" },
	],
	[
		"has-value",
		"jonschlinkert/has-value",
		{ url: "https://github.com/jonschlinkert/has-value", repoType: "github" },
	],
	[
		"strip-json-comments",
		"sindresorhus/strip-json-comments",
		{
			url: "https://github.com/sindresorhus/strip-json-comments",
			repoType: "github",
		},
	],
	[
		"whatwg-url",
		"jsdom/whatwg-url",
		{ url: "https://github.com/jsdom/whatwg-url", repoType: "github" },
	],
	[
		"mimic-fn",
		"sindresorhus/mimic-fn",
		{ url: "https://github.com/sindresorhus/mimic-fn", repoType: "github" },
	],
	[
		"@babel/core",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-core",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"balanced-match",
		{ type: "git", url: "git://github.com/juliangruber/balanced-match.git" },
		{
			url: "https://github.com/juliangruber/balanced-match",
			repoType: "github",
		},
	],
	[
		"p-map",
		"sindresorhus/p-map",
		{ url: "https://github.com/sindresorhus/p-map", repoType: "github" },
	],
	[
		"@babel/traverse",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-traverse",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"is-arrayish",
		{ type: "git", url: "https://github.com/qix-/node-is-arrayish.git" },
		{ url: "https://github.com/qix-/node-is-arrayish", repoType: "github" },
	],
	[
		"fast-deep-equal",
		{
			type: "git",
			url: "git+https://github.com/epoberezkin/fast-deep-equal.git",
		},
		{
			url: "https://github.com/epoberezkin/fast-deep-equal",
			repoType: "github",
		},
	],
	[
		"is-binary-path",
		"sindresorhus/is-binary-path",
		{
			url: "https://github.com/sindresorhus/is-binary-path",
			repoType: "github",
		},
	],
	[
		"onetime",
		"sindresorhus/onetime",
		{ url: "https://github.com/sindresorhus/onetime", repoType: "github" },
	],
	[
		"argparse",
		"nodeca/argparse",
		{ url: "https://github.com/nodeca/argparse", repoType: "github" },
	],
	[
		"eslint-scope",
		"eslint/js",
		{ url: "https://github.com/eslint/js", repoType: "github" },
	],
	[
		"@babel/template",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-template",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"jest-worker",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-worker",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"react-is",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-is",
		},
		{ url: "https://github.com/facebook/react", repoType: "github" },
	],
	[
		"ansi-escapes",
		"sindresorhus/ansi-escapes",
		{ url: "https://github.com/sindresorhus/ansi-escapes", repoType: "github" },
	],
	[
		"esprima",
		{ type: "git", url: "https://github.com/jquery/esprima.git" },
		{ url: "https://github.com/jquery/esprima", repoType: "github" },
	],
	[
		"slice-ansi",
		"chalk/slice-ansi",
		{ url: "https://github.com/chalk/slice-ansi", repoType: "github" },
	],
	[
		"levn",
		{ type: "git", url: "git://github.com/gkz/levn.git" },
		{ url: "https://github.com/gkz/levn", repoType: "github" },
	],
	[
		"ini",
		{ type: "git", url: "git+https://github.com/npm/ini.git" },
		{ url: "https://github.com/npm/ini", repoType: "github" },
	],
	[
		"rxjs",
		{ type: "git", url: "https://github.com/reactivex/rxjs.git" },
		{ url: "https://github.com/reactivex/rxjs", repoType: "github" },
	],
	[
		"import-fresh",
		"sindresorhus/import-fresh",
		{ url: "https://github.com/sindresorhus/import-fresh", repoType: "github" },
	],
	[
		"minimatch",
		{ type: "git", url: "git://github.com/isaacs/minimatch.git" },
		{ url: "https://github.com/isaacs/minimatch", repoType: "github" },
	],
	[
		"electron-to-chromium",
		{ type: "git", url: "https://github.com/kilian/electron-to-chromium/" },
		{
			url: "https://github.com/kilian/electron-to-chromium",
			repoType: "github",
		},
	],
	[
		"tr46",
		"https://github.com/jsdom/tr46",
		{ url: "https://github.com/jsdom/tr46", repoType: "github" },
	],
	[
		"@babel/helper-function-name",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-function-name",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"node-fetch",
		{ type: "git", url: "https://github.com/node-fetch/node-fetch.git" },
		{ url: "https://github.com/node-fetch/node-fetch", repoType: "github" },
	],
	[
		"array-union",
		"sindresorhus/array-union",
		{ url: "https://github.com/sindresorhus/array-union", repoType: "github" },
	],
	[
		"is-wsl",
		"sindresorhus/is-wsl",
		{ url: "https://github.com/sindresorhus/is-wsl", repoType: "github" },
	],
	[
		"once",
		{ type: "git", url: "git://github.com/isaacs/once" },
		{ url: "https://github.com/isaacs/once", repoType: "github" },
	],
	[
		"@babel/helper-get-function-arity",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-get-function-arity",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/helper-split-export-declaration",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-split-export-declaration",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"domelementtype",
		{ type: "git", url: "git://github.com/fb55/domelementtype.git" },
		{ url: "https://github.com/fb55/domelementtype", repoType: "github" },
	],
	[
		"caniuse-lite",
		"browserslist/caniuse-lite",
		{ url: "https://github.com/browserslist/caniuse-lite", repoType: "github" },
	],
	[
		"util",
		{ type: "git", url: "git://github.com/browserify/node-util" },
		{ url: "https://github.com/browserify/node-util", repoType: "github" },
	],
	[
		"get-caller-file",
		{
			type: "git",
			url: "git+https://github.com/stefanpenner/get-caller-file.git",
		},
		{
			url: "https://github.com/stefanpenner/get-caller-file",
			repoType: "github",
		},
	],
	[
		"indent-string",
		"sindresorhus/indent-string",
		{
			url: "https://github.com/sindresorhus/indent-string",
			repoType: "github",
		},
	],
	[
		"depd",
		"dougwilson/nodejs-depd",
		{ url: "https://github.com/dougwilson/nodejs-depd", repoType: "github" },
	],
	[
		"ansi-colors",
		"doowb/ansi-colors",
		{ url: "https://github.com/doowb/ansi-colors", repoType: "github" },
	],
	[
		"ieee754",
		{ type: "git", url: "git://github.com/feross/ieee754.git" },
		{ url: "https://github.com/feross/ieee754", repoType: "github" },
	],
	[
		"object-inspect",
		{ type: "git", url: "git://github.com/inspect-js/object-inspect.git" },
		{ url: "https://github.com/inspect-js/object-inspect", repoType: "github" },
	],
	[
		"chownr",
		{ type: "git", url: "git://github.com/isaacs/chownr.git" },
		{ url: "https://github.com/isaacs/chownr", repoType: "github" },
	],
	[
		"picomatch",
		"micromatch/picomatch",
		{ url: "https://github.com/micromatch/picomatch", repoType: "github" },
	],
	[
		"node-releases",
		{ type: "git", url: "git+https://github.com/chicoxyzzy/node-releases.git" },
		{ url: "https://github.com/chicoxyzzy/node-releases", repoType: "github" },
	],
	[
		"parse5",
		{ type: "git", url: "git://github.com/inikulin/parse5.git" },
		{ url: "https://github.com/inikulin/parse5", repoType: "github" },
	],
	[
		"array-flatten",
		{ type: "git", url: "git://github.com/blakeembrey/array-flatten.git" },
		{ url: "https://github.com/blakeembrey/array-flatten", repoType: "github" },
	],
	[
		"brace-expansion",
		{ type: "git", url: "git://github.com/juliangruber/brace-expansion.git" },
		{
			url: "https://github.com/juliangruber/brace-expansion",
			repoType: "github",
		},
	],
	[
		"agent-base",
		{
			type: "git",
			url: "https://github.com/TooTallNate/proxy-agents.git",
			directory: "packages/agent-base",
		},
		{ url: "https://github.com/TooTallNate/proxy-agents", repoType: "github" },
	],
	[
		"follow-redirects",
		{
			type: "git",
			url: "git+ssh://git@github.com/follow-redirects/follow-redirects.git",
		},
		{
			url: "https://github.com/follow-redirects/follow-redirects",
			repoType: "github",
		},
	],
	[
		"eslint-utils",
		{ type: "git", url: "git+https://github.com/mysticatea/eslint-utils.git" },
		{ url: "https://github.com/mysticatea/eslint-utils", repoType: "github" },
	],
	[
		"process-nextick-args",
		{
			type: "git",
			url: "https://github.com/calvinmetcalf/process-nextick-args.git",
		},
		{
			url: "https://github.com/calvinmetcalf/process-nextick-args",
			repoType: "github",
		},
	],
	[
		"raw-body",
		"stream-utils/raw-body",
		{ url: "https://github.com/stream-utils/raw-body", repoType: "github" },
	],
	[
		"extsprintf",
		{ type: "git", url: "https://github.com/davepacheco/node-extsprintf.git" },
		{
			url: "https://github.com/davepacheco/node-extsprintf",
			repoType: "github",
		},
	],
	[
		"safer-buffer",
		{ type: "git", url: "git+https://github.com/ChALkeR/safer-buffer.git" },
		{ url: "https://github.com/ChALkeR/safer-buffer", repoType: "github" },
	],
	[
		"concat-map",
		{ type: "git", url: "git://github.com/ljharb/concat-map.git" },
		{ url: "https://github.com/ljharb/concat-map", repoType: "github" },
	],
	[
		"figures",
		"sindresorhus/figures",
		{ url: "https://github.com/sindresorhus/figures", repoType: "github" },
	],
	[
		"sprintf-js",
		{ type: "git", url: "https://github.com/alexei/sprintf.js.git" },
		{ url: "https://github.com/alexei/sprintf.js", repoType: "github" },
	],
	[
		"cssom",
		"NV/CSSOM",
		{ url: "https://github.com/NV/CSSOM", repoType: "github" },
	],
	[
		"domutils",
		{ type: "git", url: "git://github.com/fb55/domutils.git" },
		{ url: "https://github.com/fb55/domutils", repoType: "github" },
	],
	[
		"uri-js",
		{ type: "git", url: "http://github.com/garycourt/uri-js" },
		{ url: "https://github.com/garycourt/uri-js", repoType: "github" },
	],
	[
		"fs.realpath",
		{ type: "git", url: "git+https://github.com/isaacs/fs.realpath.git" },
		{ url: "https://github.com/isaacs/fs.realpath", repoType: "github" },
	],
	[
		"@babel/helper-module-imports",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-module-imports",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"is-callable",
		{ type: "git", url: "git://github.com/inspect-js/is-callable.git" },
		{ url: "https://github.com/inspect-js/is-callable", repoType: "github" },
	],
	[
		"entities",
		{ type: "git", url: "git://github.com/fb55/entities.git" },
		{ url: "https://github.com/fb55/entities", repoType: "github" },
	],
	[
		"@babel/helper-replace-supers",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-replace-supers",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"fast-json-stable-stringify",
		{
			type: "git",
			url: "git://github.com/epoberezkin/fast-json-stable-stringify.git",
		},
		{
			url: "https://github.com/epoberezkin/fast-json-stable-stringify",
			repoType: "github",
		},
	],
	[
		"@babel/helper-member-expression-to-functions",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-member-expression-to-functions",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"fast-glob",
		"mrmlnc/fast-glob",
		{ url: "https://github.com/mrmlnc/fast-glob", repoType: "github" },
	],
	[
		"path-parse",
		{ type: "git", url: "https://github.com/jbgutierrez/path-parse.git" },
		{ url: "https://github.com/jbgutierrez/path-parse", repoType: "github" },
	],
	[
		"sax",
		"git://github.com/isaacs/sax-js.git",
		{ url: "https://github.com/isaacs/sax-js", repoType: "github" },
	],
	[
		"has",
		{ type: "git", url: "git://github.com/tarruda/has.git" },
		{ url: "https://github.com/tarruda/has", repoType: "github" },
	],
	[
		"@babel/helper-module-transforms",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-module-transforms",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"through2",
		{ type: "git", url: "https://github.com/rvagg/through2.git" },
		{ url: "https://github.com/rvagg/through2", repoType: "github" },
	],
	[
		"function-bind",
		{ type: "git", url: "https://github.com/Raynos/function-bind.git" },
		{ url: "https://github.com/Raynos/function-bind", repoType: "github" },
	],
	[
		"end-of-stream",
		{ type: "git", url: "git://github.com/mafintosh/end-of-stream.git" },
		{ url: "https://github.com/mafintosh/end-of-stream", repoType: "github" },
	],
	[
		"picocolors",
		"alexeyraspopov/picocolors",
		{ url: "https://github.com/alexeyraspopov/picocolors", repoType: "github" },
	],
	[
		"to-fast-properties",
		"sindresorhus/to-fast-properties",
		{
			url: "https://github.com/sindresorhus/to-fast-properties",
			repoType: "github",
		},
	],
	[
		"https-proxy-agent",
		{
			type: "git",
			url: "https://github.com/TooTallNate/proxy-agents.git",
			directory: "packages/https-proxy-agent",
		},
		{ url: "https://github.com/TooTallNate/proxy-agents", repoType: "github" },
	],
	[
		"load-json-file",
		"sindresorhus/load-json-file",
		{
			url: "https://github.com/sindresorhus/load-json-file",
			repoType: "github",
		},
	],
	[
		"terser-webpack-plugin",
		"webpack-contrib/terser-webpack-plugin",
		{
			url: "https://github.com/webpack-contrib/terser-webpack-plugin",
			repoType: "github",
		},
	],
	[
		"combined-stream",
		{ type: "git", url: "git://github.com/felixge/node-combined-stream.git" },
		{
			url: "https://github.com/felixge/node-combined-stream",
			repoType: "github",
		},
	],
	[
		"object.assign",
		{ type: "git", url: "git://github.com/ljharb/object.assign.git" },
		{ url: "https://github.com/ljharb/object.assign", repoType: "github" },
	],
	[
		"@babel/helpers",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helpers",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/helper-optimise-call-expression",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-optimise-call-expression",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"decamelize",
		"sindresorhus/decamelize",
		{ url: "https://github.com/sindresorhus/decamelize", repoType: "github" },
	],
	[
		"terser",
		"https://github.com/terser/terser",
		{ url: "https://github.com/terser/terser", repoType: "github" },
	],
	[
		"@babel/helper-simple-access",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-simple-access",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"is-plain-obj",
		"sindresorhus/is-plain-obj",
		{ url: "https://github.com/sindresorhus/is-plain-obj", repoType: "github" },
	],
	[
		"@nodelib/fs.stat",
		"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.stat",
		{
			url: "https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.stat",
			repoType: "github",
		},
	],
	[
		"dom-serializer",
		{ type: "git", url: "git://github.com/cheeriojs/dom-serializer.git" },
		{ url: "https://github.com/cheeriojs/dom-serializer", repoType: "github" },
	],
	[
		"is-path-inside",
		"sindresorhus/is-path-inside",
		{
			url: "https://github.com/sindresorhus/is-path-inside",
			repoType: "github",
		},
	],
	[
		"object-keys",
		{ type: "git", url: "git://github.com/ljharb/object-keys.git" },
		{ url: "https://github.com/ljharb/object-keys", repoType: "github" },
	],
	[
		"toidentifier",
		"component/toidentifier",
		{ url: "https://github.com/component/toidentifier", repoType: "github" },
	],
	[
		"lowercase-keys",
		"sindresorhus/lowercase-keys",
		{
			url: "https://github.com/sindresorhus/lowercase-keys",
			repoType: "github",
		},
	],
	[
		"escodegen",
		{ type: "git", url: "http://github.com/estools/escodegen.git" },
		{ url: "https://github.com/estools/escodegen", repoType: "github" },
	],
	[
		"inquirer",
		{ type: "git", url: "https://github.com/SBoudrias/Inquirer.js.git" },
		{ url: "https://github.com/SBoudrias/Inquirer.js", repoType: "github" },
	],
	[
		"require-main-filename",
		{
			type: "git",
			url: "git+ssh://git@github.com/yargs/require-main-filename.git",
		},
		{
			url: "https://github.com/yargs/require-main-filename",
			repoType: "github",
		},
	],
	[
		"diff",
		{ type: "git", url: "git://github.com/kpdecker/jsdiff.git" },
		{ url: "https://github.com/kpdecker/jsdiff", repoType: "github" },
	],
	[
		"is-typedarray",
		{ type: "git", url: "git://github.com/hughsk/is-typedarray.git" },
		{ url: "https://github.com/hughsk/is-typedarray", repoType: "github" },
	],
	[
		"is-obj",
		"sindresorhus/is-obj",
		{ url: "https://github.com/sindresorhus/is-obj", repoType: "github" },
	],
	[
		"require-directory",
		{
			type: "git",
			url: "git://github.com/troygoode/node-require-directory.git",
		},
		{
			url: "https://github.com/troygoode/node-require-directory",
			repoType: "github",
		},
	],
	[
		"log-symbols",
		"sindresorhus/log-symbols",
		{ url: "https://github.com/sindresorhus/log-symbols", repoType: "github" },
	],
	[
		"xtend",
		"git://github.com/Raynos/xtend.git",
		{ url: "https://github.com/Raynos/xtend", repoType: "github" },
	],
	[
		"memory-fs",
		{ type: "git", url: "https://github.com/webpack/memory-fs.git" },
		{ url: "https://github.com/webpack/memory-fs", repoType: "github" },
	],
	[
		"component-emitter",
		"sindresorhus/component-emitter",
		{
			url: "https://github.com/sindresorhus/component-emitter",
			repoType: "github",
		},
	],
	[
		"deep-is",
		{ type: "git", url: "http://github.com/thlorenz/deep-is.git" },
		{ url: "https://github.com/thlorenz/deep-is", repoType: "github" },
	],
	[
		"emojis-list",
		{ type: "git", url: "git+https://github.com/kikobeats/emojis-list.git" },
		{ url: "https://github.com/kikobeats/emojis-list", repoType: "github" },
	],
	[
		"fast-levenshtein",
		{ type: "git", url: "https://github.com/hiddentao/fast-levenshtein.git" },
		{
			url: "https://github.com/hiddentao/fast-levenshtein",
			repoType: "github",
		},
	],
	[
		"axios",
		{ type: "git", url: "https://github.com/axios/axios.git" },
		{ url: "https://github.com/axios/axios", repoType: "github" },
	],
	[
		"@babel/helper-hoist-variables",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-hoist-variables",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/compat-data",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-compat-data",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/helper-compilation-targets",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-compilation-targets",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"get-intrinsic",
		{ type: "git", url: "git+https://github.com/ljharb/get-intrinsic.git" },
		{ url: "https://github.com/ljharb/get-intrinsic", repoType: "github" },
	],
	[
		"arr-diff",
		"jonschlinkert/arr-diff",
		{ url: "https://github.com/jonschlinkert/arr-diff", repoType: "github" },
	],
	[
		"dotenv",
		{ type: "git", url: "git://github.com/motdotla/dotenv.git" },
		{ url: "https://github.com/motdotla/dotenv", repoType: "github" },
	],
	[
		"espree",
		"eslint/js",
		{ url: "https://github.com/eslint/js", repoType: "github" },
	],
	[
		"spdx-license-ids",
		"jslicense/spdx-license-ids",
		{
			url: "https://github.com/jslicense/spdx-license-ids",
			repoType: "github",
		},
	],
	[
		"domhandler",
		{ type: "git", url: "git://github.com/fb55/domhandler.git" },
		{ url: "https://github.com/fb55/domhandler", repoType: "github" },
	],
	[
		"human-signals",
		{ type: "git", url: "git+https://github.com/ehmicky/human-signals.git" },
		{ url: "https://github.com/ehmicky/human-signals", repoType: "github" },
	],
	[
		"unpipe",
		"stream-utils/unpipe",
		{ url: "https://github.com/stream-utils/unpipe", repoType: "github" },
	],
	[
		"resolve-cwd",
		"sindresorhus/resolve-cwd",
		{ url: "https://github.com/sindresorhus/resolve-cwd", repoType: "github" },
	],
	[
		"extend",
		{ type: "git", url: "https://github.com/justmoon/node-extend.git" },
		{ url: "https://github.com/justmoon/node-extend", repoType: "github" },
	],
	[
		"call-bind",
		{ type: "git", url: "git+https://github.com/ljharb/call-bind.git" },
		{ url: "https://github.com/ljharb/call-bind", repoType: "github" },
	],
	[
		"css-select",
		{ type: "git", url: "git://github.com/fb55/css-select.git" },
		{ url: "https://github.com/fb55/css-select", repoType: "github" },
	],
	[
		"content-disposition",
		"jshttp/content-disposition",
		{
			url: "https://github.com/jshttp/content-disposition",
			repoType: "github",
		},
	],
	[
		"css-what",
		{ type: "git", url: "https://github.com/fb55/css-what" },
		{ url: "https://github.com/fb55/css-what", repoType: "github" },
	],
	[
		"is-symbol",
		{ type: "git", url: "git://github.com/inspect-js/is-symbol.git" },
		{ url: "https://github.com/inspect-js/is-symbol", repoType: "github" },
	],
	[
		"flatted",
		{ type: "git", url: "git+https://github.com/WebReflection/flatted.git" },
		{ url: "https://github.com/WebReflection/flatted", repoType: "github" },
	],
	[
		"negotiator",
		"jshttp/negotiator",
		{ url: "https://github.com/jshttp/negotiator", repoType: "github" },
	],
	[
		"@types/istanbul-reports",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/istanbul-reports",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"table",
		{ type: "git", url: "https://github.com/gajus/table" },
		{ url: "https://github.com/gajus/table", repoType: "github" },
	],
	[
		"escalade",
		"lukeed/escalade",
		{ url: "https://github.com/lukeed/escalade", repoType: "github" },
	],
	[
		"p-finally",
		"sindresorhus/p-finally",
		{ url: "https://github.com/sindresorhus/p-finally", repoType: "github" },
	],
	[
		"request",
		{ type: "git", url: "https://github.com/request/request.git" },
		{ url: "https://github.com/request/request", repoType: "github" },
	],
	[
		"set-blocking",
		{ type: "git", url: "git+https://github.com/yargs/set-blocking.git" },
		{ url: "https://github.com/yargs/set-blocking", repoType: "github" },
	],
	[
		"enhanced-resolve",
		{ type: "git", url: "git://github.com/webpack/enhanced-resolve.git" },
		{ url: "https://github.com/webpack/enhanced-resolve", repoType: "github" },
	],
	[
		"range-parser",
		"jshttp/range-parser",
		{ url: "https://github.com/jshttp/range-parser", repoType: "github" },
	],
	[
		"har-validator",
		{
			type: "git",
			url: "https://github.com/ahmadnassri/node-har-validator.git",
		},
		{
			url: "https://github.com/ahmadnassri/node-har-validator",
			repoType: "github",
		},
	],
	[
		"url",
		{ type: "git", url: "https://github.com/defunctzombie/node-url.git" },
		{ url: "https://github.com/defunctzombie/node-url", repoType: "github" },
	],
	[
		"accepts",
		"jshttp/accepts",
		{ url: "https://github.com/jshttp/accepts", repoType: "github" },
	],
	[
		"extglob",
		"micromatch/extglob",
		{ url: "https://github.com/micromatch/extglob", repoType: "github" },
	],
	[
		"which-module",
		{ type: "git", url: "git+https://github.com/nexdrew/which-module.git" },
		{ url: "https://github.com/nexdrew/which-module", repoType: "github" },
	],
	[
		"@babel/helper-annotate-as-pure",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-annotate-as-pure",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"jest-resolve",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-resolve",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"@babel/plugin-proposal-object-rest-spread",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-object-rest-spread",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"performance-now",
		{ type: "git", url: "git://github.com/braveg1rl/performance-now.git" },
		{ url: "https://github.com/braveg1rl/performance-now", repoType: "github" },
	],
	[
		"regexpp",
		{ type: "git", url: "git+https://github.com/mysticatea/regexpp.git" },
		{ url: "https://github.com/mysticatea/regexpp", repoType: "github" },
	],
	[
		"string.prototype.trimstart",
		{
			type: "git",
			url: "git://github.com/es-shims/String.prototype.trimStart.git",
		},
		{
			url: "https://github.com/es-shims/String.prototype.trimStart",
			repoType: "github",
		},
	],
	[
		"string.prototype.trimend",
		{
			type: "git",
			url: "git://github.com/es-shims/String.prototype.trimEnd.git",
		},
		{
			url: "https://github.com/es-shims/String.prototype.trimEnd",
			repoType: "github",
		},
	],
	[
		"word-wrap",
		"jonschlinkert/word-wrap",
		{ url: "https://github.com/jonschlinkert/word-wrap", repoType: "github" },
	],
	[
		"es-to-primitive",
		{ type: "git", url: "git://github.com/ljharb/es-to-primitive.git" },
		{ url: "https://github.com/ljharb/es-to-primitive", repoType: "github" },
	],
	[
		"minipass",
		"https://github.com/isaacs/minipass",
		{ url: "https://github.com/isaacs/minipass", repoType: "github" },
	],
	[
		"progress",
		{ type: "git", url: "git://github.com/visionmedia/node-progress" },
		{ url: "https://github.com/visionmedia/node-progress", repoType: "github" },
	],
	[
		"esrecurse",
		{ type: "git", url: "https://github.com/estools/esrecurse.git" },
		{ url: "https://github.com/estools/esrecurse", repoType: "github" },
	],
	[
		"tapable",
		{ type: "git", url: "http://github.com/webpack/tapable.git" },
		{ url: "https://github.com/webpack/tapable", repoType: "github" },
	],
	[
		"body-parser",
		"expressjs/body-parser",
		{ url: "https://github.com/expressjs/body-parser", repoType: "github" },
	],
	[
		"serve-static",
		"expressjs/serve-static",
		{ url: "https://github.com/expressjs/serve-static", repoType: "github" },
	],
	[
		"aws4",
		"github:mhart/aws4",
		{ url: "https://github.com/github:mhart/aws4", repoType: "github" },
	],
	[
		"escape-html",
		"component/escape-html",
		{ url: "https://github.com/component/escape-html", repoType: "github" },
	],
	[
		"parseurl",
		"pillarjs/parseurl",
		{ url: "https://github.com/pillarjs/parseurl", repoType: "github" },
	],
	[
		"@types/json-schema",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/json-schema",
		},
		{
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
			repoType: "github",
		},
	],
	[
		"istanbul-lib-coverage",
		{
			type: "git",
			url: "git+ssh://git@github.com/istanbuljs/istanbuljs.git",
			directory: "packages/istanbul-lib-coverage",
		},
		{ url: "https://github.com/istanbuljs/istanbuljs", repoType: "github" },
	],
	[
		"nan",
		{ type: "git", url: "git://github.com/nodejs/nan.git" },
		{ url: "https://github.com/nodejs/nan", repoType: "github" },
	],
	[
		"ee-first",
		"jonathanong/ee-first",
		{ url: "https://github.com/jonathanong/ee-first", repoType: "github" },
	],
	[
		"deepmerge",
		{ type: "git", url: "git://github.com/TehShrike/deepmerge.git" },
		{ url: "https://github.com/TehShrike/deepmerge", repoType: "github" },
	],
	[
		"merge-stream",
		"grncdr/merge-stream",
		{ url: "https://github.com/grncdr/merge-stream", repoType: "github" },
	],
	[
		"@babel/preset-env",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-env",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"tunnel-agent",
		{ url: "https://github.com/mikeal/tunnel-agent" },
		{ url: "https://github.com/mikeal/tunnel-agent", repoType: "github" },
	],
	[
		"etag",
		"jshttp/etag",
		{ url: "https://github.com/jshttp/etag", repoType: "github" },
	],
	[
		"spdx-expression-parse",
		"jslicense/spdx-expression-parse.js",
		{
			url: "https://github.com/jslicense/spdx-expression-parse.js",
			repoType: "github",
		},
	],
	[
		"fresh",
		"jshttp/fresh",
		{ url: "https://github.com/jshttp/fresh", repoType: "github" },
	],
	[
		"spdx-correct",
		"jslicense/spdx-correct.js",
		{ url: "https://github.com/jslicense/spdx-correct.js", repoType: "github" },
	],
	[
		"tweetnacl",
		{ type: "git", url: "https://github.com/dchest/tweetnacl-js.git" },
		{ url: "https://github.com/dchest/tweetnacl-js", repoType: "github" },
	],
	[
		"json-stringify-safe",
		{ type: "git", url: "git://github.com/isaacs/json-stringify-safe" },
		{
			url: "https://github.com/isaacs/json-stringify-safe",
			repoType: "github",
		},
	],
	[
		"concat-stream",
		{ type: "git", url: "http://github.com/maxogden/concat-stream.git" },
		{ url: "https://github.com/maxogden/concat-stream", repoType: "github" },
	],
	[
		"vary",
		"jshttp/vary",
		{ url: "https://github.com/jshttp/vary", repoType: "github" },
	],
	[
		"file-entry-cache",
		{
			type: "git",
			url: "git+https://github.com/jaredwray/cacheable.git",
			directory: "packages/file-entry-cache",
		},
		{ url: "https://github.com/jaredwray/cacheable", repoType: "github" },
	],
	[
		"media-typer",
		"jshttp/media-typer",
		{ url: "https://github.com/jshttp/media-typer", repoType: "github" },
	],
	[
		"flat-cache",
		{
			type: "git",
			url: "git+https://github.com/jaredwray/cacheable.git",
			directory: "packages/flat-cache",
		},
		{ url: "https://github.com/jaredwray/cacheable", repoType: "github" },
	],
	[
		"@babel/plugin-proposal-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-class-properties",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"webpack-sources",
		{ type: "git", url: "git+https://github.com/webpack/webpack-sources.git" },
		{ url: "https://github.com/webpack/webpack-sources", repoType: "github" },
	],
	[
		"arrify",
		"sindresorhus/arrify",
		{ url: "https://github.com/sindresorhus/arrify", repoType: "github" },
	],
	[
		"@typescript-eslint/typescript-estree",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/typescript-estree",
		},
		{
			url: "https://github.com/typescript-eslint/typescript-eslint",
			repoType: "github",
		},
	],
	[
		"spdx-exceptions",
		"kemitchell/spdx-exceptions.json",
		{
			url: "https://github.com/kemitchell/spdx-exceptions.json",
			repoType: "github",
		},
	],
	[
		"dot-prop",
		"sindresorhus/dot-prop",
		{ url: "https://github.com/sindresorhus/dot-prop", repoType: "github" },
	],
	[
		"content-type",
		"jshttp/content-type",
		{ url: "https://github.com/jshttp/content-type", repoType: "github" },
	],
	[
		"express",
		"expressjs/express",
		{ url: "https://github.com/expressjs/express", repoType: "github" },
	],
	[
		"aproba",
		{ type: "git", url: "https://github.com/iarna/aproba" },
		{ url: "https://github.com/iarna/aproba", repoType: "github" },
	],
	[
		"decode-uri-component",
		"SamVerschueren/decode-uri-component",
		{
			url: "https://github.com/SamVerschueren/decode-uri-component",
			repoType: "github",
		},
	],
	[
		"webpack",
		{ type: "git", url: "https://github.com/webpack/webpack.git" },
		{ url: "https://github.com/webpack/webpack", repoType: "github" },
	],
	[
		"validate-npm-package-license",
		"kemitchell/validate-npm-package-license.js",
		{
			url: "https://github.com/kemitchell/validate-npm-package-license.js",
			repoType: "github",
		},
	],
	[
		"clone",
		{ type: "git", url: "git://github.com/pvorb/node-clone.git" },
		{ url: "https://github.com/pvorb/node-clone", repoType: "github" },
	],
	[
		"retry",
		{ type: "git", url: "git://github.com/tim-kos/node-retry.git" },
		{ url: "https://github.com/tim-kos/node-retry", repoType: "github" },
	],
	[
		"watchpack",
		{ type: "git", url: "https://github.com/webpack/watchpack.git" },
		{ url: "https://github.com/webpack/watchpack", repoType: "github" },
	],
	[
		"jsbn",
		{ type: "git", url: "https://github.com/andyperlitch/jsbn.git" },
		{ url: "https://github.com/andyperlitch/jsbn", repoType: "github" },
	],
	[
		"bl",
		{ type: "git", url: "https://github.com/rvagg/bl.git" },
		{ url: "https://github.com/rvagg/bl", repoType: "github" },
	],
	[
		"verror",
		{ type: "git", url: "https://github.com/joyent/node-verror.git" },
		{ url: "https://github.com/joyent/node-verror", repoType: "github" },
	],
	[
		"jest-haste-map",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-haste-map",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"htmlparser2",
		{ type: "git", url: "git://github.com/fb55/htmlparser2.git" },
		{ url: "https://github.com/fb55/htmlparser2", repoType: "github" },
	],
	[
		"isstream",
		{ type: "git", url: "https://github.com/rvagg/isstream.git" },
		{ url: "https://github.com/rvagg/isstream", repoType: "github" },
	],
	[
		"gensync",
		{ type: "git", url: "https://github.com/loganfsmyth/gensync.git" },
		{ url: "https://github.com/loganfsmyth/gensync", repoType: "github" },
	],
	[
		"file-type",
		"sindresorhus/file-type",
		{ url: "https://github.com/sindresorhus/file-type", repoType: "github" },
	],
	[
		"map-obj",
		"sindresorhus/map-obj",
		{ url: "https://github.com/sindresorhus/map-obj", repoType: "github" },
	],
	[
		"source-map-url",
		"lydell/source-map-url",
		{ url: "https://github.com/lydell/source-map-url", repoType: "github" },
	],
	[
		"ecc-jsbn",
		{ type: "git", url: "https://github.com/quartzjer/ecc-jsbn.git" },
		{ url: "https://github.com/quartzjer/ecc-jsbn", repoType: "github" },
	],
	[
		"atob",
		{ type: "git", url: "git://git.coolaj86.com/coolaj86/atob.js.git" },
		{ url: "https://git.coolaj86.com/coolaj86/atob.js", repoType: "unknown" },
	],
	[
		"jsdom",
		{ type: "git", url: "git+https://github.com/jsdom/jsdom.git" },
		{ url: "https://github.com/jsdom/jsdom", repoType: "github" },
	],
	[
		"repeat-string",
		"jonschlinkert/repeat-string",
		{
			url: "https://github.com/jonschlinkert/repeat-string",
			repoType: "github",
		},
	],
	[
		"xmlbuilder",
		{ type: "git", url: "git://github.com/oozcitak/xmlbuilder-js.git" },
		{ url: "https://github.com/oozcitak/xmlbuilder-js", repoType: "github" },
	],
	[
		"repeat-element",
		"jonschlinkert/repeat-element",
		{
			url: "https://github.com/jonschlinkert/repeat-element",
			repoType: "github",
		},
	],
	[
		"forever-agent",
		{ url: "https://github.com/mikeal/forever-agent" },
		{ url: "https://github.com/mikeal/forever-agent", repoType: "github" },
	],
	[
		"har-schema",
		{ type: "git", url: "https://github.com/ahmadnassri/har-schema.git" },
		{ url: "https://github.com/ahmadnassri/har-schema", repoType: "github" },
	],
	[
		"cookie-signature",
		{
			type: "git",
			url: "https://github.com/visionmedia/node-cookie-signature.git",
		},
		{
			url: "https://github.com/visionmedia/node-cookie-signature",
			repoType: "github",
		},
	],
	[
		"pako",
		"nodeca/pako",
		{ url: "https://github.com/nodeca/pako", repoType: "github" },
	],
	[
		"type",
		"medikoo/type",
		{ url: "https://github.com/medikoo/type", repoType: "github" },
	],
	[
		"v8-compile-cache",
		{ type: "git", url: "https://github.com/zertosh/v8-compile-cache.git" },
		{ url: "https://github.com/zertosh/v8-compile-cache", repoType: "github" },
	],
	[
		"merge2",
		{ type: "git", url: "git@github.com:teambition/merge2.git" },
		{
			url: "https://github.com/teambition/merge2",
			repoType: "github",
		},
	],
	[
		"merge-descriptors",
		"sindresorhus/merge-descriptors",
		{
			url: "https://github.com/sindresorhus/merge-descriptors",
			repoType: "github",
		},
	],
	[
		"arr-union",
		"jonschlinkert/arr-union",
		{ url: "https://github.com/jonschlinkert/arr-union", repoType: "github" },
	],
	[
		"safe-regex",
		{ type: "git", url: "git://github.com/davisjam/safe-regex.git" },
		{ url: "https://github.com/davisjam/safe-regex", repoType: "github" },
	],
	[
		"regexpu-core",
		{ type: "git", url: "https://github.com/mathiasbynens/regexpu-core.git" },
		{
			url: "https://github.com/mathiasbynens/regexpu-core",
			repoType: "github",
		},
	],
	[
		"fastq",
		{ type: "git", url: "git+https://github.com/mcollina/fastq.git" },
		{ url: "https://github.com/mcollina/fastq", repoType: "github" },
	],
	[
		"cli-width",
		{ type: "git", url: "git@github.com:knownasilya/cli-width.git" },
		{
			url: "https://github.com/knownasilya/cli-width",
			repoType: "github",
		},
	],
	[
		"ret",
		{ type: "git", url: "git://github.com/fent/ret.js.git" },
		{ url: "https://github.com/fent/ret.js", repoType: "github" },
	],
	[
		"@babel/plugin-proposal-optional-chaining",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-optional-chaining",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/helper-create-class-features-plugin",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-create-class-features-plugin",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"natural-compare",
		"git://github.com/litejs/natural-compare-lite.git",
		{
			url: "https://github.com/litejs/natural-compare-lite",
			repoType: "github",
		},
	],
	[
		"@babel/helper-validator-option",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-helper-validator-option",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@typescript-eslint/experimental-utils",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/experimental-utils",
		},
		{
			url: "https://github.com/typescript-eslint/typescript-eslint",
			repoType: "github",
		},
	],
	[
		"side-channel",
		{ type: "git", url: "git+https://github.com/ljharb/side-channel.git" },
		{ url: "https://github.com/ljharb/side-channel", repoType: "github" },
	],
	[
		"is-negative-zero",
		{ type: "git", url: "git://github.com/inspect-js/is-negative-zero.git" },
		{
			url: "https://github.com/inspect-js/is-negative-zero",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-nullish-coalescing-operator",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-nullish-coalescing-operator",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/plugin-transform-modules-commonjs",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-modules-commonjs",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"util.promisify",
		{ type: "git", url: "git+https://github.com/ljharb/util.promisify.git" },
		{ url: "https://github.com/ljharb/util.promisify", repoType: "github" },
	],
	[
		"union-value",
		"jonschlinkert/union-value",
		{ url: "https://github.com/jonschlinkert/union-value", repoType: "github" },
	],
	[
		"regjsparser",
		{ type: "git", url: "git+ssh://git@github.com/jviereck/regjsparser.git" },
		{ url: "https://github.com/jviereck/regjsparser", repoType: "github" },
	],
	[
		"@babel/plugin-syntax-object-rest-spread",
		"https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-object-rest-spread",
		{
			url: "https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-object-rest-spread",
			repoType: "github",
		},
	],
	[
		"esquery",
		{ type: "git", url: "https://github.com/estools/esquery.git" },
		{ url: "https://github.com/estools/esquery", repoType: "github" },
	],
	[
		"neo-async",
		{ type: "git", url: "git@github.com:suguru03/neo-async.git" },
		{
			url: "https://github.com/suguru03/neo-async",
			repoType: "github",
		},
	],
	[
		"mixin-deep",
		"jonschlinkert/mixin-deep",
		{ url: "https://github.com/jonschlinkert/mixin-deep", repoType: "github" },
	],
	[
		"@babel/plugin-transform-parameters",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-parameters",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"resolve-url",
		"lydell/resolve-url",
		{ url: "https://github.com/lydell/resolve-url", repoType: "github" },
	],
	[
		"urix",
		"lydell/urix",
		{ url: "https://github.com/lydell/urix", repoType: "github" },
	],
	[
		"get-stdin",
		"sindresorhus/get-stdin",
		{ url: "https://github.com/sindresorhus/get-stdin", repoType: "github" },
	],
	[
		"nice-try",
		{ type: "git", url: "https://github.com/electerious/nice-try.git" },
		{ url: "https://github.com/electerious/nice-try", repoType: "github" },
	],
	[
		"use",
		"jonschlinkert/use",
		{ url: "https://github.com/jonschlinkert/use", repoType: "github" },
	],
	[
		"@babel/plugin-syntax-top-level-await",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-syntax-top-level-await",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"nanomatch",
		"micromatch/nanomatch",
		{ url: "https://github.com/micromatch/nanomatch", repoType: "github" },
	],
	[
		"split-string",
		"jonschlinkert/split-string",
		{
			url: "https://github.com/jonschlinkert/split-string",
			repoType: "github",
		},
	],
	[
		"core-js-compat",
		{
			type: "git",
			url: "git+https://github.com/zloirock/core-js.git",
			directory: "packages/core-js-compat",
		},
		{ url: "https://github.com/zloirock/core-js", repoType: "github" },
	],
	[
		"to-regex",
		"jonschlinkert/to-regex",
		{ url: "https://github.com/jonschlinkert/to-regex", repoType: "github" },
	],
	[
		"cache-base",
		"jonschlinkert/cache-base",
		{ url: "https://github.com/jonschlinkert/cache-base", repoType: "github" },
	],
	[
		"get-value",
		"jonschlinkert/get-value",
		{ url: "https://github.com/jonschlinkert/get-value", repoType: "github" },
	],
	[
		"snapdragon",
		"here-be/snapdragon",
		{ url: "https://github.com/here-be/snapdragon", repoType: "github" },
	],
	[
		"class-utils",
		"jonschlinkert/class-utils",
		{ url: "https://github.com/jonschlinkert/class-utils", repoType: "github" },
	],
	[
		"assign-symbols",
		"jonschlinkert/assign-symbols",
		{
			url: "https://github.com/jonschlinkert/assign-symbols",
			repoType: "github",
		},
	],
	[
		"snapdragon-util",
		"here-be/snapdragon-util",
		{ url: "https://github.com/here-be/snapdragon-util", repoType: "github" },
	],
	[
		"unset-value",
		"jonschlinkert/unset-value",
		{ url: "https://github.com/jonschlinkert/unset-value", repoType: "github" },
	],
	[
		"istanbul-reports",
		{
			type: "git",
			url: "git+ssh://git@github.com/istanbuljs/istanbuljs.git",
			directory: "packages/istanbul-reports",
		},
		{ url: "https://github.com/istanbuljs/istanbuljs", repoType: "github" },
	],
	[
		"@babel/plugin-transform-classes",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-classes",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"to-object-path",
		"jonschlinkert/to-object-path",
		{
			url: "https://github.com/jonschlinkert/to-object-path",
			repoType: "github",
		},
	],
	[
		"run-parallel",
		{ type: "git", url: "git://github.com/feross/run-parallel.git" },
		{ url: "https://github.com/feross/run-parallel", repoType: "github" },
	],
	[
		"object-visit",
		"jonschlinkert/object-visit",
		{
			url: "https://github.com/jonschlinkert/object-visit",
			repoType: "github",
		},
	],
	[
		"collection-visit",
		"jonschlinkert/collection-visit",
		{
			url: "https://github.com/jonschlinkert/collection-visit",
			repoType: "github",
		},
	],
	[
		"map-visit",
		"jonschlinkert/map-visit",
		{ url: "https://github.com/jonschlinkert/map-visit", repoType: "github" },
	],
	[
		"pascalcase",
		"jonschlinkert/pascalcase",
		{ url: "https://github.com/jonschlinkert/pascalcase", repoType: "github" },
	],
	[
		"prompts",
		"terkelg/prompts",
		{ url: "https://github.com/terkelg/prompts", repoType: "github" },
	],
	[
		"static-extend",
		"jonschlinkert/static-extend",
		{
			url: "https://github.com/jonschlinkert/static-extend",
			repoType: "github",
		},
	],
	[
		"copy-descriptor",
		"jonschlinkert/copy-descriptor",
		{
			url: "https://github.com/jonschlinkert/copy-descriptor",
			repoType: "github",
		},
	],
	[
		"object-copy",
		"jonschlinkert/object-copy",
		{ url: "https://github.com/jonschlinkert/object-copy", repoType: "github" },
	],
	[
		"@babel/plugin-transform-destructuring",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-destructuring",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@nodelib/fs.walk",
		"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.walk",
		{
			url: "https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.walk",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-proposal-numeric-separator",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-numeric-separator",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/plugin-transform-block-scoping",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-block-scoping",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"file-uri-to-path",
		{ type: "git", url: "git://github.com/TooTallNate/file-uri-to-path.git" },
		{
			url: "https://github.com/TooTallNate/file-uri-to-path",
			repoType: "github",
		},
	],
	[
		"remove-trailing-separator",
		{
			type: "git",
			url: "git+https://github.com/darsain/remove-trailing-separator.git",
		},
		{
			url: "https://github.com/darsain/remove-trailing-separator",
			repoType: "github",
		},
	],
	[
		"@nodelib/fs.scandir",
		"https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.scandir",
		{
			url: "https://github.com/nodelib/nodelib/tree/master/packages/fs/fs.scandir",
			repoType: "github",
		},
	],
	[
		"@babel/plugin-syntax-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-syntax-class-properties",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"clean-stack",
		"sindresorhus/clean-stack",
		{ url: "https://github.com/sindresorhus/clean-stack", repoType: "github" },
	],
	[
		"@babel/plugin-transform-for-of",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-for-of",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"@babel/plugin-transform-spread",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-spread",
		},
		{ url: "https://github.com/babel/babel", repoType: "github" },
	],
	[
		"moment",
		{ type: "git", url: "https://github.com/moment/moment.git" },
		{ url: "https://github.com/moment/moment", repoType: "github" },
	],
	[
		"@typescript-eslint/types",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/types",
		},
		{
			url: "https://github.com/typescript-eslint/typescript-eslint",
			repoType: "github",
		},
	],
	[
		"nanoid",
		"ai/nanoid",
		{ url: "https://github.com/ai/nanoid", repoType: "github" },
	],
	[
		"@jest/transform",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-transform",
		},
		{ url: "https://github.com/jestjs/jest", repoType: "github" },
	],
	[
		"functional-red-black-tree",
		{
			type: "git",
			url: "git://github.com/mikolalysenko/functional-red-black-tree.git",
		},
		{
			url: "https://github.com/mikolalysenko/functional-red-black-tree",
			repoType: "github",
		},
	],
	[
		"tsutils",
		{ type: "git", url: "https://github.com/ajafff/tsutils" },
		{ url: "https://github.com/ajafff/tsutils", repoType: "github" },
	],
];
