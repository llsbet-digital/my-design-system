import { fn } from 'storybook/test';
import { Toast } from './Toast';

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  args: { onClose: fn() },
};

export const Success = {
  args: { variant: 'success', title: 'Changes saved', message: 'Your profile has been updated successfully.' },
};
export const Error = {
  args: { variant: 'error', title: 'Something went wrong', message: 'Please try again or contact support.' },
};
export const Warning = {
  args: { variant: 'warning', title: 'Heads up', message: 'This action will affect all team members.' },
};
export const Info = {
  args: { variant: 'info', title: 'New update available', message: 'Version 2.0 is ready to install.' },
};
export const TitleOnly = {
  args: { variant: 'success', title: 'Copied to clipboard!' },
};
export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {['success', 'error', 'warning', 'info'].map((v) => (
        <Toast key={v} variant={v} title={`${v.charAt(0).toUpperCase() + v.slice(1)} notification`} message="Supporting description text." onClose={() => {}} />
      ))}
    </div>
  ),
};
