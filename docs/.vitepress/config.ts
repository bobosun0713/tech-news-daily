import { defineConfig } from "vitepress";
import fs from "node:fs";
import path from "node:path";

function getDailySidebar(domain: string) {
  const dailyDir = path.resolve(import.meta.dirname, `../../${domain}/daily`);

  if (!fs.existsSync(dailyDir)) return [];

  const files = fs
    .readdirSync(dailyDir)
    .filter((file) => file.endsWith(".md"))
    .sort()
    .reverse();

  return files.map((file) => {
    const date = file.replace(".md", "");
    return { text: date, link: `/${domain}/daily/${file}` };
  });
}

export default defineConfig({
  base: '/tech-news-daily/',
  srcDir: "..",
  srcExclude: ["**/node_modules/**"],
  rewrites: {
    "README.md": "index.md",
    "frontend/README.md": "frontend/index.md",
    "backend/README.md": "backend/index.md",
    "ai/README.md": "ai/index.md",
    "security/README.md": "security/index.md",
  },

  title: "Tech News Daily",
  description: "全自動化技術情報聚合站",
  themeConfig: {
    nav: [
      { text: "首頁", link: "/" },
      { text: "前端", link: "/frontend/" },
      { text: "後端", link: "/backend/" },
      { text: "AI", link: "/ai/" },
      { text: "資安", link: "/security/" },
    ],
    sidebar: {
      "/frontend/": [
        { text: "大廳", items: [{ text: "最新資訊總覽", link: "/frontend/" }] },
        {
          text: "每日日誌",
          collapsed: false,
          items: getDailySidebar("frontend"),
        },
      ],
      "/backend/": [
        { text: "大廳", items: [{ text: "最新資訊總覽", link: "/backend/" }] },
        {
          text: "每日日誌",
          collapsed: false,
          items: getDailySidebar("backend"),
        },
      ],
      "/ai/": [
        { text: "大廳", items: [{ text: "最新資訊總覽", link: "/ai/" }] },
        {
          text: "每日日誌",
          collapsed: false,
          items: getDailySidebar("ai"),
        },
      ],
      "/security/": [
        { text: "大廳", items: [{ text: "最新資訊總覽", link: "/security/" }] },
        {
          text: "每日日誌",
          collapsed: false,
          items: getDailySidebar("security"),
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/bobosun0713/tech-news-daily",
      },
    ],
  },
});
