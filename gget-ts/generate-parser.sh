#!/usr/bin/env bash -eu

SOURCE_DIR="../grammar"
TARGET_DIR="src/parser"

# generate parser
$(npm bin)/antlr4ts \
    -no-listener \
    -visitor \
    -Xexact-output-dir \
    -o "$TARGET_DIR" \
    "$SOURCE_DIR"/*.g4
