# Personal Tech Blog & Portfolio

A modern personal technical blog and portfolio built with Astro, Tailwind CSS, and Decap CMS.

## Features

- ✨ 现代化设计，支持深色/浅色主题
- 📱 完全响应式布局
- 🚀 高性能静态网站
- 📝 Decap CMS 后台管理
- 🎨 流畅动画效果
- 📦 GitHub Pages 部署

## Tech Stack

- **Frontend**: Astro 4.x
- **Styling**: Tailwind CSS
- **CMS**: Decap CMS
- **Deployment**: GitHub Pages + GitHub Actions

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Development

```bash
npm run dev
```

Visit http://localhost:4321

### 3. Build

```bash
npm run build
```

### 4. Preview

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/      # 组件
│   ├── layouts/         # 布局
│   ├── pages/           # 页面
│   ├── data/            # 数据文件
│   └── styles/          # 样式
├── admin/
│   └── config.yml       # Decap CMS 配置
├── public/
│   └── static/          # 静态资源
└── README.md
```

## Pages

### Frontend
- `/` - 首页
- `/blog/` - 博客列表
- `/blog/[slug]/` - 文章详情
- `/projects/` - 项目展示
- `/about/` - 关于我

### Admin
- `/admin/` - Decap CMS 后台

## Configuration

### Decap CMS

Edit `admin/config.yml` to configure collections:

```yaml
backend:
  name: github
  repo: yourusername/personal-tech-blog
  branch: main
```

### Site Config

Edit `src/data/config.json`:

```json
{
  "site": {
    "title": "Your Blog",
    "author": "Your Name"
  }
}
```

## Deployment

### GitHub Pages

1. Push to repository
2. Settings → Pages → Deploy from branch
3. Source: `main` / `/(root)`

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: withastro/setup@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Adding Content

### Blog Posts

Create Markdown files in `src/data/articles/`:

```markdown
---
title: "Post Title"
date: 2024-01-15
tags: ["Tag1", "Tag2"]
---

Post content...
```

### Projects

Edit `src/data/projects.json`

## Customization

### Colors

Edit `tailwind.config.cjs`:

```js
textend: {
  colors: {
    primary: '#your-color'
  }
}
```

### Layout

Edit `src/layouts/Layout.astro`

## License

MIT
