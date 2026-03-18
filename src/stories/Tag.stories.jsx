import { fn } from 'storybook/test';
import { Tag } from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { label: 'Design' },
};

export const Default = { args: { color: 'gray' } };
export const Removable = { args: { color: 'brand', onRemove: fn() } };
export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      {['gray', 'brand', 'error', 'warning', 'success'].map((c) => (
        <Tag key={c} label={c} color={c} />
      ))}
    </div>
  ),
};
export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      {['sm', 'md', 'lg'].map((s) => (
        <Tag key={s} label={s} size={s} color="brand" />
      ))}
    </div>
  ),
};
