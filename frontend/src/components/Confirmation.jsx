import React from 'react';

const Confirmation = ({ paymentInfo }) => {
  if (!paymentInfo) return null;
  const { name, roomType, checkIn, checkOut, guests, currency, amount, paymentId, date } = paymentInfo;
  return (
    <div className="confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Thank you, <strong>{name}</strong>, for your booking.</p>
      <h3>Booking Details</h3>
      <ul>
        <li>Room Type: {roomType}</li>
        <li>Check-in: {new Date(checkIn).toLocaleDateString()}</li>
        <li>Check-out: {new Date(checkOut).toLocaleDateString()}</li>
        <li>Guests: {guests}</li>
      </ul>
      <h3>Invoice Summary</h3>
      <ul>
        <li>Amount Paid: {amount} {currency}</li>
        <li>Payment ID: {paymentId}</li>
        <li>Date: {new Date(date).toLocaleString()}</li>
      </ul>
    </div>
  );
};

export default Confirmation; 