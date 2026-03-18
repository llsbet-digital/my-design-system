import { Breadcrumb } from './Breadcrumb';

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Components', href: '/components' },
  { label: 'Breadcrumb' },
];

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Slash   = { args: { items: ITEMS, separator: 'slash' } };
export const Chevron = { args: { items: ITEMS, separator: 'chevron' } };
export const Short   = { args: { items: [{ label: 'Settings', href: '/settings' }, { label: 'Account' }], separator: 'chevron' } };
