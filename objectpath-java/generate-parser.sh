#!/usr/bin/env bash -eu

SOURCE_DIR="grammar"
TARGET_DIR="src/main/java/cz/zakjan/objectpath/parser"
TARGET_PACKAGE="cz.zakjan.objectpath.parser"

# generate parser
mvn antlr4:antlr4 \
    -Dantlr4.listener=false \
    -Dantlr4.visitor=true \
    -Dantlr4.package="$TARGET_PACKAGE" \
    -Dantlr4.sourceDirectory="$SOURCE_DIR" \
    -Dantlr4.outputDirectory="$TARGET_DIR"
