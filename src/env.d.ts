/// <reference path="../.astro/types.d.ts" />

// 为 .astro 模块添加类型声明
declare module '*.astro' {
  import type { AstroComponentFactory } from 'astro/dist/runtime/server';
  const component: AstroComponentFactory;
  export default component;
}