import React from 'react';
import { Grid } from '@mui/material';
import HotelCard from './HotelCard';

const hotels = [
  {
    id: 1,
    name: 'Grand Palace',
    description: 'Luxury hotel in the city center.',
    price: 120,
    image: '/images/hotel1.jpg',
  },
  {
    id: 2,
    name: 'Sea View Resort',
    description: 'Relax by the beach with stunning views.',
    price: 150,
    image: '/images/hotel2.jpg',
  },
  // Add more hotels as needed
];

function HotelList() {
  return (
    <Grid container spacing={2} justifyContent="center">
      {hotels.map(hotel => (
        <Grid item key={hotel.id}>
          <HotelCard hotel={hotel} />
        </Grid>
      ))}
    </Grid>
  );
}

export default HotelList;