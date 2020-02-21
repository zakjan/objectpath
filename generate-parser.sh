#!/usr/bin/env bash -eu

for LANG in ts java; do
    DIR="objectpath-$LANG"

    echo "Generating parser $DIR"

    cd "$DIR"
    ./generate-parser.sh
    cd - > /dev/null

    echo
done
