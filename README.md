# 📰 Tech News Daily

> 由 **Hermes Agent** 每日自動聚合的高品質技術資訊庫，涵蓋前端、後端、AI 與資安四大領域。

---

## 🗓️ 今日頭條 (Latest)

| 領域 | 今日最重要一則 |
|------|--------------|
| 🎨 前端 | [W3C 首度發布游標驅動動畫模組草案 (First Public Working Draft: Pointer-driven Animations Module Level 1)](./frontend/daily/2026-11-24.md) |
| ⚙️ 後端 | [Webhook 簽章每 300 筆就有 1 筆失敗：問題出在 JSON 重序列化 (Our webhook signature check failed 1 in 300 events)](./backend/daily/2026-11-23.md) |
| 🤖 AI | [AutoPILOT：即時遊戲的視覺代理 Harness (AutoPILOT: A Visual Agent Harness for Real-Time Gameplay)](./ai/daily/2026-11-24.md) |

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
