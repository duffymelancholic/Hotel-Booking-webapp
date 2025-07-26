import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [minRating, setMinRating] = useState('');
  const [sortBy, setSortBy] = useState('name');

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('/api/hotels');
      const data = await response.json();
      setHotels(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setLoading(false);
    }
  };

  const filteredAndSortedHotels = hotels
    .filter(hotel => {
      const matchesSearch = hotel.hotel_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           hotel.city?.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCity = !selectedCity || hotel.city === selectedCity;
      const matchesRating = !minRating || (hotel.rating_average && hotel.rating_average >= parseFloat(minRating));
      
      return matchesSearch && matchesCity && matchesRating;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.hotel_name?.localeCompare(b.hotel_name);
        case 'price':
          return (a.rates_from || 0) - (b.rates_from || 0);
        case 'rating':
          return (b.rating_average || 0) - (a.rating_average || 0);
        default:
          return 0;
      }
    });

  const cities = [...new Set(hotels.map(hotel => hotel.city).filter(Boolean))];

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>
        All Hotels
      </h1>

      {/* Search and Filter Section */}
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        marginBottom: '30px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          alignItems: 'end'
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Search:</label>
            <input
              type="text"
              placeholder="Search hotels or cities..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City:</label>
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            >
              <option value="">All Cities</option>
              {cities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Min Rating:</label>
            <select
              value={minRating}
              onChange={(e) => setMinRating(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            >
              <option value="">Any Rating</option>
              <option value="9">9+ Stars</option>
              <option value="8">8+ Stars</option>
              <option value="7">7+ Stars</option>
              <option value="6">6+ Stars</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              style={{
                width: '100%',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                fontSize: '16px'
              }}
            >
              <option value="name">Name</option>
              <option value="price">Price (Low to High)</option>
              <option value="rating">Rating (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={{ marginBottom: '20px', color: '#666' }}>
        Showing {filteredAndSortedHotels.length} of {hotels.length} hotels
      </div>

      {/* Hotels Grid */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Loading hotels...</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '30px'
        }}>
          {filteredAndSortedHotels.map(hotel => (
            <div key={hotel.hotel_id} style={{
              backgroundColor: 'white',
              borderRadius: '15px',
              overflow: 'hidden',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease'
            }}>
              <div style={{
                height: '200px',
                backgroundImage: `url(${hotel.photo1 || 'https://via.placeholder.com/400x200?text=Hotel'})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  backgroundColor: '#ff6b6b',
                  color: 'white',
                  padding: '5px 10px',
                  borderRadius: '15px',
                  fontSize: '14px',
                  fontWeight: 'bold'
                }}>
                  ${hotel.rates_from}
                </div>
              </div>
              
              <div style={{ padding: '25px' }}>
                <h3 style={{ 
                  fontSize: '1.4em', 
                  marginBottom: '10px',
                  color: '#333'
                }}>
                  {hotel.hotel_name}
                </h3>
                
                <p style={{ 
                  color: '#666', 
                  marginBottom: '15px',
                  fontSize: '14px'
                }}>
                  📍 {hotel.city}, {hotel.country}
                </p>
                
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ 
                      backgroundColor: '#4CAF50',
                      color: 'white',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      marginRight: '10px'
                    }}>
                      ⭐ {hotel.rating_average || 'N/A'}
                    </span>
                    <span style={{ fontSize: '14px', color: '#666' }}>
                      {hotel.number_of_reviews || 0} reviews
                    </span>
                  </div>
                  
                  <div style={{ 
                    backgroundColor: '#e3f2fd',
                    color: '#1976d2',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}>
                    {hotel.star_rating}★ Hotel
                  </div>
                </div>
                
                <p style={{ 
                  color: '#666', 
                  fontSize: '14px',
                  lineHeight: '1.5',
                  marginBottom: '20px'
                }}>
                  {hotel.overview?.substring(0, 120)}...
                </p>
                
                <Link 
                  to={`/book/${hotel.hotel_id}`}
                  style={{
                    display: 'block',
                    backgroundColor: '#2196f3',
                    color: 'white',
                    textAlign: 'center',
                    padding: '12px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  View Details & Book
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredAndSortedHotels.length === 0 && !loading && (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.2em', color: '#666' }}>
            No hotels found matching your criteria. Try adjusting your search.
          </p>
        </div>
      )}
    </div>
  );
};

export default HotelList;