# npm-peek 🔍

A powerful CLI tool to visualize differences between your current npm package versions and their latest releases in a browser.

[![npm version](https://img.shields.io/npm/v/npm-peek.svg)](https://www.npmjs.com/package/npm-peek)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## ✨ Features

- **Easy Comparison:** Quickly diff any npm package in your `package.json` with its latest version
- **Visual Diff:** Presents the differences in a user-friendly HTML format using `diff2html`
- **Browser Output:** Automatically opens the diff in your default browser
- **Simple CLI:** Intuitive command-line interface
- **Zero Configuration:** Works out of the box with your existing `package.json`

## 🚀 Quick Start

The easiest way to use npm-peek is with npx:

```bash
npx npm-peek <package-name>
```

For example, to compare the version of React in your project with the latest version:

```bash
npx npm-peek react
```

## 📦 Installation (Optional)

If you prefer to install npm-peek globally:

```bash
npm install -g npm-peek
```

Then you can use it directly:

```bash
npm-peek <package-name>
```

## 🔧 How It Works

1. Reads the version of the specified package from your `package.json`
2. Fetches the latest version of the package from the npm registry
3. Generates a diff file comparing the two versions
4. Opens the diff in your default browser
