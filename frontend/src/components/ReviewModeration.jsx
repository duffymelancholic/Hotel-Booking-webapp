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
    <div>
      <h2>Review Moderation</h2>
      {/* ...review list as before... */}
    </div>
  );
};

export default ReviewModeration;