import React, { useState } from 'react';
import { Toggle } from './Toggle';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { label: 'Enable notifications' } };
export const On = { args: { label: 'Enable notifications', checked: true } };
export const SmallOff = { args: { size: 'sm', label: 'Small toggle' } };
export const SmallOn = { args: { size: 'sm', label: 'Small toggle', checked: true } };
export const LabelLeft = { args: { label: 'Dark mode', labelPosition: 'left', checked: true } };
export const Disabled = { args: { label: 'Disabled', disabled: true } };
export const DisabledOn = { args: { label: 'Disabled on', checked: true, disabled: true } };
export const NoLabel = { args: {} };

export const Interactive = {
  render: () => {
    const [on, setOn] = useState(false);
    return <Toggle label={on ? 'On' : 'Off'} checked={on} onChange={(e) => setOn(e.target.checked)} />;
  },
};
