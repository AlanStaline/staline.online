---
title: AI agent后端算力模型架构设计
date: 2026-05-30T20:51:00.000+08:00
author: Alan
tags:
  - llama
  - Redis
  - RediSearch
  - Semantic cache
description: 仅用于个人尝试记录，处于实验摸索阶段。单实例模型 + 语义缓存混合架构部署，实现本地Ai agent对接。
---

# Decap CMS 配置指南

Decap CMS 是一个开源的内容管理系统，专为静态网站设计。

## 基本配置

创建 `admin/config.yml`：

```yaml
backend:
  name: github
media_folder: "src/assets/images"
public_folder: "/"

collection:
  - label: "Blog"
    name: "blog"
    folder: "src/data/articles"
    create: true
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Date", name: "date", widget: "datetime" }
      - { label: "Tags", name: "tags", widget: "list" }
      - { label: "Content", name: "content", widget: "markdown" }
```

现在你可以通过 `/admin` 访问管理后台了。
