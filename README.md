# Terminal Copy Helper

A lightweight VS Code extension that sends selected text snippets along with file path and line number information to the currently active terminal.

## Features

- Reads one or multiple selected text segments from the active editor
- Automatically generates relative path and start/end line number descriptions
- Wraps raw text in triple quotes for easy terminal pasting or sharing

## Usage

1. Open your target project in VS Code and ensure there's at least one active terminal
2. Select the code/text you want to share or execute
3. Right-click and choose `Copy to Terminal (with path and line numbers)`, or search for the same command in the command palette
4. Check the automatically filled content in the terminal

## Development and Debugging

```bash
npm install
npm run watch
```

Then use VS Code's `Run Extension` debug configuration to test the functionality in a new Extension Host instance.

## Publishing Preparation

- Update the `publisher` field in `package.json` with the actual publisher ID
- Use `npm run compile` to generate the `dist` directory
- Create a VSIX package using `vsce package` or the `@vscode/vsce` tool
