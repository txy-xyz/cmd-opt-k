# 代码复制助手 (Code Copy Helper)

一个轻量级的 VS Code 扩展，将选中的代码片段及其文件路径和行号信息复制到剪贴板。

## 功能特性

- 读取编辑器中一个或多个选中的文本片段
- 自动生成相对路径和起止行号描述
- 使用三引号包裹原始文本，便于粘贴和分享

## 使用方法

1. 在 VS Code 中打开你的项目
2. 选择你想要复制的代码或文本
3. 右键选择 `复制代码（含路径和行号）`，或在命令面板中搜索该命令
4. 内容已复制到剪贴板，可以粘贴到任何地方

## 使用场景

此扩展适用于以下场景：

- **AI 辅助编程**: 将代码片段复制到 ChatGPT、Claude、Copilot Chat 等 AI 助手进行代码审查、调试或优化
- **代码分享**: 快速将代码及其上下文信息分享给同事或在技术论坛中提问
- **文档编写**: 将代码片段及其位置信息复制到文档中
- **问题报告**: 在 bug 报告或 issue 中包含准确的代码位置信息

## 输出格式示例

当你选择一段代码并使用此扩展时，复制到剪贴板的内容格式如下：

```
File: src/extension.ts (Lines 15-20)
Content as below:
"""
export function activate(context: vscode.ExtensionContext) {
  // 创建日志输出通道
  outputChannel = vscode.window.createOutputChannel('代码复制助手');
  context.subscriptions.push(outputChannel);
}
"""
```

## 开发和调试

```bash
npm install
npm run watch
```

然后使用 VS Code 的 `Run Extension` 调试配置在新的扩展宿主实例中测试功能。

## 安装和打包

### 安装扩展

#### 方法一：从 VS Code 市场安装

1. 打开 VS Code
2. 进入扩展页面（Ctrl+Shift+X / Cmd+Shift+X）
3. 搜索 "代码复制助手"
4. 点击安装

#### 方法二：从 VSIX 包手动安装

##### 步骤 1：安装 VSCE 工具（如果尚未安装）

```bash
npm install -g @vscode/vsce
```

##### 步骤 2：打包扩展

```bash
# 编译 TypeScript 代码
npm run compile

# 创建 VSIX 包
vsce package
```

这将在项目根目录生成一个 `.vsix` 文件（例如 `code-copy-helper-0.0.1.vsix`）。

##### 步骤 3：安装 VSIX 包

```bash
# 在 VS Code 中本地安装
code --install-extension code-copy-helper-0.0.1.vsix
```

或手动安装：

1. 打开 VS Code
2. 进入扩展页面（Ctrl+Shift+X / Cmd+Shift+X）
3. 点击右上角的 "..." 菜单
4. 选择 "从 VSIX 安装..."
5. 选择生成的 `.vsix` 文件

## 发布准备

- 在 `package.json` 中更新 `publisher` 字段为你的实际发布者 ID
- 在发布前充分测试扩展
- 如果还没有 VS Code 市场的发布者账号，需要先创建一个
- 使用 `vsce publish` 发布到市场（需要身份验证）
