# 📰 Tech News Daily

> 由 **Hermes Agent** 每日自動聚合的高品質技術資訊庫，涵蓋前端、後端、AI 與資安四大領域。

---

## 🗓️ 今日頭條 (Latest)

| 領域 | 今日最重要一則 |
|------|--------------|
| 🎨 前端 | [Vite 8.4.0-beta.2：改善外掛錯誤診斷並修正建置問題 (v8.4.0-beta.2)](./frontend/daily/2026-11-25.md) |
| ⚙️ 後端 | [Xeno.JS Node.js 24 基準測試：比較 NestJS 與 node:http (Xeno.JS Benchmarks on Node.js 24: Comparing with NestJS and node:http)](./backend/daily/2026-11-28.md) |
| 🤖 AI | [以 ADB 操控 Android：不再反覆截圖或傾倒原始 XML (Driving Android Phones Over ADB Without Screenshot Loops or Raw XML Dumps)](./ai/daily/2026-11-28.md) |
| 🛡️ 資安 | [1Password 員工 GitHub 帳號遭入侵，部分客戶資料外洩 (Update on a security incident involving 1Password’s backend systems)](./security/daily/2026-11-26.md) |

---

## 🚪 領域傳送門

| 領域 | 描述 | 連結 |
|------|------|------|
| 🎨 **前端** | 框架釋出、效能優化、建置工具 | [進入前端大廳 →](./frontend/README.md) |
| ⚙️ **後端** | 架構探討、資料庫、API 設計、資安 | [進入後端大廳 →](./backend/README.md) |
| 🤖 **AI** | LLM 更新、AI 開發工具、Agent 設計 | [進入 AI 大廳 →](./ai/README.md) |
| 🛡️ **資安** | 漏洞通報、威脅情資、資安研究與防禦實務 | [進入資安大廳 →](./security/README.md) |

---

## 📂 專案結構

```text
📦 tech-news-daily
 ┣ 📂 frontend/
 ┃ ┣ 📂 archives/                 # 前端歷史歸檔 (存放超過 7 天的內容)
 ┃ ┣ 📂 daily/                    # 前端每日日誌 (YYYY-MM-DD.md)
 ┃ ┗ 📜 README.md                 # 前端領域大廳與最近 7 日索引
 ┣ 📂 backend/
 ┃ ┣ 📂 archives/                 # 後端歷史歸檔
 ┃ ┣ 📂 daily/                    # 後端每日日誌 (YYYY-MM-DD.md)
 ┃ ┗ 📜 README.md                 # 後端領域大廳與最近 7 日索引
 ┣ 📂 ai/
 ┃ ┣ 📂 archives/                 # AI 歷史歸檔
 ┃ ┣ 📂 daily/                    # AI 每日日誌 (YYYY-MM-DD.md)
 ┃ ┗ 📜 README.md                 # AI 領域大廳與最近 7 日索引
 ┣ 📂 security/
 ┃ ┣ 📂 archives/                 # 資安歷史歸檔
 ┃ ┣ 📂 daily/                    # 資安每日日誌 (YYYY-MM-DD.md)
 ┃ ┗ 📜 README.md                 # 資安領域大廳與最近 7 日索引
 ┣ 📂 docs/.vitepress/
 ┃ ┗ 📜 config.ts                 # VitePress 導覽與每日頁面側欄設定
 ┗ 📜 README.md                   # 專案總大廳與今日各領域頭條
```
