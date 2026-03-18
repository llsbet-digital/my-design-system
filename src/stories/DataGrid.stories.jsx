import React from 'react';
import { DataGrid } from './DataGrid';
import { Badge } from './Badge';

const COLUMNS = [
  { key: 'name', label: 'Name' },
  { key: 'role', label: 'Role' },
  { key: 'email', label: 'Email' },
  { key: 'status', label: 'Status', render: (v) => <Badge size="sm" color={v === 'Active' ? 'success' : 'gray'} label={v} /> },
  { key: 'joined', label: 'Joined' },
];

const ROWS = [
  { id: 1, name: 'Alice Johnson',  role: 'Designer',     email: 'alice@example.com',   status: 'Active',   joined: '2024-01-12' },
  { id: 2, name: 'Bob Smith',      role: 'Engineer',     email: 'bob@example.com',     status: 'Active',   joined: '2024-02-04' },
  { id: 3, name: 'Clara Lee',      role: 'PM',           email: 'clara@example.com',   status: 'Inactive', joined: '2023-11-20' },
  { id: 4, name: 'David Park',     role: 'Designer',     email: 'david@example.com',   status: 'Active',   joined: '2024-03-08' },
  { id: 5, name: 'Eva Martinez',   role: 'Engineer',     email: 'eva@example.com',     status: 'Active',   joined: '2023-09-15' },
  { id: 6, name: 'Frank Nguyen',   role: 'QA',           email: 'frank@example.com',   status: 'Inactive', joined: '2024-01-30' },
];

export default {
  title: 'Components/DataGrid',
  component: DataGrid,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default = {
  args: { columns: COLUMNS, rows: ROWS, style: { width: 780 } },
};

export const Empty = {
  args: { columns: COLUMNS, rows: [], emptyMessage: 'No team members found.', style: { width: 780 } },
};

export const NoFooter = {
  args: { columns: COLUMNS, rows: ROWS, showFooter: false, style: { width: 780 } },
};
