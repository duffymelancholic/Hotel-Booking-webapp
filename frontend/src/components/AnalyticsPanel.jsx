import React, { useEffect, useState } from 'react';

const AnalyticsPanel = () => {
  const [analytics, setAnalytics] = useState({ 
    bookingTrends: [], 
    averageRating: 0,
    totalHotels: 0,
    totalReviews: 0,
    totalPayments: 0
  });

  useEffect(() => {
    fetch('/api/analytics')
      .then(res => res.json())
      .then(data => setAnalytics(data));
  }, []);

  return (
    <div>
      <h2>Analytics Panel</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', margin: '20px 0' }}>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Total Hotels</h3>
          <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{analytics.totalHotels}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Total Reviews</h3>
          <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{analytics.totalReviews}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Total Payments</h3>
          <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{analytics.totalPayments}</p>
        </div>
        <div style={{ border: '1px solid #ccc', padding: '20px', textAlign: 'center' }}>
          <h3>Average Rating</h3>
          <p style={{ fontSize: '2em', fontWeight: 'bold' }}>{analytics.averageRating}/5</p>
        </div>
      </div>
      
      <h3>Booking Trends</h3>
      <div style={{ border: '1px solid #ccc', padding: '20px' }}>
        {analytics.bookingTrends.map((trend, index) => (
          <div key={index} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            padding: '10px 0',
            borderBottom: index < analytics.bookingTrends.length - 1 ? '1px solid #eee' : 'none'
          }}>
            <span>{trend.month}</span>
            <span>{trend.bookings} bookings</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsPanel;