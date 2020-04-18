#! /bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
OUT="dist"
DIR_OUT="$DIR/$OUT"
ASSETS_PREFIX="/home"
SEARCH="/_next/"
REPLACE="$ASSETS_PREFIX$SEARCH"
COMMIT_MSG="Build $OUT"

yarn export -o "$DIR_OUT"
touch "$DIR_OUT/.nojekyll"
sed -i "s|$SEARCH|$REPLACE|g" "$DIR_OUT/index.html"
git add "$DIR_OUT" && git commit -m "$COMMIT_MSG"
git subtree push --prefix "$OUT" origin gh-pages
