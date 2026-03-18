import { Avatar } from './Avatar';

export default {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = { args: { size: 'md', initials: 'JD' } };
export const WithImage = { args: { size: 'md', src: 'https://i.pravatar.cc/150?img=3', alt: 'User' } };
export const Online = { args: { size: 'md', initials: 'JD', indicator: 'online' } };
export const Offline = { args: { size: 'md', initials: 'JD', indicator: 'offline' } };
export const Busy = { args: { size: 'md', initials: 'JD', indicator: 'busy' } };
export const IconFallback = { args: { size: 'md' } };

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {['xs', 'sm', 'md', 'lg', 'xl', '2xl'].map((s) => (
        <Avatar key={s} size={s} initials="JD" />
      ))}
    </div>
  ),
};

export const AllColors = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      {['gray', 'brand', 'error', 'warning', 'success'].map((c) => (
        <Avatar key={c} size="md" color={c} initials="JD" />
      ))}
    </div>
  ),
};
