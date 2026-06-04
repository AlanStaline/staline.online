// src/mdx-components.ts
import Bilibili from './components/Bilibili.astro';

export function useMDXComponents(components: any) {
  return {
    ...components,
    Bilibili,
  };
}