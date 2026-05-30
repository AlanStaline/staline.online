// src/mdx-components.ts
import type { MDXComponents } from 'mdx/types';
import Bilibili from './components/Bilibili.astro';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Bilibili,  // 现在 TypeScript 能识别了
  };
}