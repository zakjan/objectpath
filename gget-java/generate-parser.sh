#!/usr/bin/env bash -eu

SOURCE_DIR="../grammar"
TARGET_DIR="src/main/java/cz/zakjan/gget/parser"
TARGET_PACKAGE="cz.zakjan.gget.parser"

# generate parser
mvn antlr4:antlr4 \
    -Dantlr4.listener=false \
    -Dantlr4.visitor=true \
    -Dantlr4.package="$TARGET_PACKAGE" \
    -Dantlr4.sourceDirectory="$SOURCE_DIR" \
    -Dantlr4.outputDirectory="$TARGET_DIR"
