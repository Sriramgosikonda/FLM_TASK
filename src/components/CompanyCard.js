import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CompanyCard = ({ company }) => {
  return (
    <Card
      className="company-card"
      sx={{
        minWidth: 275,
        margin: 1,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
        },
        background: 'linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%)',
        borderRadius: 2,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          sx={{
            background: 'linear-gradient(45deg, #3f51b5 30%, #f50057 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
          }}
        >
          {company.name}
        </Typography>
        <Typography sx={{ mb: 1.5, color: '#1976d2', fontWeight: 500 }}>
          {company.location}
        </Typography>
        <Typography variant="body2" sx={{ color: '#666' }}>
          Industry: {company.industry}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;