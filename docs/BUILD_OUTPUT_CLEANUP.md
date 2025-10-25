# Build Output Cleanup

## Changes Made

### 1. Reduced Script Verbosity

**`scripts/update-css-exports.cjs`**

- **Before**: Listed all 68 CSS files individually, then listed all 68 "Export already exists" messages (136+ lines)
- **After**: Single summary line: `[update-css-exports] Found 68 CSS files, added 0 new exports (104 total)`
- **Savings**: ~135 lines of output removed

### 2. npm Warning Suppression

**Issue**: Global `~/.npmrc` contains `always-auth=true` which triggers deprecation warnings in npm 10+

**Created**:

- `scripts/build-parity-quiet.sh` - Shell wrapper that filters npm warnings
- `npm run build:quiet` - Alias for clean build output

**Result**: Filters out ~34 instances of:

```text
npm warn Unknown user config "always-auth". This will stop working in the next major version of npm.
npm warn Unknown env config "always-auth". This will stop working in the next major version of npm.
```

### 3. Project `.npmrc` Created

Added project-level `.npmrc` with GitHub Packages configuration and documentation about the `always-auth` deprecation.

## Usage

### Clean Build (Recommended)

```bash
npm run build:quiet
```

- Filters out npm deprecation warnings
- Shows only essential build output
- Same functionality as `build:parity`

### Standard Build

```bash
npm run build:parity
```

- Shows all output including npm warnings
- Useful for debugging build issues

## Build Output Comparison

### Before (with warnings and verbose logs)

```text
npm warn Unknown user config "always-auth"...  [×34 times]
Found 68 CSS files:
  - Account/Account.css
  - ActionLink/ActionLink.css
  ...  [×68 files]
Export already exists: "./components/Account/css"...  [×68 times]
Updated package.json with 104 total exports
Added exports for 68 CSS files
```

**Total**: ~170 lines of mostly redundant output

### After (clean and concise)

```text
[tokens] Unchanged – skipping style-dictionary build
vite v7.1.3 building for production...
✓ 160 modules transformed.
✓ built in 276ms
[update-css-exports] Found 68 CSS files, added 0 new exports (104 total)
[verify-css-exports] All 68 component CSS files have export entries.
[build-component-js] Built 68 component JS entry files.
```

**Total**: ~30 essential lines

## Fixing npm Warnings Permanently

To completely remove the npm warnings, remove `always-auth=true` from your global `~/.npmrc`:

```bash
# Edit global npmrc
vi ~/.npmrc

# Or remove the line with sed
sed -i '' '/always-auth/d' ~/.npmrc
```

**Note**: `always-auth` is deprecated in npm 10+ and authentication now works via auth tokens without this setting.

## Technical Details

### Script Changes

**`scripts/update-css-exports.cjs`**

```javascript
// Before: Verbose logging for each file
console.log(`Found ${cssFiles.length} CSS files:`);
cssFiles.forEach(file => console.log(`  - ${file}`));
// ... process files ...
console.log(`Added export: "${exportKey}" -> "${exportPath}"`);
console.log(`Export already exists: ...`);

// After: Single summary line
let addedCount = 0;
// ... process files, increment addedCount ...
console.log(`[update-css-exports] Found ${cssFiles.length} CSS files, added ${addedCount} new exports (${Object.keys(newExports).length} total)`);
```

**`scripts/build-parity-quiet.sh`**

```bash
#!/bin/bash
# Filters npm warnings from build output
npm run build:parity 2>&1 | grep -v "npm warn Unknown.*always-auth" | grep -v "This will stop working"
exit ${PIPESTATUS[0]}
```

### Verification Scripts

All verification scripts (`verify-css-exports.cjs`, `verify-js-entries.cjs`, `verify-component-parity.cjs`) already used concise single-line output format - no changes needed.

## CI/CD Considerations

- **CI environments**: Use `npm run build:parity` to see all warnings (helps catch issues)
- **Local development**: Use `npm run build:quiet` for cleaner terminal output
- **Release workflows**: Use `build:parity` to ensure no warnings are missed

## Benefits

1. **Cleaner terminal**: ~85% reduction in output lines
2. **Faster scanning**: Easy to spot actual errors or important messages
3. **Professional appearance**: Concise, informative output
4. **Backward compatible**: Original `build:parity` unchanged, new `build:quiet` is opt-in
5. **Preserves important info**: All error messages, build times, and verification results still shown
