import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

export default {
  title: 'Components/Card',
  component: Card,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    title: 'Card title',
    subtitle: 'Supporting text goes here.',
    children: 'Card body content. Add any content you need here.',
    style: { width: 380 },
  },
};

export const WithFooter = {
  args: {
    title: 'Confirm action',
    subtitle: 'This cannot be undone.',
    children: 'Are you sure you want to delete this item?',
    footer: (
      <>
        <Button variant="secondary" size="sm" label="Cancel" />
        <Button variant="destructive" size="sm" label="Delete" />
      </>
    ),
    style: { width: 380 },
  },
};

export const WithHeaderAction = {
  args: {
    title: 'Team members',
    headerAction: <Button variant="secondary" size="sm" label="View all" />,
    children: 'List of members goes here.',
    style: { width: 380 },
  },
};

export const NoHeader = {
  args: {
    children: 'A simple card with no header or footer.',
    style: { width: 380 },
  },
};

export const ShadowLg = {
  args: {
    title: 'Elevated card',
    children: 'This card uses a larger shadow.',
    shadow: 'lg',
    style: { width: 380 },
  },
};
