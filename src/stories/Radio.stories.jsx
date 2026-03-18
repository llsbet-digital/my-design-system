import React, { useState } from 'react';
import { RadioGroup } from './Radio';

const OPTIONS = [
  { value: 'startup', label: 'Startup', hint: '1–10 employees' },
  { value: 'small', label: 'Small business', hint: '11–50 employees' },
  { value: 'mid', label: 'Mid-size', hint: '51–200 employees' },
  { value: 'enterprise', label: 'Enterprise', hint: '200+ employees', disabled: true },
];

export default {
  title: 'Components/Radio',
  component: RadioGroup,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { name: 'size', options: OPTIONS, value: 'startup' } };
export const Horizontal = { args: { name: 'size2', options: OPTIONS.slice(0, 3), direction: 'horizontal', value: 'startup' } };
export const SizeSm = { args: { name: 'size3', options: OPTIONS, size: 'sm', value: 'small' } };

export const Interactive = {
  render: () => {
    const [val, setVal] = useState('startup');
    return <RadioGroup name="demo" options={OPTIONS} value={val} onChange={setVal} />;
  },
};
