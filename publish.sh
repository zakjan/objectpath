#!/usr/bin/env bash -eu

for LANG in ts java; do
    DIR="objectpath-$LANG"

    echo "Publishing $DIR"

    cd "$DIR"
    ./publish.sh
    cd - > /dev/null

    echo
done
