# !/bin/bash

echo "Parameter"
echo "  APP_VERSION        = $APP_VERSION"
echo "  SENTRY_PROJECT     = $SENTRY_PROJECT"
echo "  SENTRY_ENVIRONMENT = $SENTRY_ENVIRONMENT"

GIT_REF=$(git describe --always)
SENTRY_COMMIT="$SENTRY_PROJECT@$GIT_REF"


echo ""

echo "> sentry-cli releases deploys"
npx sentry-cli releases deploys "$APP_VERSION" new -e $SENTRY_ENVIRONMENT
echo ""

# 指定したプロジェクトに新たなリリース定義を作成します
echo "> sentry-cli releases new"
npx sentry-cli releases new -p $SENTRY_PROJECT $APP_VERSION
echo ""

# リリースにソースマップを紐付け
echo "> sentry-cli releases new files"
npx sentry-cli releases -p $SENTRY_PROJECT files $APP_VERSION upload-sourcemaps ./dist/assets --rewrite --url-prefix '~/vite-sentry-sample/assets'
echo ""

# 指定したリリースにコミット履歴を紐付け
# @see https://docs.sentry.io/product/cli/releases/#sentry-cli-commit-integration
echo "> sentry-cli releases set-commits --auto"
npx sentry-cli releases set-commits $APP_VERSION --commit "$SENTRY_COMMIT" --ignore-missing
echo ""

# リリース内容を確定
echo "> sentry-cli releases finalize"
npx sentry-cli releases finalize $APP_VERSION
echo ""

# 確定させたリリースが、正式にデプロイされたことを通知
echo "> sentry-cli releases deploys"
npx sentry-cli releases deploys $APP_VERSION new -e $SENTRY_ENVIRONMENT
echo ""
