import { fn } from 'storybook/test';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'primary', 'secondary', 'secondary-color',
        'tertiary', 'tertiary-color',
        'destructive', 'destructive-secondary',
        'link', 'link-gray',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl', '2xl'] },
  },
  args: { onClick: fn() },
};

export const Primary = {
  args: { variant: 'primary', size: 'md', label: 'Button CTA' },
};

export const Secondary = {
  args: { variant: 'secondary', size: 'md', label: 'Button CTA' },
};

export const SecondaryColor = {
  args: { variant: 'secondary-color', size: 'md', label: 'Button CTA' },
};

export const Tertiary = {
  args: { variant: 'tertiary', size: 'md', label: 'Button CTA' },
};

export const TertiaryColor = {
  args: { variant: 'tertiary-color', size: 'md', label: 'Button CTA' },
};

export const Destructive = {
  args: { variant: 'destructive', size: 'md', label: 'Delete account' },
};

export const DestructiveSecondary = {
  args: { variant: 'destructive-secondary', size: 'md', label: 'Delete account' },
};

export const LinkBrand = {
  args: { variant: 'link', size: 'md', label: 'Learn more' },
};

export const LinkGray = {
  args: { variant: 'link-gray', size: 'md', label: 'Learn more' },
};

export const Disabled = {
  args: { variant: 'primary', size: 'md', label: 'Button CTA', disabled: true },
};

export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      {[
        'primary', 'secondary', 'secondary-color',
        'tertiary', 'tertiary-color',
        'destructive', 'destructive-secondary',
        'link', 'link-gray',
      ].map((v) => (
        <Button key={v} {...args} variant={v} label={v} />
      ))}
    </div>
  ),
  args: { size: 'md', onClick: fn() },
};

export const AllSizes = {
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
      {['sm', 'md', 'lg', 'xl', '2xl'].map((size) => (
        <Button key={size} {...args} size={size} label={size} />
      ))}
    </div>
  ),
  args: { variant: 'primary', onClick: fn() },
};
