import { Input } from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Default = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: "We'll never share your email.",
  },
};

export const WithValue = {
  args: {
    label: 'Name',
    value: 'Olivia Rhye',
    placeholder: 'Enter your name',
  },
};

export const ErrorState = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    value: 'invalid-email',
    errorMessage: 'Please enter a valid email address.',
  },
};

export const Disabled = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    disabled: true,
  },
};

export const WithLeadingIcon = {
  args: {
    label: 'Email',
    placeholder: 'olivia@untitledui.com',
    hint: 'Enter your work email.',
    iconLeading: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.33 4L8 8.67 14.67 4M1.33 12.67h13.34V3.33H1.33v9.34z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
};

export const WithTrailingIcon = {
  args: {
    label: 'Search',
    placeholder: 'Search…',
    iconTrailing: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 14l-3.5-3.5M10.5 6.5a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
};

export const AllSizes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '340px' }}>
      {['sm', 'md', 'lg'].map((size) => (
        <Input key={size} size={size} label={`Size: ${size}`} placeholder={`${size} input`} />
      ))}
    </div>
  ),
};
