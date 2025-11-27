#!/bin/bash
# Wrapper to run build:parity with npm warnings filtered out
# Filters: "always-auth" deprecation warnings from global ~/.npmrc

npm run build:parity 2>&1 | grep -v "npm warn Unknown.*always-auth" | grep -v "This will stop working"
exit ${PIPESTATUS[0]}
