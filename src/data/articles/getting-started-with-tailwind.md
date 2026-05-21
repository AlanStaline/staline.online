---
title: "Tailwind CSS 快速入门"
date: 2024-03-10
author: Your Name
tags: [Tailwind CSS, CSS, Styling]
description: "学习如何使用 Tailwind CSS 快速构建现代化界面"
---

# Tailwind CSS 快速入门

Tailwind CSS 是一个实用优先的 CSS 框架，让你无需离开 HTML 即可构建现代网站。

## 为什么选择 Tailwind？

- **开发速度快**：无需编写自定义 CSS
- **一致性**：统一的设计系统
- **响应式**：内置响应式工具类
- **深色模式**：轻松实现主题切换

## 快速开始

\`\`\`bash
npm install -D tailwindcss
npx tailwindcss init
\`\`\`

## 配置

\`\`\`js
export default {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

开始使用 Tailwind 构建你的下一个项目吧！
