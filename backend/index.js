const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Load hotels data from hotels.json
const HOTELS_PATH = path.join(__dirname, '../hotels.json');
let hotels = [];
try {
  const data = fs.readFileSync(HOTELS_PATH, 'utf-8');
  hotels = JSON.parse(data);
} catch (err) {
  console.error('Failed to load hotels.json:', err);
}

// Payment database path
const PAYMENTS_PATH = path.join(__dirname, '../payments.json');
let payments = [];
try {
  if (fs.existsSync(PAYMENTS_PATH)) {
    const pdata = fs.readFileSync(PAYMENTS_PATH, 'utf-8');
    payments = JSON.parse(pdata);
  }
} catch (err) {
  console.error('Failed to load payments.json:', err);
}

// Reviews database path
const REVIEWS_PATH = path.join(__dirname, '../reviews.json');
let reviews = [];
try {
  if (fs.existsSync(REVIEWS_PATH)) {
    const rdata = fs.readFileSync(REVIEWS_PATH, 'utf-8');
    reviews = JSON.parse(rdata);
  }
} catch (err) {
  console.error('Failed to load reviews.json:', err);
}

// GET /hotels with optional filtering
app.get('/hotels', (req, res) => {
  let result = hotels;
  const { city, country, minRating } = req.query;
  if (city) {
    result = result.filter(h => h.city && h.city.toLowerCase() === city.toLowerCase());
  }
  if (country) {
    result = result.filter(h => h.country && h.country.toLowerCase() === country.toLowerCase());
  }
  if (minRating) {
    result = result.filter(h => h.rating_average && h.rating_average >= parseFloat(minRating));
  }
  res.json(result);
});

// GET /hotels/:id
app.get('/hotels/:id', (req, res) => {
  const hotel = hotels.find(h => h.hotel_id == req.params.id);
  if (!hotel) return res.status(404).json({ error: 'Hotel not found' });
  res.json(hotel);
});

// POST /hotels (add new hotel)
app.post('/hotels', (req, res) => {
  const newHotel = req.body;
  if (!newHotel.hotel_id) {
    newHotel.hotel_id = hotels.length ? Math.max(...hotels.map(h => h.hotel_id)) + 1 : 1;
  }
  hotels.push(newHotel);
  res.status(201).json(newHotel);
});

// PUT /hotels/:id (update hotel)
app.put('/hotels/:id', (req, res) => {
  const idx = hotels.findIndex(h => h.hotel_id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Hotel not found' });
  hotels[idx] = { ...hotels[idx], ...req.body };
  res.json(hotels[idx]);
});

// DELETE /hotels/:id (delete hotel)
app.delete('/hotels/:id', (req, res) => {
  const idx = hotels.findIndex(h => h.hotel_id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Hotel not found' });
  const deleted = hotels.splice(idx, 1);
  res.json(deleted[0]);
});

// POST /payments (record a payment)
app.post('/payments', (req, res) => {
  const payment = req.body;
  if (!payment || !payment.amount || !payment.currency || !payment.name) {
    return res.status(400).json({ error: 'Missing payment details.' });
  }
  payment.id = payments.length ? Math.max(...payments.map(p => p.id || 0)) + 1 : 1;
  payments.push(payment);
  // Save to file
  try {
    fs.writeFileSync(PAYMENTS_PATH, JSON.stringify(payments, null, 2));
  } catch (err) {
    return res.status(500).json({ error: 'Failed to save payment.' });
  }
  res.status(201).json(payment);
});

// GET /payments (list all payments)
app.get('/payments', (req, res) => {
  res.json(payments);
});

// API Routes for frontend components
// GET /api/hotels
app.get('/api/hotels', (req, res) => {
  res.json(hotels);
});

// POST /api/hotels
app.post('/api/hotels', (req, res) => {
  const newHotel = req.body;
  if (!newHotel.hotel_id) {
    newHotel.hotel_id = hotels.length ? Math.max(...hotels.map(h => h.hotel_id)) + 1 : 1;
  }
  hotels.push(newHotel);
  res.status(201).json(newHotel);
});

// GET /api/reviews
app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

// PUT /api/reviews/:id/flag
app.put('/api/reviews/:id/flag', (req, res) => {
  const review = reviews.find(r => r.id == req.params.id);
  if (!review) return res.status(404).json({ error: 'Review not found' });
  review.flagged = true;
  res.json(review);
});

// DELETE /api/reviews/:id
app.delete('/api/reviews/:id', (req, res) => {
  const idx = reviews.findIndex(r => r.id == req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Review not found' });
  const deleted = reviews.splice(idx, 1);
  res.json(deleted[0]);
});

// GET /api/analytics
app.get('/api/analytics', (req, res) => {
  // Mock analytics data
  const analytics = {
    bookingTrends: [
      { month: 'Jan', bookings: 120 },
      { month: 'Feb', bookings: 150 },
      { month: 'Mar', bookings: 180 },
      { month: 'Apr', bookings: 200 },
      { month: 'May', bookings: 220 },
      { month: 'Jun', bookings: 250 }
    ],
    averageRating: 4.2,
    totalHotels: hotels.length,
    totalReviews: reviews.length,
    totalPayments: payments.length
  };
  res.json(analytics);
});

app.get('/', (req, res) => {
  res.send({ message: 'Hotel Booking API is running.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
