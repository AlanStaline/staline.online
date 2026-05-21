---
title: "Decap CMS 配置指南"
date: 2024-02-20
author: Your Name
tags: [CMS, Decap CMS, Static Sites]
description: "学习如何配置 Decap CMS 用于静态网站管理"
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
