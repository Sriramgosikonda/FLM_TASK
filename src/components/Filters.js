import React from 'react';
import { TextField, Select, MenuItem, FormControl, InputLabel, Box } from '@mui/material';
import { useCompanyContext } from '../context/CompanyContext';

const Filters = () => {
  const {
    search,
    setSearch,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
    sortBy,
    setSortBy
  } = useCompanyContext();

  const locations = ['Hyderabad', 'Bangalore', 'Gurgaon', 'Delhi', 'Mumbai'];
  const industries = ['Technology', 'Food', 'Retail', 'Finance', 'Healthcare', 'Fashion'];

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        mb: 2,
        p: 2,
        background: 'linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%)',
        borderRadius: 2,
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <TextField
        label="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        variant="outlined"
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#3f51b5',
            },
            '&:hover fieldset': {
              borderColor: '#f50057',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#f50057',
            },
          },
        }}
      />
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel sx={{ color: '#3f51b5' }}>Location</InputLabel>
        <Select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          label="Location"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3f51b5',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
          }}
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {locations.map(loc => (
            <MenuItem key={loc} value={loc}>{loc}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel sx={{ color: '#3f51b5' }}>Industry</InputLabel>
        <Select
          value={industryFilter}
          onChange={(e) => setIndustryFilter(e.target.value)}
          label="Industry"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3f51b5',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
          }}
        >
          <MenuItem value=""><em>All</em></MenuItem>
          {industries.map(ind => (
            <MenuItem key={ind} value={ind}>{ind}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel sx={{ color: '#3f51b5' }}>Sort by</InputLabel>
        <Select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          label="Sort by"
          sx={{
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: '#3f51b5',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#f50057',
            },
          }}
        >
          <MenuItem value="name">Name</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default Filters;