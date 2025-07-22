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

app.get('/', (req, res) => {
  res.send({ message: 'Hotel Booking API is running.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
