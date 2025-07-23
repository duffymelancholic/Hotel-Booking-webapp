import React, { useState } from 'react';

const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
};

const Payment = ({ booking, onPaymentSuccess }) => {
  const [currency, setCurrency] = useState('USD');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!booking) return null;

  const roomPrices = {
    single: 50,
    double: 80,
    suite: 150,
  };

  const nights = Math.ceil((booking.checkOut - booking.checkIn) / (1000 * 60 * 60 * 24));
  const baseAmount = roomPrices[booking.roomType] * nights;
  const amount = (baseAmount * currencyRates[currency]).toFixed(2);

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);
    setError('');
    setTimeout(async () => {
      setProcessing(false);
      const paymentData = {
        ...booking,
        currency,
        amount,
        paymentId: 'PAY' + Math.floor(Math.random() * 1000000),
        date: new Date(),
      };
      try {
        const response = await fetch('http://localhost:5000/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(paymentData),
        });
        if (!response.ok) {
          const err = await response.json();
          setError(err.error || 'Payment failed to record.');
          return;
        }
        const savedPayment = await response.json();
        onPaymentSuccess(savedPayment);
      } catch (err) {
        setError('Network error: Could not record payment.');
      }
    }, 1500);
  };

  return (
    <form onSubmit={handlePayment} className="payment-form">
      <h2>Payment</h2>
      <div>
        <label>Currency:
          <select value={currency} onChange={e => setCurrency(e.target.value)}>
            {Object.keys(currencyRates).map(cur => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </label>
      </div>
      <div>Total: <strong>{amount} {currency}</strong></div>
      <button type="submit" disabled={processing}>{processing ? 'Processing...' : 'Pay Now'}</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Payment; 