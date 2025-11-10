import * as vscode from 'vscode';

// 创建输出通道用于日志记录
let outputChannel: vscode.OutputChannel;

/**
 * 记录消息到输出通道
 */
function log(message: string) {
  const timestamp = new Date().toLocaleTimeString();
  const logMessage = `[${timestamp}] ${message}`;
  outputChannel.appendLine(logMessage);
  console.log(logMessage);
}

/**
 * 扩展激活时调用
 */
export function activate(context: vscode.ExtensionContext) {
  // 创建日志输出通道
  outputChannel = vscode.window.createOutputChannel('代码复制助手');
  context.subscriptions.push(outputChannel);
  
  log('✓ 代码复制助手扩展已激活');
  
  const disposable = vscode.commands.registerCommand(
    'codeCopy.copySelectionToClipboard',
    async () => {
      log('--- 命令已触发 ---');
      
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        log('✗ 未检测到活动编辑器');
        vscode.window.showWarningMessage('未检测到活动编辑器，请打开要操作的文件。');
        return;
      }
      log(`✓ 活动编辑器: ${editor.document.fileName}`);

      const selections = editor.selections.filter((selection) => !selection.isEmpty);
      if (selections.length === 0) {
        log('✗ 未选择文本');
        vscode.window.showWarningMessage('请先选择要复制的文本。');
        return;
      }
      log(`✓ 找到 ${selections.length} 个选区`);

      const relativePath = vscode.workspace.asRelativePath(editor.document.uri, false);
      const payload = selections
        .map((selection) => {
          const startLine = selection.start.line + 1;
          const endLine = selection.end.line + 1;
          const rangeLabel = startLine === endLine ? `Line ${startLine}` : `Lines ${startLine}-${endLine}`;
          const rawText = editor.document.getText(selection).replace(/\r/g, '');
          const normalizedText = rawText.endsWith('\n') ? rawText : `${rawText}\n`;

          log(`  - 选区: ${relativePath} (${rangeLabel})`);
          return `File: ${relativePath} (${rangeLabel})\nContent as below:\n"""\n${normalizedText}"""`;
        })
        .join('\n\n');

      await vscode.env.clipboard.writeText(payload);
      log('✓ 文本已成功复制到剪贴板');
      vscode.window.showInformationMessage('已将选中文本复制到剪贴板。');
    }
  );

  context.subscriptions.push(disposable);
  log('✓ 命令已注册: codeCopy.copySelectionToClipboard');
}

/**
 * 扩展停用时调用
 */
export function deactivate() {}

