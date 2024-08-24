import React from 'react';
import ProductList from './components/ProductList';
import FilterComponent from './components/FilterComponent';

function App() {
  const [filter, setFilter] = React.useState({ category: 'all', maxPrice: 1000 });
  const [sortKey, setSortKey] = React.useState('price');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSortChange = (newSortKey) => {
    setSortKey(newSortKey);
  };

  return (
    <div className="App">
      <FilterComponent onFilterChange={handleFilterChange} />
      <select onChange={(e) => handleSortChange(e.target.value)} value={sortKey}>
        <option value="price">Sort by Price</option>
        <option value="name">Sort by Name</option>
      </select>
      <ProductList filter={filter} sortKey={sortKey} />
    </div>
  );
}

export default App;