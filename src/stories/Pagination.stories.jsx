import React, { useState } from 'react';
import { Pagination } from './Pagination';

export default {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export const Default      = { args: { page: 1, totalPages: 10 } };
export const MiddlePage   = { args: { page: 5, totalPages: 10 } };
export const LastPage     = { args: { page: 10, totalPages: 10 } };
export const FewPages     = { args: { page: 2, totalPages: 4 } };
export const WithLabels   = { args: { page: 3, totalPages: 10, showLabels: true } };

export const Interactive = {
  render: () => {
    const [page, setPage] = useState(1);
    return <Pagination page={page} totalPages={12} onChange={setPage} showLabels />;
  },
};
