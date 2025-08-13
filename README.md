# npm-peek 🔍 [![npm][npm-image]][npm-url] ![npm][npm-dl-stats]

A powerful CLI tool to visualize differences between your current npm package versions and their latest releases in a browser.


## 🎥 Showcase

![Demo](assets/demo.gif)

## 🚀 Quick Start

Use npm-peek instantly with npx:

```bash
# Interactive mode with autocompletion for your package.json dependencies
npx npm-peek

# Direct comparison mode with specific package
npx npm-peek react
```

## 🧠 Usage Modes

- **Interactive Mode:** Run without arguments to select from your project dependencies with fuzzy search
- **Direct Mode:** Specify a package name to instantly compare with its latest version

## ✨ Key Features

- **Smart Dependency Detection:** Automatically finds and lists all packages from your `package.json`
- **Fuzzy Search:** Quickly locate packages with partial name matching
- **Visual Diff Viewer:** See all changes in a clean, browser-based HTML interface
- **One-Command Operation:** Compare versions with minimal typing
- **Zero Configuration:** Works out-of-the-box with any npm project

## 📦 Installation

**Global Installation (Optional):**

```bash
npm install -g npm-peek
# or
yarn global add npm-peek
# or 
pnpm add -g npm-peek
```

Then use anywhere:

```bash
npm-peek [package-name]
```

## 🔧 How It Works

1. Reads the version of the specified package from your `package.json`
2. Fetches the latest version of the package from the npm registry
3. Generates a visual diff
4. Opens the diff in your default browser

[npm-image]: https://img.shields.io/npm/v/npm-peek
[npm-url]: https://www.npmjs.com/package/npm-peek
[npm-dl-stats]: https://img.shields.io/npm/dm/npm-peek
