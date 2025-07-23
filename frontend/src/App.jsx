import React, { useState } from 'react';
import BookingForm from './components/BookingForm';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [booking, setBooking] = useState(null);
  const [paymentInfo, setPaymentInfo] = useState(null);

  const handleBookingSubmit = (data) => {
    setBooking(data);
  };

  const handlePaymentSuccess = (info) => {
    setPaymentInfo(info);
  };

  return (
    <div className="App">
      {!booking && <BookingForm onBookingSubmit={handleBookingSubmit} />}
      {booking && !paymentInfo && <Payment booking={booking} onPaymentSuccess={handlePaymentSuccess} />}
      {paymentInfo && <Confirmation paymentInfo={paymentInfo} />}
    </div>
  );
}

export default App;
