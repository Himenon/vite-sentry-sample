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
  release: env.APP_VERSION,
  deploy: {
    env: env.SENTRY_ENVIRONMENT || "development",
  },
  sourceMaps: {
    include: ["./dist/assets"],
    ignore: ["node_modules"],
    urlPrefix: "~/vite-sentry-sample/assets",
  },
};

export default defineConfig(() => {
  return {
    base: "/vite-sentry-sample/",
    define: {
      "process.env.APP_VERSION": JSON.stringify(env.APP_VERSION),
      "process.env.SENTRY_DSN_URL": JSON.stringify(env.SENTRY_DSN_URL),
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      env.DEPLOY_SENTRY === "true" ? viteSentry(sentryConfig) : undefined,
    ],
  }
});
