import * as vscode from 'vscode';

/**
 * 扩展被激活时调用
 */
export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'terminalCopy.copySelectionToTerminal',
    () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showWarningMessage('未检测到活动编辑器，请先打开需要操作的文件。');
        return;
      }

      const selections = editor.selections.filter((selection) => !selection.isEmpty);
      if (selections.length === 0) {
        vscode.window.showWarningMessage('请先选中要发送到终端的文本。');
        return;
      }

      const terminal = vscode.window.activeTerminal;
      if (!terminal) {
        vscode.window.showWarningMessage('当前没有激活的终端，请先打开并激活一个终端。');
        return;
      }

      const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
      const payload = selections
        .map((selection) => {
          const startLine = selection.start.line + 1;
          const endLine = selection.end.line + 1;
          const rangeLabel = startLine === endLine ? `第${startLine}行` : `第${startLine}-${endLine}行`;
          const rawText = editor.document.getText(selection).replace(/\r/g, '');
          const normalizedText = rawText.endsWith('\n') ? rawText : `${rawText}\n`;

          return `文件: ${relativePath}（${rangeLabel}）\n"""\n${normalizedText}"""`;
        })
        .join('\n\n');

      terminal.sendText(payload, true);
      vscode.window.showInformationMessage('已将选中文本发送到终端。');
    }
  );

  context.subscriptions.push(disposable);
}

/**
 * 扩展被释放时调用
 */
export function deactivate() {}

