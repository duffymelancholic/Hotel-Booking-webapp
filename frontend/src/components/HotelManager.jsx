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
    <div>
      <h2>Add / Update Hotel Entry</h2>
      <form onSubmit={handleSubmit}>
        {/* ...form fields as before... */}
      </form>
      <h3>Existing Hotels</h3>
      <ul>
        {hotels.map(h => (
          <li key={h.id}>
            <strong>{h.name}</strong> - {h.location} (${h.roomRate})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelManager;