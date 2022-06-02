import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import "./index.css";

Sentry.init({
  dsn: process.env.SENTRY_DSN_URL,
  integrations: [new BrowserTracing()],
  tracesSampleRate: 1.0,
  debug: true,
  release: process.env.APP_VERSION
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
