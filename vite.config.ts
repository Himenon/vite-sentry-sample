import { defineConfig } from "vite";
import type { ViteSentryPluginOptions } from "vite-plugin-sentry";
import viteSentry from "vite-plugin-sentry";
import react from "@vitejs/plugin-react";

const sentryConfig: ViteSentryPluginOptions = {
  url: process.env.SENTRY_DSN_URL,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  release: "1.0",
  deploy: {
    env: process.env.SENTRY_ENVIRONMENT,
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
