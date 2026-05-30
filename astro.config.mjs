import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://staline.online',
  //base: '/staline.online',
  trailingSlash: 'always',  // 让 Astro 处理斜杠重定向
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});