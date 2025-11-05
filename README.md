# Terminal Copy Helper

A lightweight VS Code extension that sends selected text snippets along with file path and line number information to the currently active terminal.

## Features

- Reads one or multiple selected text segments from the active editor
- Automatically generates relative path and start/end line number descriptions
- Wraps raw text in triple quotes for easy terminal pasting or sharing

## Usage

1. Open your target project in VS Code and ensure there's at least one active terminal
2. Select the code/text you want to share or execute
3. Right-click and choose `Copy to Terminal (with path and line numbers)`, or use the keyboard shortcut `Cmd + Alt + K` (macOS) / `Ctrl + Alt + K` (Windows/Linux), or search for the same command in the command palette
4. Check the automatically filled content in the terminal

## Development and Debugging

```bash
npm install
npm run watch
```

Then use VS Code's `Run Extension` debug configuration to test the functionality in a new Extension Host instance.

## Installation and Packaging

### Installing the Extension

#### Method 1: From VS Code Marketplace

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Terminal Copy Helper"
4. Click Install

#### Method 2: Manual Installation from VSIX Package

##### Step 1: Install VSCE Tool (if not already installed)

```bash
npm install -g @vscode/vsce
```

##### Step 2: Package the Extension

```bash
# Compile the TypeScript code
npm run compile

# Create the VSIX package
vsce package
```

This will generate a `.vsix` file (e.g., `terminal-copy-0.0.1.vsix`) in the project root.

##### Step 3: Install the VSIX Package

```bash
# Install locally in VS Code
code --install-extension terminal-copy-0.0.1.vsix
```

Or manually:

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Click the "..." menu in the top-right corner
4. Select "Install from VSIX..."
5. Choose the generated `.vsix` file

## Publishing Preparation

- Update the `publisher` field in `package.json` with your actual publisher ID
- Test the extension thoroughly before publishing
- Create a publisher account on the VS Code Marketplace if you haven't already
- Use `vsce publish` to publish to the marketplace (requires authentication)
