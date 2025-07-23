import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function HotelCard({ hotel }) {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardMedia
        component="img"
        height="180"
        image={hotel.image}
        alt={hotel.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotel.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {hotel.description}
        </Typography>
        <Typography variant="subtitle1" color="primary" sx={{ mt: 1 }}>
          ${hotel.price} / night
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }} href={`/book/${hotel.id}`}>
          Book Now
        </Button>
      </CardContent>
    </Card>
  );
}

export default HotelCard;