# Publishing Guide

## Automated Publishing (Recommended)

The package now includes a smart publish script that automatically detects prerelease versions and applies the correct `--tag` parameter.

### For Prerelease Versions (Alpha/Beta/RC)

```bash
# Alpha prerelease (e.g., 0.0.44-alpha.2)
npm run release:prerelease

# Beta prerelease (e.g., 0.0.44-beta.1)
npm run release:prerelease:beta
```

**What happens:**

1. Runs `preversion` checks (linting, SSR tests, full tests, build)
2. Bumps version with appropriate preid
3. Commits and tags
4. Pushes to GitHub
5. **Automatically publishes with correct tag** (alpha/beta/rc)

### For Stable Releases

```bash
# Patch release (0.0.44 → 0.0.45)
npm run release:patch

# Minor release (0.0.44 → 0.1.0)
npm run release:minor

# Major release (0.0.44 → 1.0.0)
npm run release:major
```

**What happens:**

1. Same checks as prerelease
2. Bumps stable version
3. **Automatically publishes with `latest` tag**

## Manual Publishing (If Needed)

If you need to publish manually:

```bash
# For prerelease versions
npm run publish:alpha
npm run publish:beta

# For stable versions
npm run publish:latest
```

## Version Detection Logic

The `scripts/publish-package.cjs` script automatically detects:

- `-alpha.X` → publishes with `--tag alpha`
- `-beta.X` → publishes with `--tag beta`
- `-rc.X` → publishes with `--tag next`
- `-dev`, `-pre`, `-preview`, `-canary`, `-experimental` → publishes with respective tag
- No suffix → publishes with `--tag latest`

## Installation

Users can install specific versions:

```bash
# Latest alpha
npm install @fergusbisset/nhs-fdp-design-system@alpha

# Latest beta
npm install @fergusbisset/nhs-fdp-design-system@beta

# Latest stable
npm install @fergusbisset/nhs-fdp-design-system
# or explicitly:
npm install @fergusbisset/nhs-fdp-design-system@latest

# Specific version
npm install @fergusbisset/nhs-fdp-design-system@0.0.44-alpha.1
```

## Benefits

✅ **No more publish failures** - Automatically includes `--tag` for prereleases  
✅ **Consistent tagging** - Same logic every time  
✅ **User-friendly** - Simple commands for common workflows  
✅ **Safe** - All quality gates run before publish  

## Troubleshooting

If publish fails:

1. **Check npm authentication:**

   ```bash
   npm whoami --registry=https://npm.pkg.github.com
   ```

2. **Verify .npmrc configuration:**

   ```text
   @fergusbisset:registry=https://npm.pkg.github.com
   //npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
   ```

3. **Manual publish with explicit tag:**

   ```bash
   npm publish --registry=https://npm.pkg.github.com --tag alpha
   ```

## Previous Issue

Before this change, the `postversion` script would call:

```bash
npm publish --registry=https://npm.pkg.github.com
```

This would fail for prerelease versions with:

```text
npm error You must specify a tag using --tag when publishing a prerelease version.
```

Now it automatically detects the version type and includes the correct tag. 🎉
