# Changelog

All notable changes to this project will be documented in this file. This format loosely follows [Keep a Changelog](https://keepachangelog.com/) and versioning uses semantic pre-release identifiers.

## 0.0.32-alpha.2 - 2025-08-16

### Added

- Initial CHANGELOG
- Polyfills: `HTMLFormElement.requestSubmit`, enhanced `scrollIntoView` safety wrapper.

### Fixed

- Eliminated act() warning in `HeaderSSR.simple.test` by wrapping render in `act`.
- Removed controlled/uncontrolled warning for range input by refactoring range rendering logic (no simultaneous `value` + `defaultValue`).
- Suppressed read-only select warnings by adding `onChange` handler in controlled tests.
- Minor test environment robustness improvements (font/style handling retained).

### Notes

- Future alpha bumps (alpha.3+): will focus on reducing remaining console warnings (ErrorSummary nested structure) and SSR focus simulation improvements.
