/// <reference types="vitest/globals" />
/// <reference types="@testing-library/jest-dom" />
// Use the Vitest-specific export so matchers augment Vitest's Assertion type
import '@testing-library/jest-dom/vitest';
// Removed custom matcher interface which caused parser issues under ESLint v9.
