import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const currencyRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
};

const Payment = ({ booking, onPaymentSuccess, onBack }) => {
  const navigate = useNavigate();
  const [currency, setCurrency] = useState('USD');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!booking) {
    console.log('Payment component: No booking data provided');
    return null;
  }

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
    console.log('Payment button clicked!');
    console.log('Booking data:', booking);
    console.log('Currency:', currency);
    console.log('Amount:', amount);
    
    setProcessing(true);
    setError('');
    
    try {
      const paymentData = {
        ...booking,
        currency,
        amount,
        paymentId: 'PAY' + Math.floor(Math.random() * 1000000),
        date: new Date(),
      };
      
      console.log('Sending payment data:', paymentData);
      
      const response = await fetch('http://localhost:5000/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(paymentData),
      });
      
      console.log('Response status:', response.status);
      
      if (!response.ok) {
        const err = await response.json();
        console.error('Payment error:', err);
        setError(err.error || 'Payment failed to record.');
        setProcessing(false);
        return;
      }
      
      const savedPayment = await response.json();
      console.log('Payment successful:', savedPayment);
      setProcessing(false);
      
      // Call the onPaymentSuccess callback
      if (onPaymentSuccess) {
        onPaymentSuccess(savedPayment);
      }
      
      // Navigate to confirmation page
      navigate('/confirmation');
      
    } catch (err) {
      console.error('Network error:', err);
      setError('Network error: Could not record payment.');
      setProcessing(false);
    }
  };

  return (
    <div className="payment-container">
      <form 
        onSubmit={(e) => {
          console.log('Form submitted!');
          handlePayment(e);
        }} 
        className="payment-form"
      >
        <h2>Payment Details</h2>
        
        {onBack && (
          <button type="button" onClick={onBack} className="back-button">
            ← Back to Booking
          </button>
        )}

        <div className="form-section">
          <h3>Booking Summary</h3>
          <div className="booking-summary">
            <div className="summary-item">
              <span className="label">Guest Name:</span>
              <span className="value">{booking.name}</span>
            </div>
            <div className="summary-item">
              <span className="label">Room Type:</span>
              <span className="value">{booking.roomType.charAt(0).toUpperCase() + booking.roomType.slice(1)}</span>
            </div>
            <div className="summary-item">
              <span className="label">Check-in:</span>
              <span className="value">{new Date(booking.checkIn).toLocaleDateString()}</span>
            </div>
            <div className="summary-item">
              <span className="label">Check-out:</span>
              <span className="value">{new Date(booking.checkOut).toLocaleDateString()}</span>
            </div>
            <div className="summary-item">
              <span className="label">Number of Nights:</span>
              <span className="value">{nights}</span>
            </div>
            <div className="summary-item">
              <span className="label">Guests:</span>
              <span className="value">{booking.guests}</span>
            </div>
          </div>
        </div>

        <div className="form-section">
          <h3>Payment Options</h3>
          <div className="form-group">
            <label htmlFor="currency">Select Currency</label>
            <select 
              id="currency"
              value={currency} 
              onChange={e => setCurrency(e.target.value)}
            >
              {Object.keys(currencyRates).map(cur => (
                <option key={cur} value={cur}>{cur} - {cur === 'USD' ? 'US Dollar' : cur === 'EUR' ? 'Euro' : 'British Pound'}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-section">
          <h3>Payment Summary</h3>
          <div className="payment-summary">
            <div className="summary-item">
              <span className="label">Base Amount:</span>
              <span className="value">${baseAmount} USD</span>
            </div>
            <div className="summary-item total">
              <span className="label">Total Amount:</span>
              <span className="value">{amount} {currency}</span>
            </div>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={processing} 
          className="payment-button"
          style={{
            width: '100%',
            padding: '20px 30px',
            fontSize: '1.3rem',
            fontWeight: '700',
            color: 'white',
            background: processing ? '#ccc' : 'linear-gradient(135deg, #667eea, #764ba2)',
            border: 'none',
            borderRadius: '20px',
            cursor: processing ? 'not-allowed' : 'pointer',
            transition: 'all 0.3s ease',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginTop: '20px',
            boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)',
            display: 'block',
            textAlign: 'center'
          }}
        >
          {processing ? 'Processing Payment...' : 'Pay Now'}
        </button>
        
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default Payment; 