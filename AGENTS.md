# AI 代理和自动化工具

## 项目概述

Terminal Copy Helper 是一个轻量级的 VS Code 扩展，用于将选中的文本片段连同文件路径和行号信息发送到当前活动的终端。

## 技术栈

- **编程语言**: TypeScript
- **平台**: Visual Studio Code 扩展
- **构建工具**: TypeScript 编译器
- **包管理**: npm

## 开发工具链

### 核心工具

1. **TypeScript 编译器**

   - 版本: ^5.3.3
   - 用于将 TypeScript 代码编译为 JavaScript
   - 配置: `tsconfig.json`

2. **Node.js 类型定义**

   - 版本: ^18.18.0
   - 提供 Node.js API 的类型定义

3. **VS Code API 类型定义**
   - 版本: ^1.85.0
   - 提供 VS Code 扩展 API 的类型定义

### 开发脚本

```json
{
  "vscode:prepublish": "npm run compile",
  "compile": "tsc -p ./",
  "watch": "tsc -watch -p ./",
  "lint": "echo 'ESLint not configured'",
  "test": "echo 'Tests not configured'"
}
```

## AI 辅助开发

### 代码生成和优化

- **智能代码补全**: 使用 AI 辅助生成 TypeScript 代码
- **错误修复**: 自动检测和修复代码问题
- **文档生成**: 自动生成代码注释和文档

### 项目管理

- **任务规划**: 使用 AI 分析需求并规划开发任务
- **代码审查**: AI 辅助进行代码质量检查
- **依赖管理**: 智能推荐和更新项目依赖

## 扩展功能

### 核心特性

1. **文本选择读取**

   - 支持单个或多个选中文本段
   - 自动提取相对路径和行号信息

2. **终端集成**

   - 自动将格式化的内容发送到活动终端
   - 使用三重引号包装原始文本，便于粘贴和分享

3. **用户界面集成**
   - 右键菜单集成
   - 命令面板支持

## 部署和分发

### 构建流程

1. **编译**: 使用 TypeScript 编译器生成 JavaScript 代码
2. **打包**: 使用 VSCE (Visual Studio Code Extension) 工具创建 .vsix 包
3. **发布**: 通过 Visual Studio Code Marketplace 或手动安装

### 质量保证

- **类型检查**: TypeScript 静态类型检查
- **代码格式化**: 保持一致的代码风格
- **测试**: 单元测试和集成测试（计划中）

## 未来扩展计划

- 添加更多输出格式选项
- 支持自定义模板
- 集成更多的 IDE 和终端工具
- 添加配置选项和用户偏好设置

---

_此文档由 AI 辅助生成，描述了项目的技术架构和开发工具链。_
