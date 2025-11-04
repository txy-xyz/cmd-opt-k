# AI Agents and Automation Tools

## Project Overview

Terminal Copy Helper is a lightweight VS Code extension that sends selected text snippets along with file path and line number information to the currently active terminal.

## Technology Stack

- **Programming Language**: TypeScript
- **Platform**: Visual Studio Code Extension
- **Build Tool**: TypeScript Compiler
- **Package Management**: npm

## Development Toolchain

### Core Tools

1. **TypeScript Compiler**

   - Version: ^5.3.3
   - Used to compile TypeScript code to JavaScript
   - Configuration: `tsconfig.json`

2. **Node.js Type Definitions**

   - Version: ^18.18.0
   - Provides type definitions for Node.js APIs

3. **VS Code API Type Definitions**
   - Version: ^1.85.0
   - Provides type definitions for VS Code Extension APIs

### Development Scripts

```json
{
  "vscode:prepublish": "npm run compile",
  "compile": "tsc -p ./",
  "watch": "tsc -watch -p ./",
  "lint": "echo 'ESLint not configured'",
  "test": "echo 'Tests not configured'"
}
```

## AI-Assisted Development

### Code Generation and Optimization

- **Intelligent Code Completion**: Use AI to generate TypeScript code
- **Error Fixing**: Automatically detect and fix code issues
- **Documentation Generation**: Automatically generate code comments and documentation

### Project Management

- **Task Planning**: Use AI to analyze requirements and plan development tasks
- **Code Review**: AI-assisted code quality checking
- **Dependency Management**: Intelligent recommendation and updating of project dependencies

## Extension Features

### Core Features

1. **Text Selection Reading**

   - Supports single or multiple selected text segments
   - Automatically extracts relative paths and line number information

2. **Terminal Integration**

   - Automatically sends formatted content to the active terminal
   - Wraps raw text in triple quotes for easy pasting and sharing

3. **User Interface Integration**
   - Right-click menu integration
   - Command palette support
   - Keyboard shortcut: `Cmd + Alt + K` (macOS) / `Ctrl + Alt + K` (Windows/Linux)

## Deployment and Distribution

### Build Process

1. **Compilation**: Use TypeScript compiler to generate JavaScript code
2. **Packaging**: Use VSCE (Visual Studio Code Extension) tool to create .vsix package
3. **Installation**: Install locally or publish to VS Code Marketplace

#### Packaging Steps

```bash
# Install VSCE globally (if not already installed)
npm install -g @vscode/vsce

# Compile the extension
npm run compile

# Create the VSIX package
vsce package

# Install locally (optional)
code --install-extension terminal-copy-0.0.1.vsix
```

#### Publishing Steps

- Update the `publisher` field in `package.json` with your actual publisher ID
- Create a publisher account on the VS Code Marketplace
- Use `vsce publish` to publish to the marketplace (requires authentication)

### Quality Assurance

- **Type Checking**: TypeScript static type checking
- **Code Formatting**: Maintain consistent code style
- **Testing**: Unit tests and integration tests (planned)

## Future Expansion Plans

- Add more output format options
- Support custom templates
- Integrate with more IDEs and terminal tools
- Add configuration options and user preferences

## Notes

- Keep use English for all documentation and comments.
