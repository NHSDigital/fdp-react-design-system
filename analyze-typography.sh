#!/bin/bash

# NHS FDP Typography Migration Script
# This script analyzes components and identifies typography that needs updating

echo "🔍 NHS FDP Typography Analysis"
echo "================================"

# Find all SCSS files in components
echo "📋 Components with typography issues:"
echo ""

# Check for old token references that should use mixins
echo "🚨 Components using manual font-size/line-height instead of mixins:"
grep -r "font-size:" src/components/ --include="*.scss" | grep -v "nhs-fdp-font" | head -20

echo ""
echo "🚨 Components using old token imports:"
grep -r "packages/nhs-fdp/dist/scss/tokens" src/components/ --include="*.scss" | head -20

echo ""
echo "📊 Typography patterns to check against NHS UK:"

# List components that have typography
echo ""
echo "🎯 Components with font-size that need NHS UK comparison:"
find src/components/ -name "*.scss" -exec grep -l "font-size\|line-height" {} \; | head -20

echo ""
echo "📝 NHS UK Typography Reference:"
echo "- Button: @include nhsuk-font(19, \$weight: bold)"
echo "- Label: @include nhsuk-font(19)"
echo "- Label XL: @include nhsuk-font-size(48) + bold"
echo "- Label L: @include nhsuk-font-size(36) + bold"
echo "- Label M: @include nhsuk-font-size(26) + bold"
echo "- Label S: @include nhsuk-font-size(19) + bold"
echo "- Panel: @include nhsuk-font-size(26)"
echo "- Panel Title: @include nhsuk-font-size(48)"
