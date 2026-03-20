# Roro Website Prototype Hub

这个目录现在已经被整理成一个可维护的前端项目骨架，用来承接原本分散的静态 HTML 原型。
当前 `/` 是正式网站入口，`/hub` 保留原型工作台。

## 目标

- 保留原始原型文件，不直接覆盖或重写
- 用统一的数据结构管理页面分组、版本、截图和 HTML 入口
- 提供一个 React + Vite 的网站壳层，用来按语言和导航规则加载指定原型
- 同时保留一个工作台，用来浏览、筛选、对比这些原型
- 为后续把某个方案逐步组件化，先搭好稳定的工程结构

## 当前结构

- `src/`
  - `components/`: 共享布局和卡片组件
  - `data/`: 原型元数据
  - `pages/`: 网站页面、概览页、分类页、详情页、设计系统页
  - `styles/`: 全局样式
- `scripts/sync-prototypes.mjs`
  - 把原始目录里的 `code.html`、`screen.png`、`DESIGN.md` 同步到 `public/prototypes/`
- `public/prototypes/`
  - 运行同步脚本后生成，供浏览器直接访问原始 HTML 和截图

## 开发命令

```bash
npm install
npm run dev

默认网站入口：

```bash
http://localhost:5173/
```

原型工作台入口：

```bash
http://localhost:5173/hub
```
```

如果只想先同步原型资源：

```bash
npm run sync:prototypes
```

## 迁移建议

1. 先在网站入口验证默认导航和语言切换逻辑是否符合预期。
2. 再从共享程度最高的部分开始组件化，例如导航、页脚、Hero、卡片。
3. 当某一页完成正式组件化后，可以把它从 iframe 原型切换成真实 React 页面。
4. 原始 HTML 继续保留，作为设计回溯和视觉比对的参考。

## 注意

- 当前环境里如果没有安装 Node.js，项目文件可以先保留，但本地无法直接运行 `npm`/`vite`。
- 原型 HTML 仍然保留了外部 CDN、图片和占位链接，这部分属于下一阶段的页面正式化工作。
- 当前目录里没有 `Activities & Events Concept 3`，所以繁体中文下的赛事活动页面会回退到 `Concept 2`。
