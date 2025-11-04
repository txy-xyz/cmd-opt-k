import * as vscode from 'vscode';

// 创建输出通道用于日志记录
let outputChannel: vscode.OutputChannel;

/**
 * 记录日志到输出通道
 */
function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  const logMessage = `[${timestamp}] ${message}`;
  outputChannel.appendLine(logMessage);
  console.log(logMessage);
}

/**
 * Called when the extension is activated
 */
export function activate(context: vscode.ExtensionContext) {
  // 创建输出通道
  outputChannel = vscode.window.createOutputChannel('Terminal Copy Helper');
  context.subscriptions.push(outputChannel);
  
  log('✓ Terminal Copy Helper extension activated');
  
  const disposable = vscode.commands.registerCommand(
    'terminalCopy.copySelectionToTerminal',
    () => {
      log('--- Command triggered ---');
      
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        log('✗ No active editor detected');
        vscode.window.showWarningMessage('No active editor detected. Please open the file you want to operate on.');
        return;
      }
      log(`✓ Active editor: ${editor.document.fileName}`);

      const selections = editor.selections.filter((selection) => !selection.isEmpty);
      if (selections.length === 0) {
        log('✗ No text selected');
        vscode.window.showWarningMessage('Please select the text you want to send to the terminal first.');
        return;
      }
      log(`✓ Found ${selections.length} selection(s)`);

      const terminal = vscode.window.activeTerminal;
      if (!terminal) {
        log('✗ No active terminal found');
        vscode.window.showWarningMessage('No active terminal found. Please open and activate a terminal first.');
        return;
      }
      log(`✓ Active terminal: ${terminal.name}`);

      const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
      const payload = selections
        .map((selection) => {
          const startLine = selection.start.line + 1;
          const endLine = selection.end.line + 1;
          const rangeLabel = startLine === endLine ? `Line ${startLine}` : `Lines ${startLine}-${endLine}`;
          const rawText = editor.document.getText(selection).replace(/\r/g, '');
          const normalizedText = rawText.endsWith('\n') ? rawText : `${rawText}\n`;

          log(`  - Selection: ${relativePath} (${rangeLabel})`);
          return `File: ${relativePath} (${rangeLabel})\n"""\n${normalizedText}"""`;
        })
        .join('\n\n');

      terminal.sendText(payload, true);
      log('✓ Text sent to terminal successfully');
      vscode.window.showInformationMessage('Selected text has been sent to the terminal.');
    }
  );

  context.subscriptions.push(disposable);
  log('✓ Command registered: terminalCopy.copySelectionToTerminal');
}

/**
 * Called when the extension is deactivated
 */
export function deactivate() {}

