# Security Policy

## Supported Versions

We actively support the following versions of the NHS FDP Design System with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x (alpha)   | :white_check_mark: |

**Note:** This project is currently in alpha. Once we reach v1.0.0, we will maintain the current major version and the previous major version with security updates.

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security vulnerability in the NHS FDP Design System, please report it responsibly.

### How to Report

**Please DO NOT report security vulnerabilities through public GitHub issues.**

Instead, please report vulnerabilities through one of the following methods:

1. **GitHub Security Advisories** (Preferred):
   - Navigate to the [Security Advisories](https://github.com/fergusbisset/nhs-fdp-design-system/security/advisories) page
   - Click "Report a vulnerability"
   - Fill in the details of the vulnerability

2. **Email**:
   - Send details to the repository maintainer
   - Include "SECURITY" in the subject line
   - Provide a detailed description of the vulnerability

### What to Include

When reporting a vulnerability, please include:

- **Type of vulnerability** (e.g., XSS, CSRF, injection, etc.)
- **Full paths of source file(s)** related to the vulnerability
- **Location of the affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the vulnerability** - what can an attacker accomplish?
- **Your contact information** for follow-up questions

### What to Expect

After you submit a vulnerability report:

- **Acknowledgment**: We will acknowledge receipt within **48 hours**
- **Assessment**: We will assess the vulnerability and determine its severity within **5 business days**
- **Updates**: We will keep you informed of our progress
- **Resolution**: We will work to release a fix as quickly as possible:
  - **Critical vulnerabilities**: Patched within 7 days
  - **High severity**: Patched within 14 days
  - **Medium/Low severity**: Patched in next regular release
- **Credit**: We will credit you in the security advisory (unless you prefer to remain anonymous)

## Security Best Practices for Users

When using the NHS FDP Design System in your applications:

### 1. Keep Dependencies Updated

```bash
# Check for security vulnerabilities
npm audit

# Update to latest patch versions
npm update

# Update to latest version
npm install @fergusbisset/nhs-fdp-design-system@latest
```

### 2. Content Security Policy (CSP)

If you're using components with inline styles or dynamic content, configure your CSP headers appropriately:

```
Content-Security-Policy:
  default-src 'self';
  style-src 'self' 'unsafe-inline';
  script-src 'self';
```

**Note:** Some components may require `'unsafe-inline'` for styles. We're working to eliminate this requirement.

### 3. Server-Side Rendering (SSR) Security

When using SSR components:

- Always sanitize user input before passing to components
- Use the SSR-safe variants (`/ssr` exports) in server contexts
- Validate all data before rendering
- Never trust client-provided data in server components

Example:
```tsx
// ❌ DON'T: Unsanitized user input
<Header serviceName={userInput} />

// ✅ DO: Sanitize input
import DOMPurify from 'isomorphic-dompurify';
<Header serviceName={DOMPurify.sanitize(userInput)} />
```

### 4. Accessibility & Security

Many security vulnerabilities arise from accessibility issues:

- Use semantic HTML (provided by our components)
- Ensure proper ARIA labels
- Validate form inputs
- Use our form validation components

### 5. XSS Prevention

Our components escape user content by default, but:

- Never use `dangerouslySetInnerHTML` with user content
- Sanitize any HTML before rendering
- Use our built-in input validation components
- Be cautious with `href` attributes in links

```tsx
// ❌ DANGEROUS
<Button href={userProvidedUrl}>Click me</Button>

// ✅ SAFE
import { isValidUrl } from './utils';
const safeUrl = isValidUrl(userProvidedUrl) ? userProvidedUrl : '#';
<Button href={safeUrl}>Click me</Button>
```

## Known Security Considerations

### Progressive Enhancement Behaviors

Our behavior layer (client-side enhancement) uses `data-*` attributes:

- Behaviors are opt-in and don't execute unless explicitly imported
- No `eval()` or `Function()` constructors are used
- All event handlers are properly scoped
- Behaviors can be safely torn down with `teardownAll()`

### Design Tokens

Design tokens are generated at build time and injected as CSS variables:

- No runtime token generation
- No user-controllable token values
- Tokens are static and type-safe

### Data Visualization Components

D3 and visualization components:

- SVG elements are properly escaped
- No user-controlled `<script>` injection
- Data is validated before rendering
- Use our provided data validation utilities

## Security Tools in This Repository

We use the following automated security tools:

- **Dependabot**: Automated dependency updates and vulnerability alerts
- **npm audit**: Checks for known vulnerabilities in dependencies
- **CodeQL**: Static analysis for security vulnerabilities
- **Dependency Review**: Automated review of dependency changes in PRs

## Security Release Process

When we release a security fix:

1. **Private Fix**: We develop the fix in a private branch
2. **Security Advisory**: We create a GitHub Security Advisory
3. **Patch Release**: We release a patch version (e.g., 0.0.44 → 0.0.45)
4. **Notification**: We notify users through:
   - GitHub Security Advisory
   - Release notes
   - npm security advisories (when published to npm)
5. **Disclosure**: After users have had time to update (typically 30 days), we publish full details

## Scope

This security policy applies to:

- ✅ The `@fergusbisset/nhs-fdp-design-system` package
- ✅ All components in the design system
- ✅ Build tools and scripts that ship with the package
- ✅ Documentation and example code
- ❌ Third-party dependencies (report to their respective maintainers)
- ❌ Applications built using this design system (your responsibility)

## Contact

For security-related questions that are not vulnerability reports:

- Open a [GitHub Discussion](https://github.com/fergusbisset/nhs-fdp-design-system/discussions)
- Tag your discussion with "security"

## Acknowledgments

We appreciate the security research community and will acknowledge contributors who report valid security issues (with their permission).

---

**Last Updated**: 2025-01-22
