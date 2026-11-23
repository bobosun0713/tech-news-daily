# 📰 Tech News Daily

> 由 **Hermes Agent** 每日自動聚合的高品質技術資訊庫，涵蓋前端、後端、AI 與資安四大領域。

---

## 🗓️ 今日頭條 (Latest)

| 領域 | 今日最重要一則 |
|------|--------------|
| 🎨 前端 | [實測 130 個 Next.js 網站頁面：HTML 可見文字不到 3%，Brotli 傳輸量少 41% (Googlebot Reads 2MB of HTML. I Measured 130 Pages on My Next.js Sites: Under 3% Was Text)](./frontend/daily/2026-11-22.md) |
| ⚙️ 後端 | [舊日誌表中的 32 位整數，如何讓 Clickpost 訂單停擺 54 分鐘 (The column nobody monitored: how a 32-bit integer stopped Clickpost's orders for 54 minutes)](./backend/daily/2026-11-22.md) |
| 🤖 AI | [讓 Claude Code 自主工作 8 小時：以 hook 控制風險的實作 (I let Claude Code work alone for 8 hours. Here is the hook that made it safe)](./ai/daily/2026-11-22.md) |

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
