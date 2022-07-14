# !/bin/bash

echo "Parameter"
echo "  APP_VERSION        = $APP_VERSION"
echo "  SENTRY_PROJECT     = $SENTRY_PROJECT"
echo "  SENTRY_ENVIRONMENT = $SENTRY_ENVIRONMENT"

echo ""

echo "> sentry-cli releases deploys"
npx sentry-cli releases deploys "$APP_VERSION" new -e $SENTRY_ENVIRONMENT

echo "> sentry-cli releases new"
npx sentry-cli releases new -p $SENTRY_PROJECT $APP_VERSION

echo "> sentry-cli releases new files"
npx sentry-cli releases -p $SENTRY_PROJECT files $APP_VERSION upload-sourcemaps ./dist/assets --rewrite --url-prefix '~/vite-sentry-sample/assets'

echo "> sentry-cli releases set-commits --auto"
npx sentry-cli releases set-commits --auto $APP_VERSION --ignore-missing 

echo "> sentry-cli releases finalize"
npx sentry-cli releases finalize $APP_VERSION

echo "> sentry-cli releases deploys"
npx sentry-cli releases deploys $APP_VERSION new -e $SENTRY_ENVIRONMENT
