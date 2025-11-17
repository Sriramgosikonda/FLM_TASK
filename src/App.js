import React from 'react';
import { Container, Typography, Box, CircularProgress, Alert } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useCompanyContext } from './context/CompanyContext';
import Filters from './components/Filters';
import CompanyCard from './components/CompanyCard';
import PaginationComponent from './components/Pagination';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#78bbebff',
      paper: '#ffffff',
    },
  },
  typography: {
    h3: {
      fontWeight: 700,
      background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    },
  },
});

function App() {
  const { companies, loading, error } = useCompanyContext();

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Company Directory
        </Typography>
        <Filters />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {companies.map(company => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </Box>
        <PaginationComponent />
      </Container>
    </ThemeProvider>
  );
}

export default App;