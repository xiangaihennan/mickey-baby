## Mickey Baby Blog

基于 Next.js + Tailwind CSS 的个人技术与生活记录站点，支持博客、HipHop 视频、旅行卡片、标签检索等多种内容形态。本仓库在 Tailwind Next.js Starter Blog 的基础上进行了定制，强调中文语境下的排版、暗色模式与可访问性体验。

### ✨ 特性亮点

- **内容驱动**：所有文章、视频、作者资料存放于 `data/`，通过 MDX 统一渲染，支持 LaTeX、代码高亮、目录生成与阅读时长统计。
- **多频道布局**：博客列表、HipHop 视频墙、Life 卡片页面均采用独立布局组件，保证复用同时兼顾不同内容的视觉语言。
- **响应式与暗黑模式**：Tailwind CSS + `next-themes` 实现的暗黑切换与移动端适配，保证卡片、分页、导航在多终端一致。
- **互动增强**：自研 Hook（节流、防抖、锁函数等）与评论系统（giscus）让交互体验更顺滑。

### 🧱 技术栈

| 区域 | 技术 |
| --- | --- |
| 前端框架 | Next.js 16、React 18 |
| 样式/设计 | Tailwind CSS 2.x、@tailwindcss/forms、@tailwindcss/typography |
| 内容处理 | MDX Bundler、remark/rehype 插件体系、reading-time |
| 工具链 | ESLint、Prettier、Husky、lint-staged |

### 📁 目录速览

```
.
├── components/        # UI 组件（卡片、导航、SEO、评论等）
├── layouts/           # 内容布局（博客、HipHop、作者页等）
├── pages/             # Next.js 路由，含博客、标签、HipHop、Life 等页面
├── data/              # 站点元信息、导航、文章/视频/生活条目、作者资料
├── lib/               # MDX 解析、RSS、工具方法、remark/rehype 插件
├── public/            # 静态资源（图片、视频、图标）
└── scripts/           # 站点地图等自动化脚本
```

### 🚀 本地开发

1. 安装依赖

   ```bash
   pnpm install
   # 或 npm install / yarn install
   ```

2. 启动开发服务器

   ```bash
   pnpm dev
   # 打开 http://localhost:3000 预览
   ```

3. 其它常用脚本

   ```bash
   pnpm lint     # ESLint + Prettier 检查与自动修复
   pnpm build    # 生成静态页面并产出 sitemap
   pnpm start    # 以生产模式启动
   ```

### 🧩 内容扩展指引

- **新增文章/视频**：在 `data/blog` 或 `data/hiphop` 添加 `.md/.mdx` 文件，配置 `title`、`date`、`summary`、`tags`、`mediaLink` 等字段即可。
- **导航与描述**：修改 `data/siteMetadata.js` 与 `data/headerNavLinks.js` 可同步更新 SEO 信息、导航项目与社交渠道。
- **Life 卡片**：将图片与链接写入 `data/lifeData.js`，页面会自动渲染新的卡片。
- **自定义评论/分析**：在 `siteMetadata.comment` 与 `analytics` 内替换对应供应商配置。

### ✅ 质量保障

- 所有异步数据获取（`getStaticProps` / `getStaticPaths` / `lib/mdx`）均遵循 `async/await` + 错误处理约定。
- 组件尽量无状态，复杂交互下沉到自定义 Hook，保持 DRY 与可测性。
- Tailwind Class 命名遵循 “语义 + 响应式 + 暗色” 顺序，确保易读并可快速定位。

欢迎提出 Issue/PR，共同打磨更优雅的中文开发者博客体验。
