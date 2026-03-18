import React, { useState } from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { label: 'Accept terms and conditions' } };
export const Checked = { args: { label: 'Accept terms and conditions', checked: true } };
export const Indeterminate = { args: { label: 'Select all', indeterminate: true } };
export const WithHint = { args: { label: 'Marketing emails', hint: 'Get notified about new products and features.' } };
export const Error = { args: { label: 'Accept terms', errorMessage: 'You must accept to continue.' } };
export const Disabled = { args: { label: 'Disabled option', disabled: true } };
export const DisabledChecked = { args: { label: 'Disabled checked', checked: true, disabled: true } };
export const SizeSm = { args: { size: 'sm', label: 'Small checkbox' } };

export const Interactive = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label="Toggle me"
        hint="Click to toggle"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
    );
  },
};
