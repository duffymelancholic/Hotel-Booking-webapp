import React, { useState, useEffect } from "react";
import "./search.css";

const hotels = [
  { id: 1, name: "Serena Hotel", location: "Nairobi", price: 200, rating: 4.5, distance: 2, amenities: ["wifi", "pool"], landmarks: ["Museum", "Park"] },
  { id: 2, name: "Beach Resort", location: "Mombasa", price: 150, rating: 4.0, distance: 5, amenities: ["beach", "restaurant"], landmarks: ["Beach", "Fort"] },
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: [0, 1000],
    rating: null,
    landmark: "",
    sortBy: null
  });

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    let filteredHotels = hotels.filter(hotel =>
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Applying price filter
    filteredHotels = filteredHotels.filter(hotel =>
      hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1]
    );

    // Applying rating filter
    if (filters.rating) {
      filteredHotels = filteredHotels.filter(hotel => hotel.rating >= filters.rating);
    }

    // Applying landmark filter
    if (filters.landmark) {
      filteredHotels = filteredHotels.filter(hotel =>
        hotel.landmarks.some(landmark =>
          landmark.toLowerCase().includes(filters.landmark.toLowerCase())
        )
      );
    }

    // Applying sorting
    if (filters.sortBy) {
      filteredHotels.sort((a, b) => {
        if (filters.sortBy === 'price') return a.price - b.price;
        if (filters.sortBy === 'rating') return b.rating - a.rating;
        if (filters.sortBy === 'distance') return a.distance - b.distance;
        return 0;
      });
    }

    setResults(filteredHotels);
  }, [searchTerm, filters]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by hotel name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      
      <div className="filters-container">
        <div className="filter-group">
          <label>Price Range ($)</label>
          <input 
            type="number" 
            placeholder="Min" 
            value={filters.priceRange[0]}
            onChange={(e) => setFilters({...filters, priceRange: [Number(e.target.value), filters.priceRange[1]]})}
          />
          <input 
            type="number" 
            placeholder="Max" 
            value={filters.priceRange[1]}
            onChange={(e) => setFilters({...filters, priceRange: [filters.priceRange[0], Number(e.target.value)]})}
          />
        </div>

        <div className="filter-group">
          <label>Minimum Rating</label>
          <select 
            value={filters.rating || ''} 
            onChange={(e) => setFilters({...filters, rating: e.target.value ? Number(e.target.value) : null})}
          >
            <option value="">Any</option>
            <option value="3">3+ Stars</option>
            <option value="4">4+ Stars</option>
            <option value="4.5">4.5+ Stars</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Landmark</label>
          <input
            type="text"
            placeholder="Near landmark..."
            value={filters.landmark}
            onChange={(e) => setFilters({...filters, landmark: e.target.value})}
          />
        </div>

        <div className="filter-group">
          <label>Sort By</label>
          <select
            value={filters.sortBy || ''}
            onChange={(e) => setFilters({...filters, sortBy: e.target.value || null})}
          >
            <option value="">Default</option>
            <option value="price">Price (Low to High)</option>
            <option value="rating">Rating (High to Low)</option>
            <option value="distance">Distance (Near to Far)</option>
          </select>
        </div>
      </div>

      <div className="results-container">
        {results.length > 0 ? (
          results.map((hotel) => (
            <div key={hotel.id} className="result-item">
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Price: ${hotel.price}/night | Rating: {hotel.rating}★ | Distance: {hotel.distance}km</p>
              <p>Amenities: {hotel.amenities.join(", ")}</p>
              <p>Landmarks: {hotel.landmarks.join(", ")}</p>
            </div>
          ))
        ) : (
          searchTerm && <div className="no-results">No hotels found matching your criteria.</div>
        )}
      </div>
    </div>
  );
}

export default Search;