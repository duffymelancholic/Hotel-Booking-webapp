import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '10px',
        padding: '30px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          color: '#333',
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.5em',
          fontWeight: 'bold'
        }}>
          Admin Dashboard
        </h1>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          marginTop: '40px'
        }}>
          <Link to="/hotel-manager" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#e3f2fd',
              padding: '30px',
              borderRadius: '10px',
              border: '2px solid #2196f3',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
              ':hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
              }
            }}>
              <h2 style={{ color: '#1976d2', marginBottom: '15px' }}>🏨 Hotel Manager</h2>
              <p style={{ color: '#666' }}>Add, edit, and manage hotel listings</p>
            </div>
          </Link>
          
          <Link to="/review-moderation" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#fff3e0',
              padding: '30px',
              borderRadius: '10px',
              border: '2px solid #ff9800',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}>
              <h2 style={{ color: '#f57c00', marginBottom: '15px' }}>📝 Review Moderation</h2>
              <p style={{ color: '#666' }}>Moderate and manage user reviews</p>
            </div>
          </Link>
          
          <Link to="/analytics-panel" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '30px',
              borderRadius: '10px',
              border: '2px solid #4caf50',
              textAlign: 'center',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer'
            }}>
              <h2 style={{ color: '#388e3c', marginBottom: '15px' }}>📊 Analytics Panel</h2>
              <p style={{ color: '#666' }}>View booking trends and statistics</p>
            </div>
          </Link>
        </div>
        
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#f8f9fa',
          borderRadius: '10px'
        }}>
          <h3 style={{ color: '#666', marginBottom: '10px' }}>Quick Stats</h3>
          <p style={{ color: '#888' }}>Welcome to your hotel booking administration panel</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;