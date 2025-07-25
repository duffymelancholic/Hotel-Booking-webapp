
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import AdminDashboard from './components/AdminDashboard';
import HotelManager from './components/HotelManager';
import ReviewModeration from './components/ReviewModeration';
import AnalyticsPanel from './components/AnalyticsPanel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/hotel-manager" element={<HotelManager />} />
        <Route path="/review-moderation" element={<ReviewModeration />} />
        <Route path="/analytics-panel" element={<AnalyticsPanel />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;

