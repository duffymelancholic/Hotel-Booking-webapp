import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f5f5f5',
      padding: '20px',
      paddingTop: '100px' // Add top padding to account for fixed navbar
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        backgroundColor: 'white',
        borderRadius: '15px',
        padding: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
        border: '1px solid rgba(255,255,255,0.2)',
        WebkitBackdropFilter: 'blur(10px)',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{
          color: '#333',
          textAlign: 'center',
          marginBottom: '40px',
          fontSize: '2.5em',
          fontWeight: 'bold',
          textShadow: '0 2px 4px rgba(0,0,0,0.1)',
          letterSpacing: '1px'
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
              borderRadius: '15px',
              border: '2px solid #2196f3',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(33, 150, 243, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 12px 30px rgba(33, 150, 243, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(33, 150, 243, 0.1)';
            }}>
              <h2 style={{ 
                color: '#1976d2', 
                marginBottom: '15px',
                fontSize: '1.5em',
                fontWeight: 'bold'
              }}>🏨 Hotel Manager</h2>
              <p style={{ 
                color: '#666',
                fontSize: '1.1em',
                lineHeight: '1.5'
              }}>Add, edit, and manage hotel listings</p>
            </div>
          </Link>
          
          <Link to="/review-moderation" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#fff3e0',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid #ff9800',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(255, 152, 0, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 12px 30px rgba(255, 152, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(255, 152, 0, 0.1)';
            }}>
              <h2 style={{ 
                color: '#f57c00', 
                marginBottom: '15px',
                fontSize: '1.5em',
                fontWeight: 'bold'
              }}>📝 Review Moderation</h2>
              <p style={{ 
                color: '#666',
                fontSize: '1.1em',
                lineHeight: '1.5'
              }}>Moderate and manage user reviews</p>
            </div>
          </Link>
          
          <Link to="/analytics-panel" style={{ textDecoration: 'none' }}>
            <div style={{
              backgroundColor: '#e8f5e8',
              padding: '30px',
              borderRadius: '15px',
              border: '2px solid #4caf50',
              textAlign: 'center',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(76, 175, 80, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px)';
              e.target.style.boxShadow = '0 12px 30px rgba(76, 175, 80, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.1)';
            }}>
              <h2 style={{ 
                color: '#388e3c', 
                marginBottom: '15px',
                fontSize: '1.5em',
                fontWeight: 'bold'
              }}>📊 Analytics Panel</h2>
              <p style={{ 
                color: '#666',
                fontSize: '1.1em',
                lineHeight: '1.5'
              }}>View booking trends and statistics</p>
            </div>
          </Link>
        </div>
        
        <div style={{
          marginTop: '40px',
          textAlign: 'center',
          padding: '30px',
          backgroundColor: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          borderRadius: '15px',
          border: '1px solid rgba(0,0,0,0.05)',
          boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
        }}>
          <h3 style={{ 
            color: '#495057', 
            marginBottom: '15px',
            fontSize: '1.3em',
            fontWeight: 'bold'
          }}>Quick Stats</h3>
          <p style={{ 
            color: '#6c757d',
            fontSize: '1.1em',
            lineHeight: '1.6'
          }}>Welcome to your hotel booking administration panel. Manage your properties, reviews, and view analytics all in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;