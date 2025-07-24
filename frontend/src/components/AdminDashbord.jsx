import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <nav>
      <ul>
        <li><Link to="/hotel-manager">Hotel Manager</Link></li>
        <li><Link to="/review-moderation">Review Moderation</Link></li>
        <li><Link to="/analytics-panel">Analytics Panel</Link></li>
      </ul>
    </nav>
  </div>
);

export default AdminDashboard;