import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/subIframe", component: "subIframe" },
    { path: "/sub2Iframe", component: "sub2Iframe" },
  ],
  npmClient: 'pnpm',
});
