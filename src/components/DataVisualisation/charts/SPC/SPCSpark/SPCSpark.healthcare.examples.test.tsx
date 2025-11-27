import { render } from '@testing-library/react';
import { SPCSpark } from './SPCSpark';
import { ImprovementDirection } from '../engine';

// Datasets replicated from SPCChart.healthcare.stories for parity
const ed4hValues = [69,70,68,71,70,69,70,69,71,70,68,69,78,79,80,81,79,78,82,81,80,79,81,80];
const losValues = [7.4,7.5,7.6,7.3,7.4,7.5,7.2,7.3,7.1,7.2,7.0,7.1,6.8,6.7,6.6,6.5,6.4,6.3,6.2,6.1,6.2,6.0,6.1,6.0];
const readmitValues = [9.1,9.0,9.2,9.3,9.1,9.0,9.2,9.3,9.1,9.0,9.2,9.1,9.4,9.6,9.5,9.2,9.3,9.1,9.0,9.2,9.1,9.0,9.1,9.0];
const handHygieneValues = [86,87,85,88,87,86,87,88,86,87,88,87,92,93,94,92,93,94,93,92,85,93,94,93];
const fallsValues = [5.8,5.9,5.7,5.8,5.9,5.6,5.7,5.5,5.6,5.4,5.5,5.3,5.2,5.1,5.0,4.9,5.6,4.8,4.7,4.6,4.5,4.4,4.5,4.3];
const medErrorGaps = [3,4,2,5,4,3,4,5,4,3,6,7,8,9,7,10,12,14,15,6,20,9,18,7];
const pressureUlcerCounts = [8,7,9,8,7,10,9,8,11,9,12,13,14,15,13,16,18,19,17,20,5,21,22,23];
const rttValues = [76,79.7,76.2,74.4,74.5,74.2,75.2,75.8,74.9,75.0,74.8,74.9,79,81,80.7,81.2,81,80.8,81,81.3,81.6,82,83.2,84.5,84];

const wrap = (vals:number[]) => vals.map(v=>({value:v}));

describe('SPCSpark Healthcare Example Parity', () => {
  it('renders ED4H compliance spark with auto classification', () => {
    const { container } = render(<SPCSpark data={wrap(ed4hValues)} showLimits metricImprovement={ImprovementDirection.Up} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders LOS spark (direction lower)', () => {
    const { container } = render(<SPCSpark data={wrap(losValues)} showLimits metricImprovement={ImprovementDirection.Down} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders Readmission spark', () => {
    const { container } = render(<SPCSpark data={wrap(readmitValues)} showLimits metricImprovement={ImprovementDirection.Down} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders Hand Hygiene spark', () => {
    const { container } = render(<SPCSpark data={wrap(handHygieneValues)} showLimits metricImprovement={ImprovementDirection.Up} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders Falls spark', () => {
    const { container } = render(<SPCSpark data={wrap(fallsValues)} showLimits metricImprovement={ImprovementDirection.Down} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders Medication Errors spark', () => {
    const { container } = render(<SPCSpark data={wrap(medErrorGaps)} showLimits metricImprovement={ImprovementDirection.Up} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders Pressure Ulcers spark', () => {
    const { container } = render(<SPCSpark data={wrap(pressureUlcerCounts)} showLimits metricImprovement={ImprovementDirection.Up} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
  it('renders RTT spark', () => {
    const { container } = render(<SPCSpark data={wrap(rttValues)} showLimits metricImprovement={ImprovementDirection.Up} />);
    expect(container.querySelector('svg')).not.toBeNull();
  });
});
