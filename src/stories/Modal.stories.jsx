import React, { useState } from 'react';
import { Modal } from './Modal';
import { Button } from './Button';

export default {
  title: 'Components/Modal',
  component: Modal,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

const TrashIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3,6 5,6 21,6" />
    <path d="M19 6l-1 14H6L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4h6v2" />
  </svg>
);

export const Default = {
  args: {
    open: true,
    title: 'Modal title',
    subtitle: 'Supporting text that describes the purpose of this modal.',
    children: 'Modal body content. Add forms, lists, or any other content here.',
    footer: (
      <>
        <Button variant="secondary" size="md" label="Cancel" />
        <Button variant="primary" size="md" label="Confirm" />
      </>
    ),
  },
};

export const Destructive = {
  args: {
    open: true,
    size: 'sm',
    icon: <TrashIcon />,
    iconVariant: 'error',
    title: 'Delete account',
    subtitle: 'Are you sure you want to delete your account? This action cannot be undone.',
    footer: (
      <>
        <Button variant="secondary" size="md" label="Cancel" />
        <Button variant="destructive" size="md" label="Delete account" />
      </>
    ),
  },
};

export const Large = {
  args: {
    open: true,
    size: 'lg',
    title: 'Large modal',
    subtitle: 'This modal is wider and suitable for displaying more complex content.',
    children: 'Put a form, table, or any complex content here.',
    footer: (
      <>
        <Button variant="secondary" size="md" label="Cancel" />
        <Button variant="primary" size="md" label="Save" />
      </>
    ),
  },
};

export const Interactive = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="primary" size="md" label="Open modal" onClick={() => setOpen(true)} />
        <Modal
          open={open}
          title="Confirm action"
          subtitle="This will update your settings."
          onClose={() => setOpen(false)}
          footer={
            <>
              <Button variant="secondary" size="md" label="Cancel" onClick={() => setOpen(false)} />
              <Button variant="primary" size="md" label="Confirm" onClick={() => setOpen(false)} />
            </>
          }
        >
          Are you sure you want to proceed? Changes will take effect immediately.
        </Modal>
      </>
    );
  },
};
