import React, { useState, useEffect } from 'react';

const initialHotel = {
  name: '',
  location: '',
  description: '',
  image: null,
  roomRate: '',
};

const HotelManager = () => {
  const [hotel, setHotel] = useState(initialHotel);
  const [preview, setPreview] = useState(null);
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch('/api/hotels')
      .then(res => res.json())
      .then(data => setHotels(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel({ ...hotel, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setHotel({ ...hotel, image: file });
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(hotel).forEach(([key, value]) => {
      formData.append(key, value);
    });
    await fetch('/api/hotels', {
      method: 'POST',
      body: formData,
    });
    alert('Hotel entry submitted!');
    setHotel(initialHotel);
    setPreview(null);
    // Refresh hotel list
    fetch('/api/hotels')
      .then(res => res.json())
      .then(data => setHotels(data));
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>🏨 Hotel Manager</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h3 style={{ color: '#666', marginBottom: '20px' }}>Add New Hotel</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Hotel Name:</label>
              <input
                type="text"
                name="name"
                value={hotel.name}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Location:</label>
              <input
                type="text"
                name="location"
                value={hotel.location}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Description:</label>
              <textarea
                name="description"
                value={hotel.description}
                onChange={handleChange}
                required
                rows="4"
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px',
                  resize: 'vertical'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Room Rate ($):</label>
              <input
                type="number"
                name="roomRate"
                value={hotel.roomRate}
                onChange={handleChange}
                required
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Hotel Image:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ddd',
                  borderRadius: '5px',
                  fontSize: '16px'
                }}
              />
              {preview && (
                <img 
                  src={preview} 
                  alt="Preview" 
                  style={{ 
                    width: '200px', 
                    height: '150px', 
                    marginTop: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd'
                  }} 
                />
              )}
            </div>
            <button 
              type="submit"
              style={{
                backgroundColor: '#2196f3',
                color: 'white',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                fontSize: '16px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Add Hotel
            </button>
          </form>
        </div>
        
        <div>
          <h3 style={{ color: '#666', marginBottom: '20px' }}>Existing Hotels</h3>
          <div style={{ maxHeight: '500px', overflowY: 'auto' }}>
            {hotels.map(h => (
              <div key={h.hotel_id} style={{
                border: '1px solid #ddd',
                borderRadius: '5px',
                padding: '15px',
                marginBottom: '10px',
                backgroundColor: '#f9f9f9'
              }}>
                <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>{h.name}</h4>
                <p style={{ margin: '5px 0', color: '#666' }}><strong>Location:</strong> {h.location}</p>
                <p style={{ margin: '5px 0', color: '#666' }}><strong>Rate:</strong> ${h.roomRate}</p>
                {h.description && (
                  <p style={{ margin: '5px 0', color: '#666' }}><strong>Description:</strong> {h.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelManager;