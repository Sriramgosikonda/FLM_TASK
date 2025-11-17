import React from 'react';
import { Pagination as MuiPagination, Box } from '@mui/material';
import { useCompanyContext } from '../context/CompanyContext';

const PaginationComponent = () => {
  const { totalCompanies, companiesPerPage, currentPage, paginate } = useCompanyContext();

  const pageCount = Math.ceil(totalCompanies / companiesPerPage);

  if (pageCount <= 1) return null;

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
      <MuiPagination
        count={pageCount}
        page={currentPage}
        onChange={(event, value) => paginate(value)}
        color="primary"
      />
    </Box>
  );
};

export default PaginationComponent;