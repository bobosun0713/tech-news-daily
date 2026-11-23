# 🎨 前端技術快遞

> 每日精選框架釋出、效能優化、建置工具（Vite / Tailwind / React / Vue 等）高價值更新。

[🏠 回到總大廳](../README.md) | [⚙️ 後端](../backend/README.md) | [🤖 AI](../ai/README.md) | [🛡️ 資安](../security/README.md)

---

## 📅 最近 7 天

<!-- DAILY_INDEX_START -->

- [2026-11-22](./daily/2026-11-22.md) — 實測 130 個 Next.js 網站頁面：HTML 可見文字不到 3%，Brotli 傳輸量少 41% (Googlebot Reads 2MB of HTML. I Measured 130 Pages on My Next.js Sites: Under 3% Was Text)
- [2026-11-18](./daily/2026-11-18.md) — Vercel 推出 UI SDK，供 AI 代理組合可重用 UI 行為 (Vercel Releases UI SDK for Agents to Compose UI from Reusable Behaviors)
- [2026-11-17](./daily/2026-11-17.md) — 修正 Vite 建置的 Forge Custom UI 部署空白頁：改用相對資源路徑 (Forge Custom UI blank page after deploy: Vite asset paths)
- [2026-11-15](./daily/2026-11-15.md) — 實測 Server Components 對內容網站 JavaScript 傳輸量的影響 (Two of our 1,029 page files are client components, and two pages 23 KB apart in HTML ship byte-identical JavaScript)
- [2026-11-14](./daily/2026-11-14.md) — 逐一按 Tab 巡檢 5,495 個停靠點，373 個元素沒有焦點外框 (I pressed Tab through all 5,495 stops on our site: the order is perfect and 373 of them show no focus ring)
- [2026-11-13](./daily/2026-11-13.md) — 以 VITE_ 或 NEXT_PUBLIC_ 前綴的 Telegram token 會出現在前端 bundle 中 (Telegram token in VITE_ or NEXT_PUBLIC_? It's in your bundle)
- [2026-11-12](./daily/2026-11-12.md) — 我做了一個工具，檢查 Vue Vapor 模式會破壞你應用程式的哪些部分 (I built a tool that tells you what Vue Vapor mode will break in your app)
<!-- DAILY_INDEX_END -->

---

## 🗄️ 歷史歸檔

<!-- ARCHIVE_INDEX_START -->

- [2026-11-10](./archives/2026-11-page-1.md) — React INP 基準測試：分段處理、startTransition 與 scheduler.yield 比較 (React INP Benchmark: Chunking vs startTransition vs scheduler.yield)
- [2026-11-09](./archives/2026-11-page-1.md) — Cloudflare 啟動 Vite 生態系基金，首輪撥款 301,300 美元 (Launching the Vite Ecosystem Fund)
- [2026-11-05](./archives/2026-11-page-1.md) — Vite 8.3.6：修正解析與建置問題，並改善效能 (v8.3.6)
- [2026-11-04](./archives/2026-11-page-1.md) — Ant Design 6.7.0：元件 API 與無障礙支援擴充 (6.7.0)
- [2026-10-23](./archives/2026-10-page-1.md) — React 登入分頁的 OAuth 流程意外讓訪客繞過邀請制 (My Invite-Only Gate Lived in the Browser)
- [2026-10-22](./archives/2026-10-page-1.md) — 共用表單元件漏接欄位提示，造成讀屏器無法取得說明 (Four form components hold every form in our app, and writing this post found the one bug in them)
- [2026-10-20](./archives/2026-10-page-1.md) — create-vite 9.3.1：修正 TypeScript 版本與 TanStack 範本 (create-vite@9.3.1)
- [2026-10-19](./archives/2026-10-page-1.md) — React Native 0.88：事件派送改用網頁標準，並支援可變字型與 iOS SceneDelegate (React Native 0.88 - Web-Based Event Dispatching, Variable Fonts, SceneDelegate, no breaking changes)
- [2026-10-18](./archives/2026-10-page-1.md) — TanStack Start 對決 Next.js：同一應用的效能實測 (TanStack Start vs Next.js in 2026: Same App, Real Benchmarks)
- [2026-10-16](./archives/2026-10-page-1.md) — 用單一 CLI 與設定檔為 Vite+ 加入瀏覽器測試 (One CLI, one config file: adding browser tests to a Vite+ project)
- [2026-10-14](./archives/2026-10-page-1.md) — TanStack Start 1.0 穩定版登陸 Appwrite Sites (TanStack Start is stable, and it runs on Appwrite Sites)
- [2026-10-13](./archives/2026-10-page-1.md) — Mutative 2.0：加速不可變狀態更新並修正 patches (Announcing Mutative 2.0 - Faster Updates and Safer Patches)
- [2026-10-12](./daily/2026-10-12.md) — 前端漸進遷移策略：Strangler Fig、抽象分支與垂直切片 (Strangler Fig, Branch by Abstraction, Vertical Slices: Choosing a Frontend Migration Strategy)
- [2026-10-11](./archives/2026-10-page-1.md) — Vite 8.1 上線：bundled dev mode 與 chunk import map 一起補齊 (Vite 8.1 is out!)
- [2026-10-10](./archives/2026-10-page-1.md) — 高流量頁面重構：不把 listing details 搞壞的做法 (Rewriting a High-Traffic Page Without Breaking It: Notes from the Listing Details Migration)
- [2026-10-06](./archives/2026-10-page-1.md) — React 19.3 與工具鏈週報：DevTools、cn、Vitest 一次看 (This Week In React #296: React 19.3, DevTools, Next.js, cn, Maps | 0.88 RC, Expo Modules, Navigation Benchmarks | Rslib, Vitest, gpu-lexer)
- [2026-10-05](./archives/2026-10-page-1.md) — Tailwind CSS v4.3：捲軸、色盤與 `@variant` 再進化 (Tailwind CSS v4.3: Scrollbars, new colors, and more)
- [2026-10-02](./archives/2026-10-page-1.md) — React + Vite 的 30 個計算器：靜態預渲染把 SEO 與 TTFB 一次補齊 (Architecting an All-in-One Utility Suite: Scaling React Static Pre-Rendering to 30 Calculators)
- [2026-10-01](./archives/2026-10-page-1.md) — Tailwind Labs 加入 Shopify：Tailwind 進入 Shopify 時代 (Tailwind Labs is joining Shopify)
- [2026-09-30](./archives/2026-10-page-1.md) — Tailwind Labs 加入 Shopify：Tailwind 進入 Shopify 時代 (Tailwind Labs is joining Shopify)
- [2026-09-29](./archives/2026-10-page-1.md) — 前端 19.3 正式推出：View Transitions 與 Fragment Refs 進入穩定版 (React 19.3)
- [2026-09-27](./archives/2026-09-page-1.md) — 前端公告不是硬編碼：把應用內通知從技術債拉回架構層 (Why hardcoded in-app announcements are technical debt in disguise)
<!-- ARCHIVE_INDEX_END -->
