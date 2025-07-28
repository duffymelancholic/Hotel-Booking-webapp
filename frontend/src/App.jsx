
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import HotelManager from './components/HotelManager';
import ReviewModeration from './components/ReviewModeration';
import AnalyticsPanel from './components/AnalyticsPanel';
import Home from './components/Home';
import HotelList from './components/HotelList';
import BookingFlow from './components/BookingFlow';
import Payment from './components/Payment';
import Confirmation from './components/Confirmation';
import Login from './components/Login';

function App() {
  const [bookingData, setBookingData] = useState(null);
  const [paymentData, setPaymentData] = useState(null);

  // Load booking data from localStorage on app start
  useEffect(() => {
    const savedBooking = localStorage.getItem('bookingData');
    const savedPayment = localStorage.getItem('paymentData');
    
    if (savedBooking) {
      try {
        const parsed = JSON.parse(savedBooking);
        // Convert date strings back to Date objects
        if (parsed.checkIn) parsed.checkIn = new Date(parsed.checkIn);
        if (parsed.checkOut) parsed.checkOut = new Date(parsed.checkOut);
        setBookingData(parsed);
      } catch (error) {
        console.error('Error parsing booking data:', error);
        localStorage.removeItem('bookingData');
      }
    }
    
    if (savedPayment) {
      try {
        const parsed = JSON.parse(savedPayment);
        if (parsed.date) parsed.date = new Date(parsed.date);
        setPaymentData(parsed);
      } catch (error) {
        console.error('Error parsing payment data:', error);
        localStorage.removeItem('paymentData');
      }
    }
  }, []);

  const handleBookingSubmit = (booking) => {
    setBookingData(booking);
    localStorage.setItem('bookingData', JSON.stringify(booking));
  };

  const handlePaymentSuccess = (payment) => {
    setPaymentData(payment);
    localStorage.setItem('paymentData', JSON.stringify(payment));
  };

  const clearBookingData = () => {
    setBookingData(null);
    setPaymentData(null);
    localStorage.removeItem('bookingData');
    localStorage.removeItem('paymentData');
  };

  return (
    <AuthProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<HotelList />} />
            <Route path="/book/:hotelId" element={
              <BookingFlow onBookingSubmit={handleBookingSubmit} />
            } />
            <Route path="/payment" element={
              bookingData ? (
                <Payment 
                  booking={bookingData} 
                  onPaymentSuccess={handlePaymentSuccess}
                  onBack={() => window.history.back()}
                />
              ) : (
                <div className="error-container">
                  <h2>No booking data found</h2>
                  <p>Please start your booking process again.</p>
                  <button onClick={() => window.location.href = '/'}>Start Over</button>
                </div>
              )
            } />
            <Route path="/confirmation" element={
              paymentData ? (
                <Confirmation 
                  paymentInfo={paymentData}
                  onBackToPayment={() => window.history.back()}
                  onStartOver={clearBookingData}
                />
              ) : (
                <div className="error-container">
                  <h2>No payment data found</h2>
                  <p>Please start your booking process again.</p>
                  <button onClick={() => {
                    clearBookingData();
                    window.location.href = '/';
                  }}>Start Over</button>
                </div>
              )
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/hotel-manager" element={<HotelManager />} />
            <Route path="/review-moderation" element={<ReviewModeration />} />
            <Route path="/analytics-panel" element={<AnalyticsPanel />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

