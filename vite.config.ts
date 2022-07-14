import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const env = process.env;

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
    ],
  }
});
