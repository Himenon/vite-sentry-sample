import { defineConfig } from "vite";
import type { ViteSentryPluginOptions } from "vite-plugin-sentry";
import viteSentry from "vite-plugin-sentry";
import react from "@vitejs/plugin-react";

const env = process.env;

const sentryConfig: ViteSentryPluginOptions = {
  url: "https://sentry.io",
  authToken: env.SENTRY_AUTH_TOKEN,
  org: env.SENTRY_ORG,
  project: env.SENTRY_PROJECT,
  release: env.SENTRY_RELEASE,
  deploy: {
    env: env.SENTRY_ENVIRONMENT,
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
  build: {
    sourcemap: true,
  },
  plugins: [
    react(),
    env.DEPLOY_SENTRY !== "false" ? viteSentry(sentryConfig) : undefined,
  ],
});
