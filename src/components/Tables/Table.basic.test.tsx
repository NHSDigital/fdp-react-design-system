import { render } from '@testing-library/react';
import { describe, it } from 'vitest';
import Table from './Table';

describe('Table - Basic', () => {
  it('can import and render', () => {
    const rows = [[{ text: 'test' }]];
    render(<Table rows={rows} />);
  });
});
