import React, { useState, useEffect } from 'react';

const ReviewModeration = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);

  const flagReview = async (id) => {
    await fetch(`/api/reviews/${id}/flag`, { method: 'PUT' });
    setReviews(reviews.map(r =>
      r.id === id ? { ...r, flagged: true } : r
    ));
  };

  const removeReview = async (id) => {
    await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
    setReviews(reviews.filter(r => r.id !== id));
  };

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      paddingTop: '100px', // Add top padding to account for fixed navbar
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#333', 
        marginBottom: '30px', 
        textAlign: 'center',
        fontSize: '2em',
        fontWeight: 'bold'
      }}>📝 Review Moderation</h2>
      <div>
        {reviews.map(review => (
          <div key={review.id} style={{ 
            border: '1px solid #ccc', 
            margin: '10px 0', 
            padding: '10px',
            backgroundColor: review.flagged ? '#ffebee' : 'white'
          }}>
            <h4>{review.user_name}</h4>
            <p>Rating: {review.rating}/5</p>
            <p>Comment: {review.comment}</p>
            <p>Date: {review.date}</p>
            <p>Hotel ID: {review.hotel_id}</p>
            {review.flagged && <p style={{ color: 'red' }}>FLAGGED</p>}
            <div>
              <button onClick={() => flagReview(review.id)} disabled={review.flagged}>
                Flag Review
              </button>
              <button onClick={() => removeReview(review.id)} style={{ marginLeft: '10px' }}>
                Remove Review
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewModeration;