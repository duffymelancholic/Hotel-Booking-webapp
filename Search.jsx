import React, { useState, useEffect } from "react";
import "./search.css"; 


const mockHotels = [
  { id: 1, name: "Serena Hotel", location: "Nairobi", price: 200 },
  { id: 2, name: "Beach Resort", location: "Mombasa", price: 150 },
];

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  // Trigger search when searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const filteredHotels = mockHotels.filter(
      (hotel) =>
        hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filteredHotels);
  }, [searchTerm]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by hotel name or location..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <button 
        className="search-button" 
        onClick={() => console.log("Search triggered:", searchTerm)}
      >
        Search
      </button>

      <div className="results-container">
        {results.length > 0 ? (
          results.map((hotel) => (
            <div key={hotel.id} className="result-item">
              <h3>{hotel.name}</h3>
              <p>Location: {hotel.location}</p>
              <p>Price: ${hotel.price}/night</p>
            </div>
          ))
        ) : (
          searchTerm && <div className="no-results">No hotels found.</div>
        )}
      </div>
    </div>
  );
}

export default Search;