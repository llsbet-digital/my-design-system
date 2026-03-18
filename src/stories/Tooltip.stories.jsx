import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from './Button';

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

const Trigger = <Button variant="secondary" size="md" label="Hover me" />;

export const Top    = { args: { content: 'Tooltip text', position: 'top',    children: Trigger } };
export const Bottom = { args: { content: 'Tooltip text', position: 'bottom', children: Trigger } };
export const Left   = { args: { content: 'Tooltip text', position: 'left',   children: Trigger } };
export const Right  = { args: { content: 'Tooltip text', position: 'right',  children: Trigger } };

export const LongContent = {
  args: {
    content: 'This tooltip contains a longer description that wraps across multiple lines.',
    position: 'top',
    children: Trigger,
  },
};
