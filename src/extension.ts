import * as vscode from 'vscode';

/**
 * Called when the extension is activated
 */
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'terminalCopy.copySelectionToTerminal',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('No active editor detected. Please open the file you want to operate on.');
        return;
      }

      const selections = editor.selections.filter((selection) => !selection.isEmpty);
      if (selections.length === 0) {
        vscode.window.showWarningMessage('Please select the text you want to send to the terminal first.');
        return;
      }

      const terminal = vscode.window.activeTerminal;
      if (!terminal) {
        vscode.window.showWarningMessage('No active terminal found. Please open and activate a terminal first.');
        return;
      }

      const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
      const payload = selections
        .map((selection) => {
          const startLine = selection.start.line + 1;
          const endLine = selection.end.line + 1;
          const rangeLabel = startLine === endLine ? `Line ${startLine}` : `Lines ${startLine}-${endLine}`;
          const rawText = editor.document.getText(selection).replace(/\r/g, '');
          const normalizedText = rawText.endsWith('\n') ? rawText : `${rawText}\n`;

          return `File: ${relativePath} (${rangeLabel})\n"""\n${normalizedText}"""`;
        })
        .join('\n\n');

      terminal.sendText(payload, true);
      vscode.window.showInformationMessage('Selected text has been sent to the terminal.');
    }
  );

  context.subscriptions.push(disposable);
}

/**
 * Called when the extension is deactivated
 */
export function deactivate() {}

