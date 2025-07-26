import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  // Hero background images for dynamic rotation
  const heroImages = [
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2068&q=80',
    'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
  ];

  useEffect(() => {
    fetchHotels();
    
    // Rotate hero background images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const fetchHotels = async () => {
    try {
      const response = await fetch('/api/hotels');
      const data = await response.json();
      setHotels(data.slice(0, 6)); // Show only first 6 hotels
      setLoading(false);
    } catch (error) {
      console.error('Error fetching hotels:', error);
      setLoading(false);
    }
  };

  const filteredHotels = hotels.filter(hotel => 
    hotel.hotel_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hotel.city?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Dynamic Hero Section */}
      <div style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Dynamic Background */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition: 'opacity 1s ease-in-out',
          zIndex: 1
        }} />
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.8) 0%, rgba(118, 75, 162, 0.8) 100%)',
          zIndex: 2
        }} />

        {/* Floating particles */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 3,
          pointerEvents: 'none'
        }}>
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '4px',
                height: '4px',
                background: 'rgba(255, 255, 255, 0.6)',
                borderRadius: '50%',
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{
          position: 'relative',
          zIndex: 4,
          textAlign: 'center',
          color: 'white',
          maxWidth: '1200px',
          padding: '0 20px'
        }}>
          <h1 style={{ 
            fontSize: '4.5em', 
            marginBottom: '20px', 
            fontWeight: 'bold',
            textShadow: '0 4px 20px rgba(0,0,0,0.3)',
            animation: 'slideInDown 1s ease-out',
            background: 'linear-gradient(45deg, #fff, #f0f0f0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Find Your Perfect Stay
          </h1>
          
          <p style={{ 
            fontSize: '1.5em', 
            marginBottom: '50px', 
            opacity: 0.9,
            animation: 'slideInUp 1s ease-out 0.3s both',
            textShadow: '0 2px 10px rgba(0,0,0,0.3)'
          }}>
            Discover amazing hotels around the world with unbeatable prices
          </p>
          
          {/* Enhanced Search Bar */}
          <div style={{
            display: 'flex',
            gap: '15px',
            maxWidth: '700px',
            margin: '0 auto',
            justifyContent: 'center',
            animation: 'slideInUp 1s ease-out 0.6s both'
          }}>
            <div style={{
              flex: '1',
              position: 'relative',
              transform: isSearchFocused ? 'scale(1.02)' : 'scale(1)',
              transition: 'transform 0.3s ease'
            }}>
              <input
                type="text"
                placeholder="Search hotels or cities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                style={{
                  width: '100%',
                  padding: '20px 25px',
                  border: 'none',
                  borderRadius: '30px',
                  fontSize: '18px',
                  outline: 'none',
                  background: 'rgba(255, 255, 255, 0.99)',
                  WebkitBackdropFilter: 'blur(1px)',
                  backdropFilter: 'blur(1px)',
                  boxShadow: isSearchFocused 
                    ? '0 0 30px rgba(255, 255, 255, 0.3)' 
                    : '0 8px 25px rgba(0, 0, 0, 0.2)',
                  transition: 'all 0.3s ease',
                  color: '#333',
                  fontWeight: '600',
                  textShadow: 'none'
                }}
              />
              {isSearchFocused && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  right: 0,
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '15px',
                  marginTop: '10px',
                  padding: '15px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  animation: 'fadeIn 0.3s ease-out'
                }}>
                  <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                    💡 Try searching for: "Paris", "Beach Resort", "Luxury Hotel"
                  </p>
                </div>
              )}
            </div>
            
            <Link 
              to="/hotels"
              style={{
                backgroundColor: '#ff6b6b',
                color: 'white',
                padding: '20px 35px',
                borderRadius: '30px',
                textDecoration: 'none',
                fontWeight: 'bold',
                fontSize: '18px',
                boxShadow: '0 8px 25px rgba(255, 107, 107, 0.4)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-3px) scale(1.05)';
                e.target.style.boxShadow = '0 12px 35px rgba(255, 107, 107, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0) scale(1)';
                e.target.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.4)';
              }}
            >
              🔍 Search
            </Link>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%)',
            animation: 'bounce 2s infinite',
            zIndex: 4
          }}>
            <div style={{
              width: '30px',
              height: '50px',
              border: '2px solid rgba(255, 255, 255, 0.6)',
              borderRadius: '15px',
              position: 'relative'
            }}>
              <div style={{
                width: '4px',
                height: '8px',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '2px',
                position: 'absolute',
                top: '8px',
                left: '50%',
                transform: 'translateX(-50%)',
                animation: 'scroll 2s infinite'
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Hotels Section */}
      <div style={{ 
        maxWidth: '1400px', 
        margin: '0 auto', 
        padding: '80px 20px',
        position: 'relative'
      }}>
        <h2 style={{ 
          textAlign: 'center', 
          fontSize: '3.5em', 
          marginBottom: '20px',
          color: '#333',
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Featured Hotels
        </h2>
        
        <p style={{
          textAlign: 'center',
          fontSize: '1.2em',
          color: '#666',
          marginBottom: '60px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Handpicked luxury accommodations for your perfect getaway
        </p>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '60px' }}>
            <div style={{
              display: 'inline-block',
              width: '50px',
              height: '50px',
              border: '4px solid #f3f3f3',
              borderTop: '4px solid #667eea',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }} />
            <p style={{ marginTop: '20px', color: '#666', fontSize: '18px' }}>
              Loading amazing hotels...
            </p>
          </div>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '40px'
          }}>
            {filteredHotels.map((hotel, index) => (
              <div 
                key={hotel.hotel_id} 
                style={{
                  backgroundColor: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  transition: 'all 0.4s ease',
                  cursor: 'pointer',
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  position: 'relative'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,0,0,0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{
                  height: '250px',
                  backgroundImage: `url(${hotel.photo1 || 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {/* Price tag */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                    color: 'white',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
                    animation: 'pulse 2s ease-in-out infinite'
                  }}>
                    ${hotel.rates_from}
                  </div>
                  
                  {/* Star rating */}
                  <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    padding: '5px 10px',
                    borderRadius: '15px',
                    fontSize: '14px',
                    fontWeight: 'bold'
                  }}>
                    {'⭐'.repeat(hotel.star_rating)} {hotel.star_rating}★
                  </div>
                </div>
                
                <div style={{ padding: '30px' }}>
                  <h3 style={{ 
                    fontSize: '1.6em', 
                    marginBottom: '15px',
                    color: '#333',
                    fontWeight: 'bold'
                  }}>
                    {hotel.hotel_name}
                  </h3>
                  
                  <p style={{ 
                    color: '#666', 
                    marginBottom: '20px',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    📍 {hotel.city}, {hotel.country}
                  </p>
                  
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '25px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ 
                        background: 'linear-gradient(45deg, #4CAF50, #45a049)',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: 'bold'
                      }}>
                        ⭐ {hotel.rating_average || 'N/A'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#666' }}>
                        {hotel.number_of_reviews || 0} reviews
                      </span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/book/${hotel.hotel_id}`}
                    style={{
                      display: 'block',
                      background: 'linear-gradient(45deg, #2196f3, #1976d2)',
                      color: 'white',
                      textAlign: 'center',
                      padding: '15px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      fontSize: '16px',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 8px 25px rgba(33, 150, 243, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    View Details & Book
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Enhanced Features Section */}
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background pattern */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: '3.5em', 
            marginBottom: '20px',
            color: 'white',
            fontWeight: 'bold'
          }}>
            Why Choose Us?
          </h2>
          
          <p style={{
            textAlign: 'center',
            fontSize: '1.3em',
            color: 'rgba(255, 255, 255, 0.9)',
            marginBottom: '60px',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            Experience the difference with our premium services
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px'
          }}>
            {[
              {
                icon: '🏨',
                title: 'Best Hotels',
                description: 'Carefully curated selection of the world\'s finest hotels',
                color: '#ff6b6b'
              },
              {
                icon: '💰',
                title: 'Best Prices',
                description: 'Guaranteed lowest prices with price match promise',
                color: '#4CAF50'
              },
              {
                icon: '🛡️',
                title: 'Secure Booking',
                description: 'Safe and secure payment processing with encryption',
                color: '#2196f3'
              },
              {
                icon: '📞',
                title: '24/7 Support',
                description: 'Round-the-clock customer support for peace of mind',
                color: '#ff9800'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                style={{ 
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '40px 30px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  animation: `slideInUp 0.6s ease-out ${index * 0.1 + 0.5}s both`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                }}
              >
                <div style={{ 
                  fontSize: '4em', 
                  marginBottom: '25px',
                  animation: 'bounce 2s ease-in-out infinite',
                  animationDelay: `${index * 0.2}s`
                }}>
                  {feature.icon}
                </div>
                <h3 style={{ 
                  marginBottom: '20px', 
                  color: 'white',
                  fontSize: '1.8em',
                  fontWeight: 'bold'
                }}>
                  {feature.title}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.9)', 
                  lineHeight: '1.6',
                  fontSize: '16px'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(-50%) translateY(0); opacity: 1; }
          100% { transform: translateX(-50%) translateY(20px); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Home;