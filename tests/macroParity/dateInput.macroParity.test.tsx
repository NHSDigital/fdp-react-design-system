import { describe, it, expect } from 'vitest';
import nunjucks from 'nunjucks';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { DateInput } from '../../src/components/DateInput/DateInput';
import { normaliseHtml, loose } from './utils/htmlNormaliser';

const env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/macros'));

describe('DateInput macro parity', () => {
  const fixtures = [
    {
      react: { id: 'dob', values: { day: '01', month: '02', year: '2000' } },
      macro: { id: 'dob', values: { day: '01', month: '02', year: '2000' } }
    },
    {
      react: { id: 'start', hint: { text: 'For example 31 03 1980' }, errorMessage: { text: 'Enter a valid date' }, fieldset: { legend: 'Start date' } },
      macro: { id: 'start', hint: { text: 'For example 31 03 1980' }, errorMessage: { text: 'Enter a valid date' }, fieldset: { legend: 'Start date' } }
    },
    {
      react: { id: 'custom', namePrefix: 'person[start]', items: [ { name: 'day', label: 'DD', classes: 'nhsuk-input--width-2' }, { name: 'month', label: 'MM', classes: 'nhsuk-input--width-2' }, { name: 'year', label: 'YYYY', classes: 'nhsuk-input--width-4' } ] },
      macro: { id: 'custom', namePrefix: 'person[start]', items: [ { name: 'day', label: 'DD', classes: 'nhsuk-input--width-2' }, { name: 'month', label: 'MM', classes: 'nhsuk-input--width-2' }, { name: 'year', label: 'YYYY', classes: 'nhsuk-input--width-4' } ] }
    }
  ];

  fixtures.forEach((f, i) => {
    it(`fixture ${i+1}`, () => {
      const r = normaliseHtml(renderToString(React.createElement(DateInput as any, f.react as any)));
      const m = normaliseHtml(env.renderString(`{% from "date-input.njk" import dateInput %}{{ dateInput(params) }}`, { params: f.macro }));
      expect(loose(r)).toEqual(loose(m));
    });
  });
});
