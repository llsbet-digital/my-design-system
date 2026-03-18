import React, { useState } from 'react';
import { Dropdown } from './Dropdown';

const OPTIONS = [
  { value: 'view', label: 'View details' },
  { value: 'edit', label: 'Edit' },
  { value: 'duplicate', label: 'Duplicate' },
  { divider: true },
  { value: 'archive', label: 'Archive' },
  { value: 'delete', label: 'Delete', disabled: true },
];

export default {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { options: OPTIONS } };
export const WithValue = { args: { options: OPTIONS, value: 'edit' } };
export const Disabled = { args: { options: OPTIONS, disabled: true } };

export const Interactive = {
  render: () => {
    const [val, setVal] = useState(null);
    return <Dropdown options={OPTIONS} value={val} onChange={setVal} placeholder="Select action" />;
  },
};
