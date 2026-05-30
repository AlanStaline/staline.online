import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://staline.online',
  base: '/staline.online',
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});