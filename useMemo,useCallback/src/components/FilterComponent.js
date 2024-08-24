
import React, { useState, useCallback } from 'react';

const FilterComponent = ({ onFilterChange }) => {
  const [category, setCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);

  const handleCategoryChange = useCallback((event) => {
    setCategory(event.target.value);
    onFilterChange({ category: event.target.value, maxPrice });
  }, [maxPrice, onFilterChange]);

  const handlePriceChange = useCallback((event) => {
    setMaxPrice(event.target.value);
    onFilterChange({ category, maxPrice: event.target.value });
  }, [category, onFilterChange]);

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="books">Books</option>
        <option value="clothing">Clothing</option>
      </select>
      <input type="range" min="0" max="1000" value={maxPrice} onChange={handlePriceChange} />
    </div>
  );
};

export default FilterComponent;
