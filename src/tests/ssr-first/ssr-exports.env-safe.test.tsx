/* @vitest-environment node */
import React from 'react';
import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import {
  ButtonServer,
  Label,
  Heading,
  Hint,
  ErrorMessage,
  Fieldset,
  SkipLink,
  Tag,
} from '../../components/ssr';

describe('SSR-first exports (node environment)', () => {
  it('renders ButtonServer (button) to string without DOM', () => {
    const html = renderToString(<ButtonServer variant="primary">Continue</ButtonServer>);
    expect(html).toContain('button');
    expect(html).toContain('Continue');
  });

  it('renders ButtonServer (anchor) to string without DOM', () => {
    const html = renderToString(<ButtonServer href="#next" variant="secondary">Next</ButtonServer>);
    expect(html).toContain('a');
    expect(html).toContain('Next');
  });

  it('renders basic text and utility components', () => {
    expect(renderToString(<Label htmlFor="x">Label</Label>)).toContain('Label');
    expect(renderToString(<Heading size="l">Title</Heading>)).toContain('Title');
    expect(renderToString(<Hint>Help</Hint>)).toContain('Help');
    expect(renderToString(<ErrorMessage>Error</ErrorMessage>)).toContain('Error');
    expect(renderToString(<SkipLink href="#content" />)).toContain('href="#content"');
    expect(renderToString(<Tag>New</Tag>)).toContain('New');
  });

  it('renders Fieldset with legend', () => {
    const html = renderToString(
      <Fieldset legend={{ text: 'Your details', isPageHeading: true, size: 'l' }}>
        <div />
      </Fieldset>
    );
    expect(html).toContain('fieldset');
    expect(html).toContain('Your details');
  });

  it('does not access window/document during render', () => {
    // If any component accessed window/document at module init or render, this would throw under node env.
    const html = renderToString(
      <div>
        <ButtonServer>Ok</ButtonServer>
        <Heading size="m">H</Heading>
      </div>
    );
    expect(typeof html).toBe('string');
  });
});
