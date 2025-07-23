import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const roomTypes = [
  { label: 'Single', value: 'single', price: 50 },
  { label: 'Double', value: 'double', price: 80 },
  { label: 'Suite', value: 'suite', price: 150 },
];

const BookingForm = ({ onBookingSubmit }) => {
  const [name, setName] = useState('');
  const [roomType, setRoomType] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState(1);
  const [error, setError] = useState('');

  const validate = () => {
    if (!name) return 'Name is required.';
    if (!roomType) return 'Please select a room type.';
    if (!checkIn || !checkOut) return 'Please select check-in and check-out dates.';
    if (checkOut <= checkIn) return 'Check-out must be after check-in.';
    if (guests < 1) return 'At least one guest required.';
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    onBookingSubmit({ name, roomType, checkIn, checkOut, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h2>Book Your Stay</h2>
      {error && <div className="error">{error}</div>}
      <label>Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
      </label>
      <label>Room Type:
        <select value={roomType} onChange={e => setRoomType(e.target.value)} required>
          <option value="">Select a room</option>
          {roomTypes.map(rt => (
            <option key={rt.value} value={rt.value}>{rt.label} (${rt.price}/night)</option>
          ))}
        </select>
      </label>
      <label>Check-in Date:
        <DatePicker selected={checkIn} onChange={date => setCheckIn(date)} selectsStart startDate={checkIn} endDate={checkOut} minDate={new Date()} required />
      </label>
      <label>Check-out Date:
        <DatePicker selected={checkOut} onChange={date => setCheckOut(date)} selectsEnd startDate={checkIn} endDate={checkOut} minDate={checkIn || new Date()} required />
      </label>
      <label>Guests:
        <input type="number" min="1" value={guests} onChange={e => setGuests(Number(e.target.value))} required />
      </label>
      <button type="submit">Proceed to Payment</button>
    </form>
  );
};

export default BookingForm; 