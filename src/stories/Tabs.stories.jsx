import { Tabs } from './Tabs';

const TABS = [
  { value: 'overview', label: 'Overview', content: 'Overview content goes here.' },
  { value: 'details', label: 'Details', count: 12, content: 'Details content goes here.' },
  { value: 'activity', label: 'Activity', content: 'Activity feed goes here.' },
  { value: 'settings', label: 'Settings', disabled: true },
];

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Underline = { args: { tabs: TABS } };
export const Pill = { args: { tabs: TABS, variant: 'pill' } };
export const WithCounts = { args: { tabs: TABS, defaultTab: 'details' } };
