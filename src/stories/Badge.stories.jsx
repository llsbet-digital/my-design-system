import { Badge } from './Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: [
        'gray', 'brand', 'error', 'warning', 'success',
        'blue-gray', 'blue-light', 'blue', 'indigo',
        'purple', 'pink', 'rose', 'orange',
      ],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  args: { label: 'Label', color: 'gray', size: 'md' },
};

export const Brand = {
  args: { label: 'Label', color: 'brand', size: 'md' },
};

export const Success = {
  args: { label: 'Active', color: 'success', size: 'md', dot: true },
};

export const Error = {
  args: { label: 'Error', color: 'error', size: 'md', dot: true },
};

export const Warning = {
  args: { label: 'Warning', color: 'warning', size: 'md' },
};

export const WithDot = {
  args: { label: 'Online', color: 'success', size: 'md', dot: true },
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', maxWidth: '600px' }}>
      {[
        'gray', 'brand', 'error', 'warning', 'success',
        'blue-gray', 'blue-light', 'blue', 'indigo',
        'purple', 'pink', 'rose', 'orange',
      ].map((color) => (
        <Badge key={color} label={color} color={color} size="md" />
      ))}
    </div>
  ),
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      {['sm', 'md', 'lg'].map((size) => (
        <Badge key={size} label={size} color="brand" size={size} />
      ))}
    </div>
  ),
};
