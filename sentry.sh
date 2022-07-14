# !/bin/bash

echo "APP_VERSION        = $APP_VERSION"
echo "SENTRY_PROJECT     = $SENTRY_PROJECT"
echo "SENTRY_ENVIRONMENT = $SENTRY_ENVIRONMENT"

sentry-cli releases deploys "$APP_VERSION" new -e $SENTRY_ENVIRONMENT
sentry-cli releases new -p $SENTRY_PROJECT $APP_VERSION
sentry-cli releases -p $SENTRY_PROJECT files $APP_VERSION upload-sourcemaps ./dist/assets --rewrite --url-prefix '~/vite-sentry-sample/assets'
sentry-cli releases set-commits --auto $APP_VERSION
sentry-cli releases finalize $APP_VERSION
sentry-cli releases deploys $APP_VERSION new -e $SENTRY_ENVIRONMENT
