import { defineConfig } from "vite";
import type { ViteSentryPluginOptions } from "vite-plugin-sentry";
import viteSentry from "vite-plugin-sentry";
import react from "@vitejs/plugin-react";

const sentryConfig: ViteSentryPluginOptions = {
  url: "https://my.ondemand.sentry.com",
  authToken: "<SECRET_TOKEN_HERE>",
  org: "my_org",
  project: "my_project",
  release: "1.0",
  deploy: {
    env: "production",
  },
  setCommits: {
    auto: true,
  },
  sourceMaps: {
    include: ["./dist/assets"],
    ignore: ["node_modules"],
    urlPrefix: "~/assets",
  },
};

export default defineConfig({
  plugins: [react(), viteSentry(sentryConfig)],
});
