import type { PackageJson } from "../packageDeps";

export type PackageTestData = [
	string,
	PackageJson["repository"] | undefined,
	string | undefined,
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
		"https://github.com/gorhom/react-native-bottom-sheet",
	],
	[
		"@notifee/react-native",
		{ type: "git", url: "git+https://github.com/invertase/notifee.git" },
		"https://github.com/invertase/notifee",
	],
	[
		"@react-native-community/netinfo",
		{
			type: "git",
			url: "https://github.com/react-native-netinfo/react-native-netinfo.git",
		},
		"https://github.com/react-native-netinfo/react-native-netinfo",
	],
	[
		"@react-native-firebase/analytics",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/analytics",
		},
		"https://github.com/invertase/react-native-firebase/tree/main/packages/analytics",
	],
	[
		"@react-native-firebase/app",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/app",
		},
		"https://github.com/invertase/react-native-firebase/tree/main/packages/app",
	],
	[
		"@react-native-firebase/messaging",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/main/packages/messaging",
		},
		"https://github.com/invertase/react-native-firebase/tree/main/packages/messaging",
	],
	[
		"@react-native-menu/menu",
		"https://github.com/react-native-menu/menu",
		"https://github.com/react-native-menu/menu",
	],
	[
		"@react-navigation/native",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/native",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@react-navigation/stack",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/stack",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@reduxjs/toolkit",
		{ type: "git", url: "git+https://github.com/reduxjs/redux-toolkit.git" },
		"https://github.com/reduxjs/redux-toolkit",
	],
	[
		"@sendbird/chat",
		{
			type: "git",
			url: "https://github.com/sendbird/sendbird-chat-sdk-javascript",
		},
		"https://github.com/sendbird/sendbird-chat-sdk-javascript",
	],
	[
		"@sentry/react-native",
		"https://github.com/getsentry/sentry-react-native",
		"https://github.com/getsentry/sentry-react-native",
	],
	[
		"@tanstack/query-sync-storage-persister",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/query-sync-storage-persister",
		},
		"https://github.com/TanStack/query",
	],
	[
		"@tanstack/react-query",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/react-query",
		},
		"https://github.com/TanStack/query",
	],
	[
		"@tanstack/react-query-persist-client",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/react-query-persist-client",
		},
		"https://github.com/TanStack/query",
	],
	[
		"axios",
		{ type: "git", url: "https://github.com/axios/axios.git" },
		"https://github.com/axios/axios",
	],
	[
		"base-64",
		{ type: "git", url: "https://github.com/mathiasbynens/base64.git" },
		"https://github.com/mathiasbynens/base64",
	],
	[
		"configcat-js",
		{ type: "git", url: "https://github.com/configcat/js-sdk" },
		"https://github.com/configcat/js-sdk",
	],
	[
		"crypto-js",
		{ type: "git", url: "http://github.com/brix/crypto-js.git" },
		"https://github.com/brix/crypto-js",
	],
	[
		"dayjs",
		{ type: "git", url: "https://github.com/iamkun/dayjs.git" },
		"https://github.com/iamkun/dayjs",
	],
	[
		"expo",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-auth-session",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-auth-session",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-blur",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-blur",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-build-properties",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-build-properties",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-camera",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-camera",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-crypto",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-crypto",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-dev-client",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-dev-client",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-file-system",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-file-system",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-image",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-image-manipulator",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image-manipulator",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-image-picker",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-image-picker",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-keep-awake",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-keep-awake",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-splash-screen",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-splash-screen",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-web-browser",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-web-browser",
		},
		"https://github.com/expo/expo",
	],
	[
		"fast-text-encoding",
		"https://github.com/samthor/fast-text-encoding.git",
		"https://github.com/samthor/fast-text-encoding",
	],
	[
		"i18next",
		{ type: "git", url: "https://github.com/i18next/i18next.git" },
		"https://github.com/i18next/i18next",
	],
	[
		"immer",
		{ type: "git", url: "https://github.com/immerjs/immer.git" },
		"https://github.com/immerjs/immer",
	],
	[
		"intl-pluralrules",
		"eemeli/intl-pluralrules",
		"https://github.com/eemeli/intl-pluralrules",
	],
	[
		"jsonpath-plus",
		{ type: "git", url: "git://github.com/s3u/JSONPath.git" },
		"https://github.com/s3u/JSONPath",
	],
	[
		"jwt-decode",
		{ type: "git", url: "git://github.com/auth0/jwt-decode" },
		"https://github.com/auth0/jwt-decode",
	],
	["lodash.clonedeep", "lodash/lodash", "https://github.com/lodash/lodash"],
	["lodash.throttle", "lodash/lodash", "https://github.com/lodash/lodash"],
	[
		"moti",
		{
			type: "git",
			url: "https://github.com/nandorojo/moti.git",
			directory: "packages/moti",
		},
		"https://github.com/nandorojo/moti",
	],
	[
		"p-queue",
		"sindresorhus/p-queue",
		"https://github.com/sindresorhus/p-queue",
	],
	[
		"react",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react",
		},
		"https://github.com/facebook/react",
	],
	[
		"react-hook-form",
		{ type: "git", url: "https://github.com/react-hook-form/react-hook-form" },
		"https://github.com/react-hook-form/react-hook-form",
	],
	[
		"react-hot-toast",
		"timolins/react-hot-toast",
		"https://github.com/timolins/react-hot-toast",
	],
	[
		"react-i18next",
		{ type: "git", url: "https://github.com/i18next/react-i18next.git" },
		"https://github.com/i18next/react-i18next",
	],
	[
		"react-native",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/react-native",
		},
		"https://github.com/facebook/react-native",
	],
	[
		"react-native-autolink",
		{ type: "git", url: "https://github.com/joshswan/react-native-autolink" },
		"https://github.com/joshswan/react-native-autolink",
	],
	[
		"react-native-blob-util",
		{ url: "https://github.com/RonRadtke/react-native-blob-util" },
		"https://github.com/RonRadtke/react-native-blob-util",
	],
	[
		"react-native-calendars",
		{ type: "git", url: "git+https://github.com/wix/react-native-calendars" },
		"https://github.com/wix/react-native-calendars",
	],
	[
		"react-native-device-info",
		{
			type: "git",
			url: "https://github.com/react-native-device-info/react-native-device-info",
		},
		"https://github.com/react-native-device-info/react-native-device-info",
	],
	[
		"react-native-edge-to-edge",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-edge-to-edge.git",
		},
		"https://github.com/zoontek/react-native-edge-to-edge",
	],
	[
		"react-native-error-boundary",
		{
			type: "git",
			url: "git+https://github.com/carloscuesta/react-native-error-boundary.git",
		},
		"https://github.com/carloscuesta/react-native-error-boundary",
	],
	[
		"react-native-gesture-handler",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-gesture-handler.git",
		},
		"https://github.com/software-mansion/react-native-gesture-handler",
	],
	[
		"react-native-ios-context-menu",
		"https://github.com/dominicstop/react-native-ios-context-menu",
		"https://github.com/dominicstop/react-native-ios-context-menu",
	],
	[
		"react-native-ios-utilities",
		{
			type: "git",
			url: "git+https://github.com/dominicstop/react-native-ios-utilities.git",
		},
		"https://github.com/dominicstop/react-native-ios-utilities",
	],
	[
		"react-native-is-maestro",
		"https://github.com/jpudysz/react-native-is-maestro",
		"https://github.com/jpudysz/react-native-is-maestro",
	],
	[
		"react-native-keyboard-controller",
		"https://github.com/kirillzyusko/react-native-keyboard-controller",
		"https://github.com/kirillzyusko/react-native-keyboard-controller",
	],
	[
		"react-native-keychain",
		{ type: "git", url: "git://github.com/oblador/react-native-keychain.git" },
		"https://github.com/oblador/react-native-keychain",
	],
	[
		"react-native-localize",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-localize.git",
		},
		"https://github.com/zoontek/react-native-localize",
	],
	[
		"react-native-mmkv",
		{
			type: "git",
			url: "git+https://github.com/mrousavy/react-native-mmkv.git",
		},
		"https://github.com/mrousavy/react-native-mmkv",
	],
	[
		"react-native-nfc-manager",
		{
			type: "git",
			url: "https://github.com/whitedogg13/react-native-nfc-manager.git",
		},
		"https://github.com/whitedogg13/react-native-nfc-manager",
	],
	[
		"react-native-pdf",
		{ type: "git", url: "git+https://github.com/wonday/react-native-pdf.git" },
		"https://github.com/wonday/react-native-pdf",
	],
	[
		"react-native-permissions",
		{
			type: "git",
			url: "https://github.com/zoontek/react-native-permissions.git",
		},
		"https://github.com/zoontek/react-native-permissions",
	],
	[
		"react-native-reanimated",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-reanimated.git",
			directory: "packages/react-native-reanimated",
		},
		"https://github.com/software-mansion/react-native-reanimated",
	],
	[
		"react-native-reorderable-list",
		{
			type: "git",
			url: "git+https://github.com/omahili/react-native-reorderable-list.git",
		},
		"https://github.com/omahili/react-native-reorderable-list",
	],
	[
		"react-native-safe-area-context",
		{
			type: "git",
			url: "https://github.com/th3rdwave/react-native-safe-area-context.git",
		},
		"https://github.com/th3rdwave/react-native-safe-area-context",
	],
	[
		"react-native-screens",
		{
			type: "git",
			url: "git+https://github.com/software-mansion/react-native-screens.git",
		},
		"https://github.com/software-mansion/react-native-screens",
	],
	[
		"react-native-svg",
		{
			type: "git",
			url: "https://github.com/react-native-community/react-native-svg",
		},
		"https://github.com/react-native-community/react-native-svg",
	],
	[
		"react-native-url-polyfill",
		{
			type: "git",
			url: "https://github.com/charpeni/react-native-url-polyfill.git",
		},
		"https://github.com/charpeni/react-native-url-polyfill",
	],
	[
		"react-native-view-shot",
		{ type: "git", url: "https://github.com/gre/react-native-view-shot.git" },
		"https://github.com/gre/react-native-view-shot",
	],
	[
		"react-native-zoom-reanimated",
		{ type: "git", url: "react-native-zoom-reanimated" },
		"https://github.com/react-native-zoom-reanimated",
	],
	[
		"react-redux",
		"github:reduxjs/react-redux",
		"https://github.com/github:reduxjs/react-redux",
	],
	[
		"uuid",
		{ type: "git", url: "https://github.com/uuidjs/uuid.git" },
		"https://github.com/uuidjs/uuid",
	],
	[
		"zeego",
		"https://github.com/nandorojo/zeego",
		"https://github.com/nandorojo/zeego",
	],
	[
		"zod",
		{ type: "git", url: "git+https://github.com/colinhacks/zod.git" },
		"https://github.com/colinhacks/zod",
	],
	[
		"zustand",
		{ type: "git", url: "git+https://github.com/pmndrs/zustand.git" },
		"https://github.com/pmndrs/zustand",
	],
	[
		"@babel/core",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-core",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/preset-env",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-env",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/runtime",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-runtime",
		},
		"https://github.com/babel/babel",
	],
	[
		"@openapitools/openapi-generator-cli",
		{
			type: "git",
			url: "https://github.com/OpenAPITools/openapi-generator-cli.git",
		},
		"https://github.com/OpenAPITools/openapi-generator-cli",
	],
	[
		"@react-native/eslint-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/eslint-config-react-native",
		},
		"https://github.com/facebook/react-native",
	],
	[
		"@tanstack/eslint-plugin-query",
		{
			type: "git",
			url: "git+https://github.com/TanStack/query.git",
			directory: "packages/eslint-plugin-query",
		},
		"https://github.com/TanStack/query",
	],
	[
		"@testing-library/jest-native",
		{
			type: "git",
			url: "git+https://github.com/testing-library/jest-native.git",
		},
		"https://github.com/testing-library/jest-native",
	],
	[
		"@testing-library/react-native",
		{
			type: "git",
			url: "https://www.github.com/callstack/react-native-testing-library.git",
		},
		"https://github.com/callstack/react-native-testing-library",
	],
	[
		"@total-typescript/ts-reset",
		"https://github.com/total-typescript/ts-reset",
		"https://github.com/total-typescript/ts-reset",
	],
	[
		"@types/base-64",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/base-64",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/crypto-js",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/crypto-js",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/jest",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/jest",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/lodash.throttle",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.throttle",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-test-renderer",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-test-renderer",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/xdate",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/xdate",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@typescript-eslint/eslint-plugin",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/eslint-plugin",
		},
		"https://github.com/typescript-eslint/typescript-eslint",
	],
	[
		"@typescript-eslint/parser",
		{
			type: "git",
			url: "https://github.com/typescript-eslint/typescript-eslint.git",
			directory: "packages/parser",
		},
		"https://github.com/typescript-eslint/typescript-eslint",
	],
	[
		"babel-plugin-module-resolver",
		{
			type: "git",
			url: "https://github.com/tleunen/babel-plugin-module-resolver.git",
		},
		"https://github.com/tleunen/babel-plugin-module-resolver",
	],
	["eslint", "eslint/eslint", "https://github.com/eslint/eslint"],
	[
		"eslint-config-prettier",
		"prettier/eslint-config-prettier",
		"https://github.com/prettier/eslint-config-prettier",
	],
	[
		"eslint-plugin-jest",
		{
			type: "git",
			url: "git+https://github.com/jest-community/eslint-plugin-jest.git",
		},
		"https://github.com/jest-community/eslint-plugin-jest",
	],
	[
		"eslint-plugin-prettier",
		"https://github.com/prettier/eslint-plugin-prettier.git",
		"https://github.com/prettier/eslint-plugin-prettier",
	],
	[
		"husky",
		{ type: "git", url: "git+https://github.com/typicode/husky.git" },
		"https://github.com/typicode/husky",
	],
	[
		"jest",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest",
		},
		"https://github.com/jestjs/jest",
	],
	[
		"jest-expo",
		{
			type: "git",
			url: "git://github.com/expo/expo.git",
			directory: "packages/jest-expo",
		},
		"https://github.com/expo/expo",
	],
	[
		"license-checker-rseidelsohn",
		{
			type: "git",
			url: "https://github.com/RSeidelsohn/license-checker-rseidelsohn.git",
		},
		"https://github.com/RSeidelsohn/license-checker-rseidelsohn",
	],
	[
		"lint-staged",
		{ type: "git", url: "git+https://github.com/lint-staged/lint-staged.git" },
		"https://github.com/lint-staged/lint-staged",
	],
	[
		"msw",
		{ type: "git", url: "https://github.com/mswjs/msw" },
		"https://github.com/mswjs/msw",
	],
	[
		"patch-package",
		"github:ds300/patch-package",
		"https://github.com/github:ds300/patch-package",
	],
	["prettier", "prettier/prettier", "https://github.com/prettier/prettier"],
	[
		"prettier-plugin-organize-imports",
		"simonhaenisch/prettier-plugin-organize-imports",
		"https://github.com/simonhaenisch/prettier-plugin-organize-imports",
	],
	[
		"react-native-svg-transformer",
		"https://github.com/kristerkari/react-native-svg-transformer",
		"https://github.com/kristerkari/react-native-svg-transformer",
	],
	[
		"react-test-renderer",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-test-renderer",
		},
		"https://github.com/facebook/react",
	],
	[
		"reactotron-react-native",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-react-native",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-react-native",
	],
	[
		"reactotron-redux",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-redux",
		"https://github.com/infinitered/reactotron/tree/master/lib/reactotron-redux",
	],
	[
		"typescript",
		{ type: "git", url: "https://github.com/microsoft/TypeScript.git" },
		"https://github.com/microsoft/TypeScript",
	],
	[
		"@atproto/api",
		{
			type: "git",
			url: "https://github.com/bluesky-social/atproto",
			directory: "packages/api",
		},
		"https://github.com/bluesky-social/atproto",
	],
	[
		"@bitdrift/react-native",
		{ type: "git", url: "git+https://github.com/bitdriftlabs/capture-es.git" },
		"https://github.com/bitdriftlabs/capture-es",
	],
	[
		"@braintree/sanitize-url",
		{ type: "git", url: "git+https://github.com/braintree/sanitize-url.git" },
		"https://github.com/braintree/sanitize-url",
	],
	[
		"@discord/bottom-sheet",
		"https://github.com/discord/react-native-bottom-sheet",
		"https://github.com/discord/react-native-bottom-sheet",
	],
	[
		"@emoji-mart/react",
		{
			type: "git",
			url: "https://github.com/missive/emoji-mart",
			directory: "packages/emoji-mart-react",
		},
		"https://github.com/missive/emoji-mart",
	],
	[
		"@expo/html-elements",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/html-elements",
		},
		"https://github.com/expo/expo",
	],
	[
		"@expo/webpack-config",
		{
			type: "git",
			url: "https://github.com/expo/expo-cli.git",
			directory: "packages/webpack-config",
		},
		"https://github.com/expo/expo-cli",
	],
	[
		"@floating-ui/dom",
		{
			type: "git",
			url: "https://github.com/floating-ui/floating-ui.git",
			directory: "packages/dom",
		},
		"https://github.com/floating-ui/floating-ui",
	],
	[
		"@floating-ui/react-dom",
		{
			type: "git",
			url: "https://github.com/floating-ui/floating-ui.git",
			directory: "packages/react-dom",
		},
		"https://github.com/floating-ui/floating-ui",
	],
	[
		"@formatjs/intl-locale",
		{ type: "git", url: "git+https://github.com/formatjs/formatjs.git" },
		"https://github.com/formatjs/formatjs",
	],
	[
		"@formatjs/intl-numberformat",
		{ type: "git", url: "git+https://github.com/formatjs/formatjs.git" },
		"https://github.com/formatjs/formatjs",
	],
	[
		"@formatjs/intl-pluralrules",
		{ type: "git", url: "git+https://github.com/formatjs/formatjs.git" },
		"https://github.com/formatjs/formatjs",
	],
	[
		"@fortawesome/fontawesome-svg-core",
		{ type: "git", url: "https://github.com/FortAwesome/Font-Awesome" },
		"https://github.com/FortAwesome/Font-Awesome",
	],
	[
		"@fortawesome/free-regular-svg-icons",
		{ type: "git", url: "https://github.com/FortAwesome/Font-Awesome" },
		"https://github.com/FortAwesome/Font-Awesome",
	],
	[
		"@fortawesome/free-solid-svg-icons",
		{ type: "git", url: "https://github.com/FortAwesome/Font-Awesome" },
		"https://github.com/FortAwesome/Font-Awesome",
	],
	[
		"@fortawesome/react-native-fontawesome",
		{
			type: "git",
			url: "https://github.com/FortAwesome/react-native-fontawesome.git",
		},
		"https://github.com/FortAwesome/react-native-fontawesome",
	],
	[
		"@haileyok/bluesky-video",
		"https://github.com/bluesky-social/bluesky-video",
		"https://github.com/bluesky-social/bluesky-video",
	],
	[
		"@ipld/dag-cbor",
		{ type: "git", url: "git+https://github.com/ipld/js-dag-cbor.git" },
		"https://github.com/ipld/js-dag-cbor",
	],
	[
		"@lingui/react",
		{ type: "git", url: "https://github.com/lingui/js-lingui.git" },
		"https://github.com/lingui/js-lingui",
	],
	[
		"@mattermost/react-native-paste-input",
		"https://github.com/mattermost/react-native-paste-input",
		"https://github.com/mattermost/react-native-paste-input",
	],
	[
		"@miblanchard/react-native-slider",
		{ type: "git", url: "git@github.com:miblanchard/react-native-slider.git" },
		"https://github.com/git@github.com:miblanchard/react-native-slider.git",
	],
	[
		"@mozzius/expo-dynamic-app-icon",
		"https://github.com/mozzius/expo-dynamic-app-icon",
		"https://github.com/mozzius/expo-dynamic-app-icon",
	],
	[
		"@radix-ui/react-dismissable-layer",
		{ type: "git", url: "git+https://github.com/radix-ui/primitives.git" },
		"https://github.com/radix-ui/primitives",
	],
	[
		"@radix-ui/react-dropdown-menu",
		{ type: "git", url: "git+https://github.com/radix-ui/primitives.git" },
		"https://github.com/radix-ui/primitives",
	],
	[
		"@radix-ui/react-focus-guards",
		{ type: "git", url: "git+https://github.com/radix-ui/primitives.git" },
		"https://github.com/radix-ui/primitives",
	],
	[
		"@radix-ui/react-focus-scope",
		{ type: "git", url: "git+https://github.com/radix-ui/primitives.git" },
		"https://github.com/radix-ui/primitives",
	],
	[
		"@react-native-async-storage/async-storage",
		{
			type: "git",
			url: "https://github.com/react-native-async-storage/async-storage.git",
			directory: "packages/default-storage-backend",
		},
		"https://github.com/react-native-async-storage/async-storage",
	],
	[
		"@react-native-picker/picker",
		{ type: "git", url: "https://github.com/react-native-picker/picker.git" },
		"https://github.com/react-native-picker/picker",
	],
	[
		"@react-navigation/bottom-tabs",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/bottom-tabs",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@react-navigation/drawer",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/drawer",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@react-navigation/native-stack",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/native-stack",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@tanstack/query-async-storage-persister",
		{
			type: "git",
			url: "https://github.com/TanStack/query.git",
			directory: "packages/query-async-storage-persister",
		},
		"https://github.com/TanStack/query",
	],
	[
		"@tiptap/core",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/core",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-document",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-document",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-hard-break",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-hard-break",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-history",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-history",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-mention",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-mention",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-paragraph",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-paragraph",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-placeholder",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-placeholder",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/extension-text",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/extension-text",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/html",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/html",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/pm",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/pm",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/react",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/react",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@tiptap/suggestion",
		{
			type: "git",
			url: "https://github.com/ueberdosis/tiptap",
			directory: "packages/suggestion",
		},
		"https://github.com/ueberdosis/tiptap",
	],
	[
		"@types/invariant",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/invariant",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/node",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/node",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@zxing/text-encoding",
		{ type: "git", url: "https://github.com/zxing-js/text-encoding.git" },
		"https://github.com/zxing-js/text-encoding",
	],
	[
		"array.prototype.findlast",
		{
			type: "git",
			url: "git+https://github.com/es-shims/Array.prototype.findLast.git",
		},
		"https://github.com/es-shims/Array.prototype.findLast",
	],
	[
		"await-lock",
		{ type: "git", url: "https://github.com/ide/await-lock.git" },
		"https://github.com/ide/await-lock",
	],
	[
		"babel-plugin-transform-remove-console",
		"https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console",
		"https://github.com/babel/minify/tree/master/packages/babel-plugin-transform-remove-console",
	],
	[
		"base64-js",
		{ type: "git", url: "git://github.com/beatgammit/base64-js.git" },
		"https://github.com/beatgammit/base64-js",
	],
	["bcp-47", "wooorm/bcp-47", "https://github.com/wooorm/bcp-47"],
	[
		"bcp-47-match",
		"wooorm/bcp-47-match",
		"https://github.com/wooorm/bcp-47-match",
	],
	[
		"date-fns",
		"https://github.com/date-fns/date-fns",
		"https://github.com/date-fns/date-fns",
	],
	[
		"deprecated-react-native-prop-types",
		"github:facebook/react-native-deprecated-modules",
		"https://github.com/github:facebook/react-native-deprecated-modules",
	],
	[
		"email-validator",
		{ type: "git", url: "http://github.com/manishsaraan/email-validator.git" },
		"https://github.com/manishsaraan/email-validator",
	],
	[
		"emoji-mart",
		{
			type: "git",
			url: "https://github.com/missive/emoji-mart",
			directory: "packages/emoji-mart",
		},
		"https://github.com/missive/emoji-mart",
	],
	[
		"emoji-regex",
		{ type: "git", url: "https://github.com/mathiasbynens/emoji-regex.git" },
		"https://github.com/mathiasbynens/emoji-regex",
	],
	[
		"eventemitter3",
		{ type: "git", url: "git://github.com/primus/eventemitter3.git" },
		"https://github.com/primus/eventemitter3",
	],
	[
		"expo-application",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-application",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-clipboard",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-clipboard",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-device",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-device",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-font",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-font",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-haptics",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-haptics",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-linear-gradient",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-linear-gradient",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-linking",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-linking",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-localization",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-localization",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-media-library",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-media-library",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-navigation-bar",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-navigation-bar",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-notifications",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-notifications",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-screen-orientation",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-screen-orientation",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-sharing",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-sharing",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-status-bar",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-status-bar",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-system-ui",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-system-ui",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-task-manager",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-task-manager",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-updates",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-updates",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-video",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-video",
		},
		"https://github.com/expo/expo",
	],
	["history", "remix-run/history", "https://github.com/remix-run/history"],
	[
		"hls.js",
		{ type: "git", url: "https://github.com/video-dev/hls.js" },
		"https://github.com/video-dev/hls.js",
	],
	[
		"js-sha256",
		{ type: "git", url: "https://github.com/emn178/js-sha256.git" },
		"https://github.com/emn178/js-sha256",
	],
	[
		"lande",
		"github:fabiospampinato/lande",
		"https://github.com/github:fabiospampinato/lande",
	],
	["lodash.chunk", "lodash/lodash", "https://github.com/lodash/lodash"],
	["lodash.debounce", "lodash/lodash", "https://github.com/lodash/lodash"],
	["lodash.isequal", "lodash/lodash", "https://github.com/lodash/lodash"],
	["lodash.shuffle", "lodash/lodash", "https://github.com/lodash/lodash"],
	[
		"multiformats",
		{
			type: "git",
			url: "git+https://github.com/multiformats/js-multiformats.git",
		},
		"https://github.com/multiformats/js-multiformats",
	],
	["nanoid", "ai/nanoid", "https://github.com/ai/nanoid"],
	[
		"normalize-url",
		"sindresorhus/normalize-url",
		"https://github.com/sindresorhus/normalize-url",
	],
	[
		"postinstall-postinstall",
		"https://github.com/ds300/postinstall-postinstall",
		"https://github.com/ds300/postinstall-postinstall",
	],
	[
		"psl",
		{ type: "git", url: "git@github.com:lupomontero/psl.git" },
		"https://github.com/git@github.com:lupomontero/psl.git",
	],
	[
		"react-compiler-runtime",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/react-compiler-runtime",
		},
		"https://github.com/facebook/react",
	],
	[
		"react-dom",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-dom",
		},
		"https://github.com/facebook/react",
	],
	[
		"react-image-crop",
		"https://github.com/sekoyo/react-image-crop",
		"https://github.com/sekoyo/react-image-crop",
	],
	[
		"react-keyed-flatten-children",
		{
			type: "git",
			url: "https://github.com/grrowl/react-keyed-flatten-children.git",
		},
		"https://github.com/grrowl/react-keyed-flatten-children",
	],
	[
		"react-native-compressor",
		"https://github.com/numandev1/react-native-compressor",
		"https://github.com/numandev1/react-native-compressor",
	],
	[
		"react-native-date-picker",
		{
			type: "git",
			url: "git@github.com:henninghall/react-native-date-picker.git",
		},
		"https://github.com/git@github.com:henninghall/react-native-date-picker.git",
	],
	[
		"react-native-drawer-layout",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/react-native-drawer-layout",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"react-native-emoji-popup",
		{
			type: "git",
			url: "git+https://github.com/okwasniewski/react-native-emoji-popup.git",
		},
		"https://github.com/okwasniewski/react-native-emoji-popup",
	],
	[
		"react-native-get-random-values",
		"LinusU/react-native-get-random-values",
		"https://github.com/LinusU/react-native-get-random-values",
	],
	[
		"react-native-image-crop-picker",
		{
			type: "git",
			url: "git+https://github.com/ivpusic/react-native-image-crop-picker.git",
		},
		"https://github.com/ivpusic/react-native-image-crop-picker",
	],
	[
		"react-native-pager-view",
		"https://github.com/callstack/react-native-pager-view",
		"https://github.com/callstack/react-native-pager-view",
	],
	[
		"react-native-picker-select",
		{
			type: "git",
			url: "https://github.com/lawnstarter/react-native-picker-select.git",
		},
		"https://github.com/lawnstarter/react-native-picker-select",
	],
	[
		"react-native-progress",
		{ type: "git", url: "git://github.com/oblador/react-native-progress.git" },
		"https://github.com/oblador/react-native-progress",
	],
	[
		"react-native-qrcode-styled",
		"https://github.com/tokkozhin/react-native-qrcode-styled",
		"https://github.com/tokkozhin/react-native-qrcode-styled",
	],
	[
		"react-native-root-siblings",
		{
			type: "git",
			url: "git@github.com:magicismight/react-native-root-siblings.git",
		},
		"https://github.com/git@github.com:magicismight/react-native-root-siblings.git",
	],
	[
		"react-native-uitextview",
		{
			type: "git",
			url: "git+https://github.com/bluesky-social/react-native-uitextview.git",
		},
		"https://github.com/bluesky-social/react-native-uitextview",
	],
	[
		"react-native-uuid",
		{
			type: "git",
			url: "git+https://github.com/eugenehp/react-native-uuid.git",
		},
		"https://github.com/eugenehp/react-native-uuid",
	],
	[
		"react-native-vision-camera",
		"https://github.com/mrousavy/react-native-vision-camera",
		"https://github.com/mrousavy/react-native-vision-camera",
	],
	[
		"react-native-web",
		{ type: "git", url: "git://github.com/necolas/react-native-web.git" },
		"https://github.com/necolas/react-native-web",
	],
	[
		"react-native-web-webview",
		{
			type: "git",
			url: "git@github.com:react-native-web-community/react-native-web-webview.git",
		},
		"https://github.com/git@github.com:react-native-web-community/react-native-web-webview.git",
	],
	[
		"react-native-webview",
		{
			type: "git",
			url: "https://github.com/react-native-webview/react-native-webview.git",
		},
		"https://github.com/react-native-webview/react-native-webview",
	],
	[
		"react-remove-scroll-bar",
		"https://github.com/theKashey/react-remove-scroll-bar",
		"https://github.com/theKashey/react-remove-scroll-bar",
	],
	[
		"react-responsive",
		{ type: "git", url: "git://github.com/contra/react-responsive.git" },
		"https://github.com/contra/react-responsive",
	],
	[
		"react-textarea-autosize",
		{
			type: "git",
			url: "git+https://github.com/Andarist/react-textarea-autosize.git",
		},
		"https://github.com/Andarist/react-textarea-autosize",
	],
	[
		"rn-fetch-blob",
		{ url: "https://github.com/joltup/rn-fetch-blob.git" },
		"https://github.com/joltup/rn-fetch-blob",
	],
	[
		"statsig-react-native-expo",
		{
			type: "git",
			url: "git+https://github.com/statsig-io/react-native-expo.git",
		},
		"https://github.com/statsig-io/react-native-expo",
	],
	[
		"tippy.js",
		{ type: "git", url: "git+https://github.com/atomiks/tippyjs.git" },
		"https://github.com/atomiks/tippyjs",
	],
	[
		"tlds",
		"https://github.com/stephenmathieson/node-tlds.git",
		"https://github.com/stephenmathieson/node-tlds",
	],
	[
		"tldts",
		{ type: "git", url: "git+ssh://git@github.com/remusao/tldts.git" },
		"https://github.com/remusao/tldts",
	],
	[
		"@atproto/dev-env",
		{
			type: "git",
			url: "https://github.com/bluesky-social/atproto",
			directory: "packages/dev-env",
		},
		"https://github.com/bluesky-social/atproto",
	],
	[
		"@expo/config-plugins",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/@expo/config-plugins",
		},
		"https://github.com/expo/expo",
	],
	["@lingui/cli", "lingui/js-lingui", "https://github.com/lingui/js-lingui"],
	[
		"@lingui/macro",
		{ type: "git", url: "https://github.com/lingui/js-lingui.git" },
		"https://github.com/lingui/js-lingui",
	],
	[
		"@pmmmwh/react-refresh-webpack-plugin",
		{
			type: "git",
			url: "git+https://github.com/pmmmwh/react-refresh-webpack-plugin.git",
		},
		"https://github.com/pmmmwh/react-refresh-webpack-plugin",
	],
	[
		"@react-native/typescript-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/typescript-config",
		},
		"https://github.com/facebook/react-native",
	],
	[
		"@sentry/webpack-plugin",
		"git://github.com/getsentry/sentry-javascript-bundler-plugins.git",
		"https://github.com/getsentry/sentry-javascript-bundler-plugins",
	],
	[
		"@types/lodash.chunk",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.chunk",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/lodash.debounce",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.debounce",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/lodash.isequal",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.isequal",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/lodash.shuffle",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash.shuffle",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/psl",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/psl",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-dom",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-dom",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-responsive",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-responsive",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"babel-jest",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/babel-jest",
		},
		"https://github.com/jestjs/jest",
	],
	[
		"babel-plugin-macros",
		{ type: "git", url: "https://github.com/kentcdodds/babel-plugin-macros" },
		"https://github.com/kentcdodds/babel-plugin-macros",
	],
	[
		"babel-plugin-react-compiler",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/babel-plugin-react-compiler",
		},
		"https://github.com/facebook/react",
	],
	[
		"babel-preset-expo",
		{
			type: "git",
			url: "git+https://github.com/expo/expo.git",
			directory: "packages/babel-preset-expo",
		},
		"https://github.com/expo/expo",
	],
	[
		"eslint-plugin-ft-flow",
		{ type: "git", url: "https://github.com/flow-typed/eslint-plugin-ft-flow" },
		"https://github.com/flow-typed/eslint-plugin-ft-flow",
	],
	[
		"eslint-plugin-import",
		{ type: "git", url: "https://github.com/import-js/eslint-plugin-import" },
		"https://github.com/import-js/eslint-plugin-import",
	],
	[
		"eslint-plugin-lingui",
		"lingui/eslint-plugin",
		"https://github.com/lingui/eslint-plugin",
	],
	[
		"eslint-plugin-react",
		{ type: "git", url: "https://github.com/jsx-eslint/eslint-plugin-react" },
		"https://github.com/jsx-eslint/eslint-plugin-react",
	],
	[
		"eslint-plugin-react-compiler",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/eslint-plugin-react-compiler",
		},
		"https://github.com/facebook/react",
	],
	[
		"eslint-plugin-react-native-a11y",
		{
			type: "git",
			url: "https://github.com/FormidableLabs/eslint-plugin-react-native-a11y",
		},
		"https://github.com/FormidableLabs/eslint-plugin-react-native-a11y",
	],
	[
		"eslint-plugin-simple-import-sort",
		"lydell/eslint-plugin-simple-import-sort",
		"https://github.com/lydell/eslint-plugin-simple-import-sort",
	],
	[
		"file-loader",
		"webpack-contrib/file-loader",
		"https://github.com/webpack-contrib/file-loader",
	],
	[
		"is-ci",
		{ type: "git", url: "https://github.com/watson/is-ci.git" },
		"https://github.com/watson/is-ci",
	],
	[
		"jest-junit",
		"https://github.com/jest-community/jest-junit",
		"https://github.com/jest-community/jest-junit",
	],
	[
		"lockfile-lint",
		{
			type: "git",
			url: "https://github.com/lirantal/lockfile-lint.git",
			directory: "packages/lockfile-lint",
		},
		"https://github.com/lirantal/lockfile-lint",
	],
	[
		"metro-react-native-babel-preset",
		{ type: "git", url: "git@github.com:facebook/metro.git" },
		"https://github.com/git@github.com:facebook/metro.git",
	],
	[
		"react-native-dotenv",
		"github:goatandsheep/react-native-dotenv",
		"https://github.com/github:goatandsheep/react-native-dotenv",
	],
	[
		"react-refresh",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react",
		},
		"https://github.com/facebook/react",
	],
	[
		"svgo",
		{ type: "git", url: "git://github.com/svg/svgo.git" },
		"https://github.com/svg/svgo",
	],
	[
		"ts-node",
		{ type: "git", url: "git://github.com/TypeStrong/ts-node.git" },
		"https://github.com/TypeStrong/ts-node",
	],
	[
		"webpack-bundle-analyzer",
		{
			type: "git",
			url: "git+https://github.com/webpack-contrib/webpack-bundle-analyzer.git",
		},
		"https://github.com/webpack-contrib/webpack-bundle-analyzer",
	],
	[
		"@dotlottie/react-player",
		"https://github.com/dotlottie/player-component.git",
		"https://github.com/dotlottie/player-component",
	],
	[
		"@expensify/react-native-live-markdown",
		{
			type: "git",
			url: "git+https://github.com/Expensify/react-native-live-markdown.git",
		},
		"https://github.com/Expensify/react-native-live-markdown",
	],
	[
		"@expo/metro-runtime",
		{ type: "git", url: "https://github.com/expo/expo.git" },
		"https://github.com/expo/expo",
	],
	[
		"@firebase/app",
		{
			directory: "packages/app",
			type: "git",
			url: "git+https://github.com/firebase/firebase-js-sdk.git",
		},
		"https://github.com/firebase/firebase-js-sdk",
	],
	[
		"@firebase/performance",
		{
			directory: "packages/performance",
			type: "git",
			url: "git+https://github.com/firebase/firebase-js-sdk.git",
		},
		"https://github.com/firebase/firebase-js-sdk",
	],
	[
		"@formatjs/intl-datetimeformat",
		{ type: "git", url: "git+https://github.com/formatjs/formatjs.git" },
		"https://github.com/formatjs/formatjs",
	],
	[
		"@formatjs/intl-listformat",
		{ type: "git", url: "git@github.com:formatjs/formatjs.git" },
		"https://github.com/git@github.com:formatjs/formatjs.git",
	],
	[
		"@fullstory/browser",
		"git://github.com/fullstorydev/fullstory-browser-sdk.git",
		"https://github.com/fullstorydev/fullstory-browser-sdk",
	],
	[
		"@fullstory/react-native",
		"git://github.com/fullstorydev/fullstory-react-native.git",
		"https://github.com/fullstorydev/fullstory-react-native",
	],
	[
		"@gorhom/portal",
		"https://github.com/gorhom/react-native-portal",
		"https://github.com/gorhom/react-native-portal",
	],
	[
		"@invertase/react-native-apple-authentication",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-apple-authentication",
		},
		"https://github.com/invertase/react-native-apple-authentication",
	],
	[
		"@onfido/react-native-sdk",
		{
			type: "git",
			url: "git+https://github.com/onfido/react-native-sdk.git",
			baseUrl: "https://github.com/onfido/react-native-sdk",
		},
		"https://github.com/onfido/react-native-sdk",
	],
	[
		"@pusher/pusher-websocket-react-native",
		"https://github.com/pusher/pusher-websocket-react-native",
		"https://github.com/pusher/pusher-websocket-react-native",
	],
	[
		"@react-native-camera-roll/camera-roll",
		{
			type: "git",
			url: "https://github.com/react-native-cameraroll/react-native-cameraroll.git",
		},
		"https://github.com/react-native-cameraroll/react-native-cameraroll",
	],
	[
		"@react-native-clipboard/clipboard",
		{
			type: "git",
			url: "git+https://github.com/react-native-clipboard/clipboard.git",
		},
		"https://github.com/react-native-clipboard/clipboard",
	],
	[
		"@react-native-community/geolocation",
		{
			type: "git",
			url: "https://github.com/michalchudziak/react-native-geolocation.git",
		},
		"https://github.com/michalchudziak/react-native-geolocation",
	],
	[
		"@react-native-firebase/crashlytics",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/crashlytics",
		},
		"https://github.com/invertase/react-native-firebase/tree/master/packages/crashlytics",
	],
	[
		"@react-native-firebase/perf",
		{
			type: "git",
			url: "https://github.com/invertase/react-native-firebase/tree/master/packages/perf",
		},
		"https://github.com/invertase/react-native-firebase/tree/master/packages/perf",
	],
	[
		"@react-native-google-signin/google-signin",
		"https://github.com/react-native-google-signin/google-signin",
		"https://github.com/react-native-google-signin/google-signin",
	],
	[
		"@react-navigation/material-top-tabs",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/material-top-tabs",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@react-ng/bounds-observer",
		{ type: "git", url: "https://github.com/react-ng/bounds-observer.git" },
		"https://github.com/react-ng/bounds-observer",
	],
	[
		"@rnmapbox/maps",
		{ type: "git", url: "https://github.com/rnmapbox/maps" },
		"https://github.com/rnmapbox/maps",
	],
	[
		"@shopify/flash-list",
		{ type: "git", url: "https://github.com/Shopify/flash-list" },
		"https://github.com/Shopify/flash-list",
	],
	[
		"@types/pako",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/pako",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@ua/react-native-airship",
		"https://github.com/urbanairship/react-native-module",
		"https://github.com/urbanairship/react-native-module",
	],
	[
		"awesome-phonenumber",
		{ type: "git", url: "https://github.com/grantila/awesome-phonenumber.git" },
		"https://github.com/grantila/awesome-phonenumber",
	],
	[
		"babel-polyfill",
		"https://github.com/babel/babel/tree/master/packages/babel-polyfill",
		"https://github.com/babel/babel/tree/master/packages/babel-polyfill",
	],
	[
		"canvas-size",
		{
			type: "git",
			url: "git+https://jhildenbiddle@github.com/jhildenbiddle/canvas-size.git",
		},
		"https://jhildenbiddle@github.com/jhildenbiddle/canvas-size",
	],
	[
		"core-js",
		{
			type: "git",
			url: "https://github.com/zloirock/core-js.git",
			directory: "packages/core-js",
		},
		"https://github.com/zloirock/core-js",
	],
	[
		"date-fns-tz",
		"https://github.com/marnusw/date-fns-tz",
		"https://github.com/marnusw/date-fns-tz",
	],
	[
		"dom-serializer",
		{ type: "git", url: "git://github.com/cheeriojs/dom-renderer.git" },
		"https://github.com/cheeriojs/dom-renderer",
	],
	[
		"domhandler",
		{ type: "git", url: "git://github.com/fb55/domhandler.git" },
		"https://github.com/fb55/domhandler",
	],
	[
		"expensify-common",
		{ type: "git", url: "git+ssh://git@github.com/Expensify/JS-Libs.git" },
		"https://github.com/Expensify/JS-Libs",
	],
	[
		"expo-asset",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-asset",
		},
		"https://github.com/expo/expo",
	],
	[
		"expo-av",
		{
			type: "git",
			url: "https://github.com/expo/expo.git",
			directory: "packages/expo-av",
		},
		"https://github.com/expo/expo",
	],
	[
		"fast-equals",
		{ type: "git", url: "git+https://github.com/planttheidea/fast-equals.git" },
		"https://github.com/planttheidea/fast-equals",
	],
	[
		"focus-trap-react",
		{
			type: "git",
			url: "git+https://github.com/focus-trap/focus-trap-react.git",
		},
		"https://github.com/focus-trap/focus-trap-react",
	],
	[
		"howler",
		{ type: "git", url: "git://github.com/goldfire/howler.js.git" },
		"https://github.com/goldfire/howler.js",
	],
	[
		"htmlparser2",
		{ type: "git", url: "git://github.com/fb55/htmlparser2.git" },
		"https://github.com/fb55/htmlparser2",
	],
	[
		"idb-keyval",
		{ type: "git", url: "git+https://github.com/jakearchibald/idb-keyval.git" },
		"https://github.com/jakearchibald/idb-keyval",
	],
	["lodash-es", "lodash/lodash", "https://github.com/lodash/lodash"],
	[
		"lottie-react-native",
		"https://github.com/react-native-community/lottie-react-native",
		"https://github.com/react-native-community/lottie-react-native",
	],
	[
		"mapbox-gl",
		{ type: "git", url: "git://github.com/mapbox/mapbox-gl-js.git" },
		"https://github.com/mapbox/mapbox-gl-js",
	],
	[
		"onfido-sdk-ui",
		{ type: "git", url: "https://github.com/onfido/onfido-sdk-ui.git" },
		"https://github.com/onfido/onfido-sdk-ui",
	],
	["pako", "nodeca/pako", "https://github.com/nodeca/pako"],
	[
		"process",
		{ type: "git", url: "git://github.com/shtylman/node-process.git" },
		"https://github.com/shtylman/node-process",
	],
	[
		"pusher-js",
		{ type: "git", url: "https://github.com/pusher/pusher-js.git" },
		"https://github.com/pusher/pusher-js",
	],
	[
		"react-beautiful-dnd",
		{
			type: "git",
			url: "https://github.com/atlassian/react-beautiful-dnd.git",
		},
		"https://github.com/atlassian/react-beautiful-dnd",
	],
	[
		"react-collapse",
		{ type: "git", url: "https://github.com/nkbt/react-collapse.git" },
		"https://github.com/nkbt/react-collapse",
	],
	[
		"react-content-loader",
		{ type: "git", url: "https://github.com/danilowoz/react-content-loader" },
		"https://github.com/danilowoz/react-content-loader",
	],
	[
		"react-error-boundary",
		{ type: "git", url: "https://github.com/bvaughn/react-error-boundary" },
		"https://github.com/bvaughn/react-error-boundary",
	],
	[
		"react-fast-pdf",
		{ type: "git", url: "git+https://github.com/Expensify/react-fast-pdf.git" },
		"https://github.com/Expensify/react-fast-pdf",
	],
	[
		"react-map-gl",
		{ type: "git", url: "https://github.com/visgl/react-map-gl.git" },
		"https://github.com/visgl/react-map-gl",
	],
	[
		"react-native-advanced-input-mask",
		{
			type: "git",
			url: "git+https://github.com/IvanIhnatsiuk/react-native-advanced-input-mask.git",
		},
		"https://github.com/IvanIhnatsiuk/react-native-advanced-input-mask",
	],
	[
		"react-native-android-location-enabler",
		"https://github.com/Richou/react-native-android-location-enabler",
		"https://github.com/Richou/react-native-android-location-enabler",
	],
	[
		"react-native-app-logs",
		{
			type: "git",
			url: "git+https://github.com/kirillzyusko/react-native-app-logs.git",
		},
		"https://github.com/kirillzyusko/react-native-app-logs",
	],
	[
		"react-native-collapsible",
		{
			type: "git",
			url: "https://oblador@github.com/oblador/react-native-collapsible.git",
		},
		"https://oblador@github.com/oblador/react-native-collapsible",
	],
	[
		"react-native-config",
		{ type: "git", url: "https://github.com/luggit/react-native-config" },
		"https://github.com/luggit/react-native-config",
	],
	[
		"react-native-document-picker",
		"https://github.com/react-native-documents/document-picker",
		"https://github.com/react-native-documents/document-picker",
	],
	[
		"react-native-draggable-flatlist",
		{
			type: "git",
			url: "git+https://github.com/computerjazz/react-native-draggable-flatlist.git",
		},
		"https://github.com/computerjazz/react-native-draggable-flatlist",
	],
	[
		"react-native-fs",
		{ type: "git", url: "git@github.com:itinance/react-native-fs.git" },
		"https://github.com/git@github.com:itinance/react-native-fs.git",
	],
	[
		"react-native-google-places-autocomplete",
		{
			type: "git",
			url: "git+https://github.com/FaridSafi/react-native-google-places-autocomplete.git",
		},
		"https://github.com/FaridSafi/react-native-google-places-autocomplete",
	],
	[
		"react-native-haptic-feedback",
		{
			type: "git",
			url: "https://github.com/mkuczera/react-native-haptic-feedback.git",
		},
		"https://github.com/mkuczera/react-native-haptic-feedback",
	],
	[
		"react-native-image-picker",
		{
			type: "git",
			url: "https://github.com/react-native-image-picker/react-native-image-picker.git",
		},
		"https://github.com/react-native-image-picker/react-native-image-picker",
	],
	[
		"react-native-image-size",
		{
			type: "git",
			url: "git+https://github.com/eXist-FraGGer/react-native-image-size.git",
		},
		"https://github.com/eXist-FraGGer/react-native-image-size",
	],
	[
		"react-native-key-command",
		"http://github.com/expensify/react-native-key-command",
		"https://github.com/expensify/react-native-key-command",
	],
	[
		"react-native-launch-arguments",
		{
			type: "git",
			url: "git+https://github.com/iamolegga/react-native-launch-arguments.git",
			baseUrl: "https://github.com/iamolegga/react-native-launch-arguments",
		},
		"https://github.com/iamolegga/react-native-launch-arguments",
	],
	[
		"react-native-modal",
		{
			type: "git",
			url: "https://github.com/react-native-community/react-native-modal",
		},
		"https://github.com/react-native-community/react-native-modal",
	],
	[
		"react-native-onyx",
		{ type: "git", url: "https://github.com/Expensify/react-native-onyx.git" },
		"https://github.com/Expensify/react-native-onyx",
	],
	[
		"react-native-performance",
		{
			type: "git",
			url: "https://github.com/oblador/react-native-performance.git",
			directory: "packages/react-native-performance",
		},
		"https://github.com/oblador/react-native-performance",
	],
	[
		"react-native-qrcode-svg",
		{
			type: "git",
			url: "git+ssh://git@github.com/awesomejerry/react-native-qrcode-svg.git",
		},
		"https://github.com/awesomejerry/react-native-qrcode-svg",
	],
	[
		"react-native-quick-sqlite",
		"https://github.com/margelo/react-native-quick-sqlite",
		"https://github.com/margelo/react-native-quick-sqlite",
	],
	[
		"react-native-release-profiler",
		"https://github.com/margelo/react-native-release-profiler",
		"https://github.com/margelo/react-native-release-profiler",
	],
	[
		"react-native-render-html",
		{
			type: "git",
			url: "https://github.com/meliorence/react-native-render-html.git",
			directory: "packages/render-html",
		},
		"https://github.com/meliorence/react-native-render-html",
	],
	[
		"react-native-share",
		{
			type: "git",
			url: "git+https://github.com/react-native-community/react-native-share.git",
		},
		"https://github.com/react-native-community/react-native-share",
	],
	[
		"react-native-sound",
		"zmxv/react-native-sound",
		"https://github.com/zmxv/react-native-sound",
	],
	[
		"react-native-tab-view",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/react-native-tab-view",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"react-plaid-link",
		{ type: "git", url: "https://github.com/plaid/react-plaid-link.git" },
		"https://github.com/plaid/react-plaid-link",
	],
	[
		"react-web-config",
		{
			type: "git",
			url: "git+https://github.com/tanhauhau/react-web-config.git",
		},
		"https://github.com/tanhauhau/react-web-config",
	],
	[
		"react-webcam",
		{ type: "git", url: "https://github.com/mozmorris/react-webcam.git" },
		"https://github.com/mozmorris/react-webcam",
	],
	[
		"react-window",
		{ type: "git", url: "https://github.com/bvaughn/react-window.git" },
		"https://github.com/bvaughn/react-window",
	],
	[
		"@actions/core",
		{
			type: "git",
			url: "git+https://github.com/actions/toolkit.git",
			directory: "packages/core",
		},
		"https://github.com/actions/toolkit",
	],
	[
		"@actions/github",
		{
			type: "git",
			url: "git+https://github.com/actions/toolkit.git",
			directory: "packages/github",
		},
		"https://github.com/actions/toolkit",
	],
	[
		"@babel/parser",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-parser",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/plugin-proposal-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-class-properties",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/plugin-proposal-export-namespace-from",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-export-namespace-from",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/plugin-proposal-private-methods",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-private-methods",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/plugin-proposal-private-property-in-object",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-proposal-private-property-in-object",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/plugin-transform-class-properties",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-plugin-transform-class-properties",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/preset-flow",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-flow",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/preset-react",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-react",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/preset-typescript",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-preset-typescript",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/traverse",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-traverse",
		},
		"https://github.com/babel/babel",
	],
	[
		"@babel/types",
		{
			type: "git",
			url: "https://github.com/babel/babel.git",
			directory: "packages/babel-types",
		},
		"https://github.com/babel/babel",
	],
	[
		"@callstack/reassure-compare",
		"https://github.com/callstack/reassure",
		"https://github.com/callstack/reassure",
	],
	[
		"@dword-design/eslint-plugin-import-alias",
		"dword-design/eslint-plugin-import-alias",
		"https://github.com/dword-design/eslint-plugin-import-alias",
	],
	[
		"@electron/notarize",
		{ type: "git", url: "https://github.com/electron/notarize.git" },
		"https://github.com/electron/notarize",
	],
	[
		"@fullstory/babel-plugin-annotate-react",
		{
			type: "git",
			url: "git+https://github.com/fullstory-babel-plugin-annotate-react.git",
		},
		"https://github.com/fullstory-babel-plugin-annotate-react",
	],
	[
		"@fullstory/babel-plugin-react-native",
		"git://github.com/fullstorydev/fullstory-babel-plugin-react-native.git",
		"https://github.com/fullstorydev/fullstory-babel-plugin-react-native",
	],
	[
		"@jest/globals",
		{
			type: "git",
			url: "https://github.com/jestjs/jest.git",
			directory: "packages/jest-globals",
		},
		"https://github.com/jestjs/jest",
	],
	[
		"@kie/act-js",
		{ type: "git", url: "https://github.com/kiegroup/act-js.git" },
		"https://github.com/kiegroup/act-js",
	],
	[
		"@kie/mock-github",
		{ type: "git", url: "https://github.com/kiegroup/mock-github.git" },
		"https://github.com/kiegroup/mock-github",
	],
	[
		"@ngneat/falso",
		{ type: "git", url: "https://github.com/ngneat/falso" },
		"https://github.com/ngneat/falso",
	],
	[
		"@octokit/core",
		"github:octokit/core.js",
		"https://github.com/github:octokit/core.js",
	],
	[
		"@octokit/plugin-paginate-rest",
		"github:octokit/plugin-paginate-rest.js",
		"https://github.com/github:octokit/plugin-paginate-rest.js",
	],
	[
		"@octokit/plugin-throttling",
		"github:octokit/plugin-throttling.js",
		"https://github.com/github:octokit/plugin-throttling.js",
	],
	[
		"@octokit/webhooks-types",
		"github:octokit/webhooks",
		"https://github.com/github:octokit/webhooks",
	],
	[
		"@perf-profiler/profiler",
		{
			type: "git",
			url: "https://github.com/bamlab/android-performance-profiler.git",
			directory: "very-secret-profiler",
		},
		"https://github.com/bamlab/android-performance-profiler",
	],
	[
		"@perf-profiler/reporter",
		{
			type: "git",
			url: "https://github.com/bamlab/android-performance-profiler.git",
		},
		"https://github.com/bamlab/android-performance-profiler",
	],
	[
		"@react-native-community/cli",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/cli",
		},
		"https://github.com/react-native-community/cli",
	],
	[
		"@react-native-community/cli-platform-android",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/platform-android",
		},
		"https://github.com/react-native-community/cli",
	],
	[
		"@react-native-community/cli-platform-ios",
		{
			type: "git",
			url: "https://github.com/react-native-community/cli.git",
			directory: "packages/cli-platform-ios",
		},
		"https://github.com/react-native-community/cli",
	],
	[
		"@react-native-community/eslint-config",
		{
			type: "git",
			url: "git@github.com:facebook/react-native.git",
			directory: "packages/eslint-config-react-native-community",
		},
		"https://github.com/git@github.com:facebook/react-native.git",
	],
	[
		"@react-native/babel-preset",
		{ type: "git", url: "git+ssh://git@github.com/facebook/react-native.git" },
		"https://github.com/facebook/react-native",
	],
	[
		"@react-native/metro-config",
		{
			type: "git",
			url: "git+https://github.com/facebook/react-native.git",
			directory: "packages/metro-config",
		},
		"https://github.com/facebook/react-native",
	],
	[
		"@react-navigation/devtools",
		{
			type: "git",
			url: "https://github.com/react-navigation/react-navigation.git",
			directory: "packages/devtools",
		},
		"https://github.com/react-navigation/react-navigation",
	],
	[
		"@storybook/addon-a11y",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/addons/a11y",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/addon-essentials",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/addons/essentials",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/addon-webpack5-compiler-babel",
		{
			type: "git",
			url: "git+https://github.com/storybookjs/addon-webpack5-compiler-babel.git",
		},
		"https://github.com/storybookjs/addon-webpack5-compiler-babel",
	],
	[
		"@storybook/cli",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/cli",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/manager-api",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/manager-api",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/react",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/renderers/react",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/react-webpack5",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/frameworks/react-webpack5",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@storybook/theming",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/theming",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"@svgr/webpack",
		"https://github.com/gregberge/svgr/tree/main/packages/webpack",
		"https://github.com/gregberge/svgr/tree/main/packages/webpack",
	],
	[
		"@trivago/prettier-plugin-sort-imports",
		{
			url: "https://github.com/trivago/prettier-plugin-sort-imports",
			type: "git",
		},
		"https://github.com/trivago/prettier-plugin-sort-imports",
	],
	[
		"@types/canvas-size",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/canvas-size",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/howler",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/howler",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/jest-when",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/jest-when",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/js-yaml",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/js-yaml",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/lodash-es",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/lodash-es",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/mapbox-gl",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/mapbox-gl",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/mime-db",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/mime-db",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-beautiful-dnd",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-beautiful-dnd",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-collapse",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-collapse",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-is",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-is",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/react-native-web",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/react-native-web",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/semver",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/semver",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/setimmediate",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/setimmediate",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/webpack",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/webpack",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	[
		"@types/webpack-bundle-analyzer",
		{
			type: "git",
			url: "https://github.com/DefinitelyTyped/DefinitelyTyped.git",
			directory: "types/webpack-bundle-analyzer",
		},
		"https://github.com/DefinitelyTyped/DefinitelyTyped",
	],
	["@vercel/ncc", "vercel/ncc", "https://github.com/vercel/ncc"],
	[
		"@vue/preload-webpack-plugin",
		{ type: "git", url: "https://github.com/vuejs/preload-webpack-plugin.git" },
		"https://github.com/vuejs/preload-webpack-plugin",
	],
	[
		"@welldone-software/why-did-you-render",
		"https://github.com/welldone-software/why-did-you-render",
		"https://github.com/welldone-software/why-did-you-render",
	],
	[
		"ajv-cli",
		{ type: "git", url: "https://github.com/ajv-validator/ajv-cli" },
		"https://github.com/ajv-validator/ajv-cli",
	],
	[
		"babel-loader",
		{ type: "git", url: "https://github.com/babel/babel-loader.git" },
		"https://github.com/babel/babel-loader",
	],
	[
		"babel-plugin-react-native-web",
		{ type: "git", url: "git://github.com/necolas/react-native-web.git" },
		"https://github.com/necolas/react-native-web",
	],
	[
		"clean-webpack-plugin",
		{
			type: "git",
			url: "https://github.com/johnagan/clean-webpack-plugin.git",
		},
		"https://github.com/johnagan/clean-webpack-plugin",
	],
	[
		"concurrently",
		{ type: "git", url: "https://github.com/open-cli-tools/concurrently.git" },
		"https://github.com/open-cli-tools/concurrently",
	],
	[
		"copy-webpack-plugin",
		"webpack-contrib/copy-webpack-plugin",
		"https://github.com/webpack-contrib/copy-webpack-plugin",
	],
	[
		"css-loader",
		"webpack-contrib/css-loader",
		"https://github.com/webpack-contrib/css-loader",
	],
	[
		"csv-parse",
		{
			type: "git",
			url: "https://github.com/adaltas/node-csv.git",
			directory: "packages/csv-parse",
		},
		"https://github.com/adaltas/node-csv",
	],
	[
		"csv-writer",
		{ type: "git", url: "git+https://github.com/ryu1kn/csv-writer.git" },
		"https://github.com/ryu1kn/csv-writer",
	],
	[
		"diff-so-fancy",
		{ type: "git", url: "git+https://github.com/so-fancy/diff-so-fancy.git" },
		"https://github.com/so-fancy/diff-so-fancy",
	],
	[
		"dotenv",
		{ type: "git", url: "git://github.com/motdotla/dotenv.git" },
		"https://github.com/motdotla/dotenv",
	],
	[
		"electron",
		"https://github.com/electron/electron",
		"https://github.com/electron/electron",
	],
	[
		"electron-builder",
		{
			type: "git",
			url: "git+https://github.com/electron-userland/electron-builder.git",
			directory: "packages/electron-builder",
		},
		"https://github.com/electron-userland/electron-builder",
	],
	[
		"eslint-config-airbnb-typescript",
		{
			type: "git",
			url: "https://github.com/iamturns/eslint-config-airbnb-typescript.git",
		},
		"https://github.com/iamturns/eslint-config-airbnb-typescript",
	],
	[
		"eslint-config-expensify",
		{
			type: "git",
			url: "git+https://github.com/Expensify/eslint-config-expensify.git",
		},
		"https://github.com/Expensify/eslint-config-expensify",
	],
	[
		"eslint-plugin-deprecation",
		{
			type: "git",
			url: "https://github.com/gund/eslint-plugin-deprecation.git",
		},
		"https://github.com/gund/eslint-plugin-deprecation",
	],
	[
		"eslint-plugin-jsdoc",
		{ type: "git", url: "https://github.com/gajus/eslint-plugin-jsdoc" },
		"https://github.com/gajus/eslint-plugin-jsdoc",
	],
	[
		"eslint-plugin-lodash",
		{ type: "git", url: "https://github.com/wix/eslint-plugin-lodash" },
		"https://github.com/wix/eslint-plugin-lodash",
	],
	[
		"eslint-plugin-storybook",
		{
			type: "git",
			url: "https://github.com/storybookjs/eslint-plugin-storybook",
		},
		"https://github.com/storybookjs/eslint-plugin-storybook",
	],
	[
		"eslint-plugin-testing-library",
		{
			type: "git",
			url: "https://github.com/testing-library/eslint-plugin-testing-library",
		},
		"https://github.com/testing-library/eslint-plugin-testing-library",
	],
	[
		"eslint-plugin-you-dont-need-lodash-underscore",
		{
			type: "git",
			url: "https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore.git",
		},
		"https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore",
	],
	[
		"googleapis",
		"googleapis/google-api-nodejs-client",
		"https://github.com/googleapis/google-api-nodejs-client",
	],
	[
		"html-webpack-plugin",
		"https://github.com/jantimon/html-webpack-plugin.git",
		"https://github.com/jantimon/html-webpack-plugin",
	],
	[
		"http-server",
		{ type: "git", url: "git://github.com/http-party/http-server.git" },
		"https://github.com/http-party/http-server",
	],
	[
		"jest-circus",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-circus",
		},
		"https://github.com/facebook/jest",
	],
	[
		"jest-cli",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-cli",
		},
		"https://github.com/facebook/jest",
	],
	[
		"jest-environment-jsdom",
		{
			type: "git",
			url: "https://github.com/facebook/jest.git",
			directory: "packages/jest-environment-jsdom",
		},
		"https://github.com/facebook/jest",
	],
	[
		"jest-transformer-svg",
		{
			type: "git",
			url: "git+ssh://git@github.com:Em-Ant/jest-transformer-svg.git",
		},
		"https://github.com/git+ssh://git@github.com:Em-Ant/jest-transformer-svg.git",
	],
	[
		"jest-when",
		{ type: "git", url: "https://github.com/timkindberg/jest-when/" },
		"https://github.com/timkindberg/jest-when/",
	],
	["link", "privatenumber/link", "https://github.com/privatenumber/link"],
	[
		"memfs",
		{ type: "git", url: "https://github.com/streamich/memfs.git" },
		"https://github.com/streamich/memfs",
	],
	[
		"onchange",
		{ type: "git", url: "https://github.com/Qard/onchange.git" },
		"https://github.com/Qard/onchange",
	],
	[
		"openai",
		"github:openai/openai-node",
		"https://github.com/github:openai/openai-node",
	],
	["peggy", "peggyjs/peggy", "https://github.com/peggyjs/peggy"],
	[
		"portfinder",
		{ type: "git", url: "git@github.com:http-party/node-portfinder.git" },
		"https://github.com/git@github.com:http-party/node-portfinder.git",
	],
	[
		"react-compiler-healthcheck",
		{
			type: "git",
			url: "git+https://github.com/facebook/react.git",
			directory: "compiler/packages/react-compiler-healthcheck",
		},
		"https://github.com/facebook/react",
	],
	[
		"react-is",
		{
			type: "git",
			url: "https://github.com/facebook/react.git",
			directory: "packages/react-is",
		},
		"https://github.com/facebook/react",
	],
	[
		"react-native-clean-project",
		{
			type: "git",
			url: "git+https://github.com/pmadruga/react-native-clean-project.git",
		},
		"https://github.com/pmadruga/react-native-clean-project",
	],
	[
		"reassure",
		"https://github.com/callstack/reassure",
		"https://github.com/callstack/reassure",
	],
	[
		"semver",
		{ type: "git", url: "https://github.com/npm/node-semver.git" },
		"https://github.com/npm/node-semver",
	],
	[
		"setimmediate",
		"YuzuJS/setImmediate",
		"https://github.com/YuzuJS/setImmediate",
	],
	[
		"shellcheck",
		{ type: "git", url: "git+https://github.com/gunar/shellcheck.git" },
		"https://github.com/gunar/shellcheck",
	],
	[
		"source-map",
		{ type: "git", url: "http://github.com/mozilla/source-map.git" },
		"https://github.com/mozilla/source-map",
	],
	[
		"storybook",
		{
			type: "git",
			url: "https://github.com/storybookjs/storybook.git",
			directory: "code/lib/cli",
		},
		"https://github.com/storybookjs/storybook",
	],
	[
		"style-loader",
		"webpack-contrib/style-loader",
		"https://github.com/webpack-contrib/style-loader",
	],
	[
		"ts-jest",
		{ type: "git", url: "git+https://github.com/kulshekhar/ts-jest.git" },
		"https://github.com/kulshekhar/ts-jest",
	],
	[
		"tsconfig-paths",
		"https://github.com/dividab/tsconfig-paths",
		"https://github.com/dividab/tsconfig-paths",
	],
	[
		"type-fest",
		"sindresorhus/type-fest",
		"https://github.com/sindresorhus/type-fest",
	],
	[
		"wait-port",
		{ type: "git", url: "git+https://github.com/dwmkerr/wait-port.git" },
		"https://github.com/dwmkerr/wait-port",
	],
	[
		"webpack",
		{ type: "git", url: "https://github.com/webpack/webpack.git" },
		"https://github.com/webpack/webpack",
	],
	[
		"webpack-cli",
		{ type: "git", url: "https://github.com/webpack/webpack-cli.git" },
		"https://github.com/webpack/webpack-cli",
	],
	[
		"webpack-dev-server",
		"https://github.com/webpack/webpack-dev-server",
		"https://github.com/webpack/webpack-dev-server",
	],
	[
		"webpack-merge",
		{ type: "git", url: "https://github.com/survivejs/webpack-merge.git" },
		"https://github.com/survivejs/webpack-merge",
	],
	[
		"xlsx",
		{ type: "git", url: "https://git.sheetjs.com/SheetJS/sheetjs" },
		"https://github.com/https://git.sheetjs.com/SheetJS/sheetjs",
	],
];
