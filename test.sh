#!/usr/bin/env bash -eu

for LANG in ts java; do
    DIR="objectpath-$LANG"

    echo "Running tests $DIR"

    cd "$DIR"
    ./test.sh
    cd - > /dev/null

    echo
done
