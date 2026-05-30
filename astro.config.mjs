import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://staline.online',
  //base: '/staline.online',  // 使用自定义域名时不需要 base
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    mdx(),  // 启用 MDX 支持
  ],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});