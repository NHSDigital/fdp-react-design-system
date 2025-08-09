# NHS FDP Design System - Installation Guide

## Setting up `.npmrc` for Package Access

This guide will help you configure your `.npmrc` file to install and use the `@fergusbisset/nhs-fdp-design-system` package.

### Option 2: GitHub Packages Registry

If the package is published to GitHub Packages, you'll need to configure your `.npmrc`:

#### Global Configuration (recommended for personal development)

Create or edit your global `.npmrc` file:

**Step 1: Create/edit the file**
```bash
# Open the file in your editor (replace YOUR_ACTUAL_TOKEN with your real token)
nano ~/.npmrc
# or
code ~/.npmrc
```

**Step 2: Add this content to ~/.npmrc**
```
# Configure the registry for @fergusbisset scoped packages
@fergusbisset:registry=https://npm.pkg.github.com

# Add your GitHub personal access token (replace YOUR_GITHUB_TOKEN with actual token)
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

**Important:** 
- Replace `YOUR_GITHUB_TOKEN` with your actual GitHub Personal Access Token
- Do NOT source this file - npm reads it automatically
- No need to run any commands after creating the file

#### Project-specific Configuration

Alternatively, create a `.npmrc` file in your project root:

```bash
# Location: your-project/.npmrc

@fergusbisset:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

### Option 3: Private npm Registry

If using a private npm registry:

```bash
# Location: ~/.npmrc or your-project/.npmrc

@fergusbisset:registry=https://your-private-registry.com
//your-private-registry.com/:_authToken=YOUR_AUTH_TOKEN
```

## Setting up GitHub Personal Access Token

If using GitHub Packages, you'll need a Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Set an expiration date
4. Select scopes:
   - ✅ `read:packages` (to download packages)
   - ✅ `repo` (if the repository is private)
5. Copy the generated token
6. Add it to your `.npmrc` file

## Quick Setup Verification

After setting up your `.npmrc`, verify everything is working:

```bash
# 1. Check if npm can read your config
npm config list

# 2. Verify authentication (if using GitHub Packages)
npm whoami --registry=https://npm.pkg.github.com

# 3. Test package access
npm view @fergusbisset/nhs-fdp-design-system
```

If these commands work without errors, your setup is correct!

## Installation Commands

### Install the package

```bash
npm install @fergusbisset/nhs-fdp-design-system
```

### Install specific version

```bash
npm install @fergusbisset/nhs-fdp-design-system@0.0.5
```

### Install as development dependency

```bash
npm install --save-dev @fergusbisset/nhs-fdp-design-system
```

## Usage in Your Project

### TypeScript/JavaScript Import

```typescript
import { Hero, Button, Card } from '@fergusbisset/nhs-fdp-design-system';
import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css';
```

### CSS Import (if needed separately)

```css
@import '@fergusbisset/nhs-fdp-design-system/dist/nhs-fdp-design-system.css';
```

## Troubleshooting

### Common Issues

#### "404 Not Found" Error

- Verify the package name is correct: `@fergusbisset/nhs-fdp-design-system`
- Check if you have access to the repository
- Ensure your authentication token is valid

#### "403 Forbidden" Error

- Your GitHub token may lack the necessary permissions
- Regenerate your token with `read:packages` scope
- For private repos, ensure you have repository access

#### "401 Unauthorized" Error

- Check if your authentication token is correctly set in `.npmrc`
- Verify the token hasn't expired

### Verify Installation

```bash
# Check if package is installed
npm list @fergusbisset/nhs-fdp-design-system

# Check package info
npm info @fergusbisset/nhs-fdp-design-system
```

## Security Best Practices

1. **Never commit `.npmrc` with tokens to version control**
2. **Use environment variables for CI/CD:**

   ```bash
   //npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
   ```

3. **Set token expiration dates**
4. **Use minimal required permissions**

## Team Setup

For team environments, consider:

1. **Shared `.npmrc` template** (without tokens)
2. **Environment variable documentation**
3. **Token management guidelines**
4. **CI/CD pipeline configuration**

## Support

If you encounter issues:

1. Check this guide first
2. Verify your `.npmrc` configuration
3. Test with `npm whoami` to verify authentication
4. Contact the package maintainer: Fergus Bisset

---

**Package Information:**

- Name: `@fergusbisset/nhs-fdp-design-system`
- Current Version: `0.0.5`
- Author: Fergus Bisset
- Description: NHS FDP Frontend Development Platform Design System - A comprehensive React component library built with design tokens
