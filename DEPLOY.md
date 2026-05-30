# Deployment Guide

## GitHub Pages Setup

### 1. Repository Setup

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/AlanStaline/staline.online.git
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to repository Settings
2. Navigate to Pages
3. Select branch: `main`
4. Directory: `/ (root)`

### 3. Custom Domain (Optional)

Add a CNAME file:

```
staline.online
```

## GitHub Actions CI/CD

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Decap CMS Configuration

### 1. Setup Admin

The CMS is available at `/admin` after deployment.

### 2. Configure Backend

Edit `admin/config.yml`:

```yaml
backend:
  name: github
  repo: AlanStaline/staline.online
  branch: main
```

### 3. GitHub OAuth

1. Go to Decap CMS settings
2. Enable "GitHub" authentication
3. Add your repository

## Environment Variables

Create `.env`:

```
PUBLIC_SITE_URL=https://github.com/AlanStaline/staline.online
```

## Build Config

`astro.config.mjs`:

```js
export default defineConfig({
  site: 'http://www.staline.online'
});
```

## Testing Locally

```bash
npm run dev
```

Visit: http://localhost:4321

## Production Build

```bash
npm run build
npm run preview
```

## Troubleshooting

### 404 Errors

Ensure `astro.config.mjs` has correct `site` URL.

### CMS Not Loading

Check `admin/config.yml` backend configuration.

### Styles Not Applied

Ensure Tailwind CSS is properly configured in `tailwind.config.cjs`.
