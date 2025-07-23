import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Hotel Booking
      </Typography>
      <Typography variant="h6" gutterBottom>
        Find and book the best hotels for your next trip!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        component={Link}
        to="/hotels"
        sx={{ mt: 4 }}
      >
        Browse Hotels
      </Button>
    </Box>
  );
}

export default Home;