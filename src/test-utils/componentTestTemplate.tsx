/**
 * Component Test Template (SSR / Client / Hydration)
 * -------------------------------------------------
 * Usage:
 * 1. Duplicate this file three times naming:
 *      ComponentName.ssr.test.tsx
 *      ComponentName.client.test.tsx
 *      ComponentName.hydration.test.tsx
 * 2. Replace all __COMPONENT__ markers with your component name.
 * 3. Adjust example test cases as needed.
 * 4. Remove any sections not relevant for the component (e.g. toggle logic).
 *
 * Conventions:
 *  - SSR tests use renderSSR for static markup assertions (no interactivity).
 *  - Client tests use @testing-library/react render + events for behaviour.
 *  - Hydration tests use hydrateWithoutMismatch to assert no console hydration warnings.
 *  - Prefer small focused assertions over broad snapshots.
 */

// ================== SSR TEST TEMPLATE ==================
// File: __COMPONENT__.ssr.test.tsx
// import { describe, it, expect } from 'vitest';
// import { renderSSR } from '../../test-utils/renderSSR';
// import { __COMPONENT__ } from './__COMPONENT__';
//
// describe('__COMPONENT__ (SSR)', () => {
//   it('renders basic structure', () => {
//     const { container, getByText } = renderSSR(<__COMPONENT__ />);
//     // Example assertion:
//     // expect(container.querySelector('div.__COMPONENT__')).toBeTruthy();
//     // expect(getByText('Example')).toBeTruthy();
//   });
//   // Add structure / accessibility / attributes tests here
// });

// ================== CLIENT TEST TEMPLATE ==================
// File: __COMPONENT__.client.test.tsx
// import React from 'react';
// import { describe, it, expect } from 'vitest';
// import { render, fireEvent } from '@testing-library/react';
// import { __COMPONENT__ } from './__COMPONENT__';
//
// describe('__COMPONENT__ (client)', () => {
//   it('renders', () => {
//     const { container } = render(<__COMPONENT__ />);
//     expect(container.firstChild).toBeTruthy();
//   });
//   // Example interactive test:
//   // it('toggles when clicked', () => {
//   //   const { getByRole } = render(<__COMPONENT__ />);
//   //   const button = getByRole('button');
//   //   fireEvent.click(button);
//   //   expect(...).toBe(...);
//   // });
// });

// ================== HYDRATION TEST TEMPLATE ==================
// File: __COMPONENT__.hydration.test.tsx
// import React from 'react';
// import { describe, it, expect } from 'vitest';
// import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
// import { __COMPONENT__ } from './__COMPONENT__';
//
// describe('__COMPONENT__ (hydration)', () => {
//   it('hydrates without mismatch', () => {
//     hydrateWithoutMismatch({
//       ssr: <__COMPONENT__ />,
//       client: <__COMPONENT__ />,
//       assert: (container) => {
//         // Example structural assertion after hydration
//         expect(container.firstChild).toBeTruthy();
//       }
//     });
//   });
//   // Add additional states / props ensuring markup parity across SSR & client
// });

// This file is not intended to be executed directly.
export {};
