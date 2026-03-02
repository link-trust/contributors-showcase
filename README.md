# Contributors Showcase

使用 Astro + Tailwind CSS v4 构建的静态贡献者展示站，内容由 Markdown 维护。

## 技术栈

- Astro (Static Site Generation)
- Tailwind CSS v4 (`@tailwindcss/vite`)
- Astro Content Collections

## 本地开发

```bash
npm install
npm run dev
```

## 构建与预览

```bash
npm run build
npm run preview
```

## 贡献者内容管理

在 `src/content/contributors/` 下新增一个 `.md` 文件即可创建新的贡献者页面。

示例：

```md
---
name: "张三"
role: "前端工程师"
summary: "负责组件和体验优化。"
location: "杭州"
avatar: "https://i.pravatar.cc/160?img=5"
github: "https://github.com/example"
website: "https://example.com"
joinedAt: "2026-01-01"
tags:
  - "Astro"
  - "Tailwind"
featured: false
order: 10
---

这里可以写贡献者的详细介绍，支持标准 Markdown 语法。
```

新增后运行 `npm run build` 即可生成新的静态页面。
