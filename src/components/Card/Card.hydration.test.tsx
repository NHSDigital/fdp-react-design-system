import { describe, it } from 'vitest';
import { hydrateWithoutMismatch } from '../../test-utils/hydrationTest';
import { Card, CardGroup, CardGroupItem } from './Card';

describe('Card (hydration)', () => {
  it('hydrates basic card', () => {
    const jsx = <Card heading="A" description="Desc" />;
    hydrateWithoutMismatch({ ssr: jsx, client: jsx });
  });
  it('hydrates clickable card', () => {
    const ssr = <Card variant="clickable" heading="Go" href="/g" />;
    const client = <Card variant="clickable" heading="Go" href="/g" />;
    hydrateWithoutMismatch({ ssr, client });
  });
  it('hydrates group', () => {
    const ssr = (
      <CardGroup>
        <CardGroupItem><Card heading="One" /></CardGroupItem>
        <CardGroupItem><Card heading="Two" /></CardGroupItem>
      </CardGroup>
    );
    hydrateWithoutMismatch({ ssr, client: ssr });
  });
});
