import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const serviceDetails = {
  Hybrida: {
    title: 'Hybrida',
    subtitle: 'Hybrid System',
    description: 'Advanced hybrid systems combining renewable sources for optimal efficiency.',
  },
  Helios: {
    title: 'Helios',
    subtitle: 'Solar Arrays',
    description: 'State-of-the-art solar arrays for reliable and efficient energy production.',
  },
  Anemo: {
    title: 'Anemo',
    subtitle: 'Wind Mill Array',
    description: 'Innovative wind mill arrays designed for maximum wind energy capture.',
  },
  Aqua: {
    title: 'Aqua',
    subtitle: 'Hydro Generation',
    description: 'Efficient hydro generation systems harnessing water energy for sustainable power.',
  },
};

function Services() {
  const { serviceName } = useParams();
  const service = serviceDetails[serviceName];

  if (!service) {
    return (
      <Container>
        <Typography variant="h4" color="error">Service Not Found</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>Go Back</Button>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 5 }}>
      <Box textAlign="center" my={5}>
        <Typography variant="h2" fontWeight={700}>{service.title}</Typography>
        <Typography variant="h5" color="textSecondary" gutterBottom>{service.subtitle}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>{service.description}</Typography>
        <Button component={Link} to="/" variant="contained" sx={{ mt: 3 }}>Back to Services</Button>
      </Box>
    </Container>
  );
}

export default Services;
