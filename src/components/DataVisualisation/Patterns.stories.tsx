import React, { useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartContainer } from './index';
import { generatePattern, patternDataUrl, PatternKind } from './utils/patterns';

const meta: Meta = { title: 'Data Visualisation/Utilities/Patterns' };
export default meta;

type Story = StoryObj;

export const PatternGallery: Story = {
  render: () => {
    const kinds: PatternKind[] = [
      'diagonal','diagonal-dense','rev-diagonal','rev-diagonal-dense',
      'horizontal','horizontal-dense','vertical','vertical-dense',
      'cross','cross-dense','grid','grid-dense',
      'dot','dot-dense','checker','zigzag','weave','ring'
    ];
    const patterns = kinds.map(k => generatePattern(k, { id: `pat-${k}` }));
    return (
      <ChartContainer title="Pattern gallery" description="Non-colour encodings (SVG patterns)" source="Utility">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(72px, 1fr))', gap: 12 }}>
          {patterns.map(p => {
            const kind = p.id.replace('pat-','');
            return (
              <div key={p.id} style={{ fontSize: 11, fontFamily: 'monospace' }}>
                <div style={{ width: 64, height: 64, border: '1px solid #ccc', backgroundImage: `url(${patternDataUrl(p)})`, backgroundSize: 'auto', marginBottom: 4 }} />
                <div style={{ textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{kind}</div>
              </div>
            );
          })}
        </div>
      </ChartContainer>
    );
  }
};
