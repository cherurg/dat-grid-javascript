#!/usr/bin/env bash
tsc --outDir temp_src
ava temp_src/**/__tests__/**/*.js --fail-fast --verbose
#rm -rf temp_src
