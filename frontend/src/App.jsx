
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import AdminDashboard from './components/AdminDashboard';
import HotelManager from './components/HotelManager';
import ReviewModeration from './components/ReviewModeration';
import AnalyticsPanel from './components/AnalyticsPanel';
import Home from './components/Home';
import HotelList from './components/HotelList';
import BookingForm from './components/BookingForm';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<HotelList />} />
          <Route path="/book/:hotelId" element={<BookingForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/hotel-manager" element={<HotelManager />} />
          <Route path="/review-moderation" element={<ReviewModeration />} />
          <Route path="/analytics-panel" element={<AnalyticsPanel />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

