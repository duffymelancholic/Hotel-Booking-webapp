import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMode = () => {
    setIsAdminMode(!isAdminMode);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check authentication status
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setIsLoggedIn(true);
      setUser(JSON.parse(userData));
      // Set admin mode if user is admin
      if (JSON.parse(userData).role === 'admin') {
        setIsAdminMode(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setIsAdminMode(false);
    navigate('/');
  };

  return (
    <nav style={{
      background: isScrolled 
        ? 'rgba(255, 255, 255, 0.95)' 
        : 'rgba(255, 255, 255, 0.1)',
      WebkitBackdropFilter: 'blur(20px)',
      backdropFilter: 'blur(20px)',
      padding: isScrolled ? '15px 0' : '20px 0',
      marginBottom: '0',
      borderBottom: isScrolled 
        ? '1px solid rgba(0, 0, 0, 0.1)' 
        : '1px solid rgba(255, 255, 255, 0.2)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: 'all 0.3s ease',
      boxShadow: isScrolled 
        ? '0 4px 20px rgba(0, 0, 0, 0.1)' 
        : 'none'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 30px'
      }}>
        <Link to="/" style={{ textDecoration: 'none' }} className="link-hover">
          <h1 style={{ 
            color: isScrolled ? '#333' : 'white', 
            margin: 0, 
            fontSize: '2em',
            fontWeight: 'bold',
            textShadow: isScrolled 
              ? 'none' 
              : '0 2px 10px rgba(0,0,0,0.3)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <span style={{
              fontSize: '1.2em',
              animation: 'logoFloat 3s ease-in-out infinite'
            }}>
              🏨
            </span>
            <span className="gradient-text" style={{
              background: isScrolled 
                ? 'linear-gradient(45deg, #667eea, #764ba2)' 
                : 'linear-gradient(45deg, #fff, #f0f0f0)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Hotel Booking
            </span>
          </h1>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="desktop-nav" style={{ 
          display: 'flex', 
          gap: '25px', 
          alignItems: 'center' 
        }}>
          {/* Customer Navigation */}
          {!isAdminMode && (
            <>
              <Link 
                to="/" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                🏠 Home
              </Link>
              <Link 
                to="/hotels" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/hotels') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/hotels') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/hotels') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/hotels') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/hotels') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/hotels')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/hotels')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                🏨 Hotels
              </Link>
              {isLoggedIn ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 15px',
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    color: isScrolled ? '#333' : 'white',
                    fontSize: '14px',
                    fontWeight: '500'
                  }}>
                    <span>👤</span>
                    <span>{user?.name || user?.email}</span>
                    <span style={{ fontSize: '12px', opacity: '0.7' }}>
                      ({user?.role})
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    style={{
                      background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                      color: 'white',
                      border: 'none',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = 'scale(1.05)';
                      e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = 'scale(1)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    🚪 Logout
                  </button>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="link-hover"
                  style={{ 
                    textDecoration: 'none',
                    color: isActive('/login') 
                      ? (isScrolled ? '#667eea' : '#ffd700') 
                      : (isScrolled ? '#333' : 'white'),
                    padding: '12px 20px',
                    borderRadius: '25px',
                    backgroundColor: isActive('/login') 
                      ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                      : 'rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    fontWeight: '600',
                    textShadow: isActive('/login') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                    transform: isActive('/login') ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive('/login') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive('/login')) {
                      e.target.style.transform = 'translateY(-2px) scale(1.05)';
                      e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive('/login')) {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = 'none';
                    }
                  }}
                >
                  🔐 Login
                </Link>
              )}
            </>
          )}

          {/* Admin Navigation */}
          {isAdminMode && (
            <>
              <Link 
                to="/admin" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/admin') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/admin') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/admin') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/admin') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/admin') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/admin')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/admin')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                📊 Dashboard
              </Link>
              <Link 
                to="/hotel-manager" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/hotel-manager') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/hotel-manager') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/hotel-manager') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/hotel-manager') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/hotel-manager') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/hotel-manager')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/hotel-manager')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                🏨 Hotels
              </Link>
              <Link 
                to="/review-moderation" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/review-moderation') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/review-moderation') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/review-moderation') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/review-moderation') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/review-moderation') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/review-moderation')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/review-moderation')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                ⭐ Reviews
              </Link>
              <Link 
                to="/analytics-panel" 
                className="link-hover"
                style={{ 
                  textDecoration: 'none',
                  color: isActive('/analytics-panel') 
                    ? (isScrolled ? '#667eea' : '#ffd700') 
                    : (isScrolled ? '#333' : 'white'),
                  padding: '12px 20px',
                  borderRadius: '25px',
                  backgroundColor: isActive('/analytics-panel') 
                    ? (isScrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255,215,0,0.2)') 
                    : 'rgba(255,255,255,0.1)',
                  transition: 'all 0.3s ease',
                  fontWeight: '600',
                  textShadow: isActive('/analytics-panel') ? '0 0 10px rgba(255,215,0,0.5)' : 'none',
                  transform: isActive('/analytics-panel') ? 'scale(1.05)' : 'scale(1)',
                  boxShadow: isActive('/analytics-panel') ? '0 4px 15px rgba(255,215,0,0.3)' : 'none',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isActive('/analytics-panel')) {
                    e.target.style.transform = 'translateY(-2px) scale(1.05)';
                    e.target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive('/analytics-panel')) {
                    e.target.style.transform = 'translateY(0) scale(1)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                📈 Analytics
              </Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 15px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '20px',
                  color: isScrolled ? '#333' : 'white',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  <span>👤</span>
                  <span>{user?.name || user?.email}</span>
                  <span style={{ fontSize: '12px', opacity: '0.7' }}>
                    ({user?.role})
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                    color: 'white',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = 'none';
                  }}
                >
                  🚪 Logout
                </button>
              </div>
            </>
          )}

          {/* Mode Toggle Button */}
          {isLoggedIn && (
            <button
              onClick={toggleMode}
              style={{
                background: isAdminMode 
                  ? 'linear-gradient(45deg, #ff6b6b, #ee5a52)' 
                  : 'linear-gradient(45deg, #4CAF50, #45a049)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: 'bold',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
              }}
            >
              {isAdminMode ? '👤 Customer Mode' : '⚙️ Admin Mode'}
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: isScrolled ? '#333' : 'white',
            fontSize: '24px',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: 'rgba(255, 255, 255, 0.95)',
          WebkitBackdropFilter: 'blur(20px)',
          backdropFilter: 'blur(20px)',
          padding: '20px',
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {!isAdminMode ? (
              <>
                <Link to="/" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  🏠 Home
                </Link>
                <Link to="/hotels" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  🏨 Hotels
                </Link>
                {isLoggedIn ? (
                  <>
                    <div style={{ 
                      padding: '10px', 
                      backgroundColor: '#f5f5f5', 
                      borderRadius: '8px',
                      fontSize: '14px'
                    }}>
                      👤 {user?.name || user?.email} ({user?.role})
                    </div>
                    <button
                      onClick={handleLogout}
                      style={{
                        background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}
                    >
                      🚪 Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                    🔐 Login
                  </Link>
                )}
              </>
            ) : (
              <>
                <Link to="/admin" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  📊 Dashboard
                </Link>
                <Link to="/hotel-manager" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  🏨 Hotels
                </Link>
                <Link to="/review-moderation" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  ⭐ Reviews
                </Link>
                <Link to="/analytics-panel" style={{ color: '#333', textDecoration: 'none', padding: '10px' }}>
                  📈 Analytics
                </Link>
                <div style={{ 
                  padding: '10px', 
                  backgroundColor: '#f5f5f5', 
                  borderRadius: '8px',
                  fontSize: '14px'
                }}>
                  👤 {user?.name || user?.email} ({user?.role})
                </div>
                <button
                  onClick={handleLogout}
                  style={{
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a52)',
                    color: 'white',
                    border: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}
                >
                  🚪 Logout
                </button>
              </>
            )}
            {isLoggedIn && (
              <button
                onClick={toggleMode}
                style={{
                  background: isAdminMode 
                    ? 'linear-gradient(45deg, #ff6b6b, #ee5a52)' 
                    : 'linear-gradient(45deg, #4CAF50, #45a049)',
                  color: 'white',
                  border: 'none',
                  padding: '12px 24px',
                  borderRadius: '25px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginTop: '10px'
                }}
              >
                {isAdminMode ? '👤 Customer Mode' : '⚙️ Admin Mode'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Add CSS animations and responsive styles */}
      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          h1 {
            font-size: 1.5em !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-menu-btn {
            display: none !important;
          }
          
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;