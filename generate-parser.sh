#!/usr/bin/env bash -eu

for LANG in ts java; do
    DIR="objectpath-$LANG"

    echo "Generating $DIR parser"

    cd "$DIR"
    ./generate-parser.sh
    cd - > /dev/null

    echo
done
