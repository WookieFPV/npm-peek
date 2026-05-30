# npm-peek [![npm][npm-image]][npm-url] ![npm][npm-dl-stats]

Diff installed npm dependencies against published versions in a browser-friendly HTML view.

`npm-peek` helps answer the question behind every dependency bump: what actually changed between the version I have and the version I might upgrade to?

## Why Use It

- Review an upgrade before touching your lockfile
- Compare your installed version against any published release
- Start from the current project's `package.json` and `node_modules`
- Open a readable HTML diff instead of inspecting tarballs by hand

## Quick Start

```bash
# Pick a dependency from the current project's package.json
npx npm-peek

# Skip package selection and choose only the target version interactively
npx npm-peek react

# Compare directly against a specific release
npx npm-peek react --target 19.1.0

# Override the source version instead of reading the installed one
npx npm-peek react --from 19.0.0 --target 19.1.0
```

## How It Works

1. Reads dependencies from the current project's `package.json`
2. Detects the installed version from `node_modules` unless `--from` is provided
3. Fetches published versions from npm
4. Runs `npm diff` for the selected versions
5. Opens the result as an HTML diff in your browser

When repository metadata is available, `npm-peek` also prints compare and release links for the upstream repo.

## Requirements

- Run it inside a project directory with a `package.json`
- Install dependencies first so the package exists in `node_modules`
- Have `npm` available locally
- Have network access to the npm registry

## CLI Usage

```bash
npx npm-peek [package-name] [--from <version>] [--target <version>]
```

- No package name: interactive dependency picker
- Package name only: interactive target version picker
- `--from`: override the source version
- `--target`: compare directly against a specific release

[npm-image]: https://img.shields.io/npm/v/npm-peek
[npm-url]: https://www.npmjs.com/package/npm-peek
[npm-dl-stats]: https://img.shields.io/npm/dm/npm-peek
