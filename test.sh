#!/usr/bin/env bash -eu

for LANG in ts java; do
    DIR="gget-$LANG"

    echo "Running $DIR tests"

    cd "$DIR"
    ./test.sh
    cd - > /dev/null

    echo
done
