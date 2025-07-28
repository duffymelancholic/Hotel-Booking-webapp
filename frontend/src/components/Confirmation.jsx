import React from 'react';

const Confirmation = ({ paymentInfo, onBackToPayment, onStartOver }) => {
  if (!paymentInfo) return null;
  const { name, roomType, checkIn, checkOut, guests, currency, amount, paymentId, date } = paymentInfo;
  
  return (
    <div className="confirmation" style={{
      maxWidth: '900px',
      margin: '80px auto',
      padding: '60px',
      background: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '25px',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      textAlign: 'center'
    }}>
      <div style={{
        fontSize: '4rem',
        marginBottom: '20px'
      }}>
        ✅
      </div>
      
      <h2 style={{
        fontSize: '2.5rem',
        fontWeight: '700',
        color: '#333',
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #667eea, #764ba2)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }}>
        Booking Confirmed!
      </h2>
      
      <p style={{
        fontSize: '1.2rem',
        color: '#666',
        marginBottom: '40px'
      }}>
        Thank you, <strong style={{ color: '#333' }}>{name}</strong>, for your booking.
      </p>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        marginBottom: '40px'
      }}>
        <div style={{
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '15px',
          border: '1px solid rgba(102, 126, 234, 0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: '1.4em',
            fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Booking Details
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left'
          }}>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Room Type:</strong> {roomType.charAt(0).toUpperCase() + roomType.slice(1)}
            </li>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Check-in:</strong> {new Date(checkIn).toLocaleDateString()}
            </li>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Check-out:</strong> {new Date(checkOut).toLocaleDateString()}
            </li>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Guests:</strong> {guests}
            </li>
          </ul>
        </div>
        
        <div style={{
          padding: '30px',
          background: 'rgba(255, 255, 255, 0.5)',
          borderRadius: '15px',
          border: '1px solid rgba(102, 126, 234, 0.1)'
        }}>
          <h3 style={{
            color: '#667eea',
            fontSize: '1.4em',
            fontWeight: '600',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            Invoice Summary
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            textAlign: 'left'
          }}>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Amount Paid:</strong> {amount} {currency}
            </li>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Payment ID:</strong> {paymentId}
            </li>
            <li style={{ marginBottom: '10px', color: '#333' }}>
              <strong>Date:</strong> {new Date(date).toLocaleString()}
            </li>
          </ul>
        </div>
      </div>
      
      <div style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap'
      }}>
        {onBackToPayment && (
          <button 
            onClick={onBackToPayment}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'white',
              background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(255, 107, 107, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(255, 107, 107, 0.3)';
            }}
          >
            ← Back to Payment
          </button>
        )}
        
        {onStartOver && (
          <button 
            onClick={onStartOver}
            style={{
              padding: '15px 30px',
              fontSize: '1.1rem',
              fontWeight: '600',
              color: 'white',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 5px 15px rgba(102, 126, 234, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 5px 15px rgba(102, 126, 234, 0.3)';
            }}
          >
            Book Another Stay
          </button>
        )}
      </div>
    </div>
  );
};

export default Confirmation; 